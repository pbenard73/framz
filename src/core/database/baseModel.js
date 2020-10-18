import Sequelize from "sequelize"
import _ from "underscore"

class BaseModel {
    name = undefined
    url = null
    fields = {}
    translatedFields = []
    createForm = null
    editForm = null
    softDeletable = false
    virtualFields = {}
    links = {}
    hooks = {}

    getFields() {
        let fields = {}
        _.each(Object.keys(this.fields), field => {
            fields[field] = {
                type: this.fieldMapping(field),
                uniq: field.uniq,
            }
        })

        return fields
    }

    build(sequelize) {
        return sequelize.define(this.name, this.getFields(), { tableName: this.name })
    }

    fieldMapping(field) {
        switch (field.type) {
            case "text":
                return Sequelize.STRING(field.length !== undefined ? field.length : 250)
            case "boolean":
                return Sequelize.BOOLEAN
            case "datetime":
                return Sequelize.DATE
            case "date":
                return Sequelize.DATEONLY
            default:
                return Sequelize.STRING(field.length !== undefined ? field.length : 250)
        }
    }
}

export default BaseModel
