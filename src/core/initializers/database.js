import database from "./../database/database"

export default {
    setDatabaseConfig: function(config) {
        this.config.database = config

        return this
    },

    addModel: function(model) {
        this.models.push(model)

        return this
    },

    addModels: function(...models) {
        this.models = [...this.models, ...models]

        return this
    },

    init: function() {
        if (typeof this.config.database === "object") {
            database.init(this)
        }
    }
}
