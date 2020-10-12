import Sequelize from "sequelize"
import User from "./../../models/user"
import _ from "underscore"
import Repository from "./repository"

let Database = function (req, modelName, databaseName = "main") {
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

Database.databases = {
    main: {
        database: null,
        models: {},
    },
}

Database.models = {
    user: User,
}
Database.repositories = {}
Database.addRepository = function (modelName, Repo) {
    this.repositories[modelName] = Repo
}

Database.getModel = function (modelName, database = "main") {
    return this.databases[database].models[modelName]
}

Database.init = function (App) {
    this.databases["main"].database = new Sequelize({ dialect: "postgres", ...App.config.database })
    this.processModels("main")

    this.databases["main"].database.sync()
}

Database.processModels = function (databaseName) {
    const database = this.databases[databaseName].database

    _.each(Object.keys(this.models), modelName => {
        this.databases[databaseName].models[modelName] = new this.models[modelName]().build(database)
    })
}

export default Database
