import Sequelize from "sequelize"
import User from "./../../models/user"
import _ from "underscore"
import Repository from "./repository"

class Database {
    databases = {
        main: {
            database: null,
            models: {},
        },
    }

    models = {
        user: User,
    }

    repositories = {}

    constructor() {}

    addRepository(modelName, Repo) {
        this.repositories[modelName] = Repo
    }

    getModel(modelName, database = "main") {
        return this.databases[database].models[modelName]
    }

    init(App) {
        this.databases["main"].database = new Sequelize({ dialect: "postgres", ...App.config.database })
        this.processModels("main")

        this.databases["main"].database.sync()
    }

    processModels(databaseName) {
        const database = this.databases[databaseName].database

        _.each(Object.keys(this.models), modelName => {
            this.databases[databaseName].models[modelName] = new this.models[modelName]().build(database)
        })
    }

    getRepository(req, modelName, databaseName = "main") {
        const database = this.databases[databaseName]

        if (database === undefined) {
            throw new Error(`Database '${databaseName}' is not registered`)
        }

        const Model = database.models[modelName]
        if (Model === undefined) {
            throw new Error(`Model '${modelName}' is not registered in database '${databaseName}'`)
        }

        const data = this.models[modelName]

        const CustomRepository = this.repositories[modelName]

        const ModelRepository = CustomRepository !== undefined ? CustomRepository : Repository

        return new ModelRepository(req, Model, data)
    }
}

const database = new Database()

export default database
