import Sequelize from "sequelize"
import User from "./../../models/user"
import _ from "underscore"

class Database {
    databases = {
        main: {
            database: null,
            models: {},
        },
    };

    models = {
        user: User,
    };

    constructor() {}

    getModel(modelName, database = "main") {
        return this.databases[database].models[modelName]
    }

    init(App) {
        this.databases["main"].database = new Sequelize({ ...App.config.database, dialect: "postgres" })
        this.processModels("main")

        this.databases["main"].database.sync()
    }

    processModels(databaseName) {
        const database = this.databases[databaseName].database

        _.each(Object.keys(this.models), modelName => {
            this.databases[databaseName].models[modelName] = new this.models[modelName]().build(database)
        })
    }
}

const database = new Database()

export default database
