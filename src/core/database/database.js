import Sequelize from "sequelize"
import User from "./../../models/user"
import _ from "underscore"
import Repository from "./repository"

let Database = function (req, modelName, databaseName = "main") {
    const database = Database.databases[databaseName]

    if (database === undefined) {
        throw new Error(`Database '${databaseName}' is not registered`)
    }

    const Model = database.models[modelName]
    if (Model === undefined) {
        throw new Error(`Model '${modelName}' is not registered in database '${databaseName}'`)
    }

    const data = Database.models[modelName]

    const CustomRepository = Database.repositories[modelName]

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
    Database.repositories[modelName] = Repo
}

Database.getModel = function (modelName, database = "main") {
    return Database.databases[database].models[modelName]
}

Database.init = function (App) {
    Database.databases["main"].database = new Sequelize({ dialect: "postgres", ...App.config.database })
    Database.processModels("main")

    Database.databases["main"].database.sync()
}

Database.processModels = function (databaseName) {
    const database = Database.databases[databaseName].database

    _.each(Object.keys(Database.models), modelName => {
        Database.databases[databaseName].models[modelName] = new Database.models[modelName]().build(database)
    })
}

export default Database
