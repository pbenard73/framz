import Sequelize from "sequelize"
import _ from "underscore"

class BaseModel {
    name = undefined;
    url = null;
    fields = {};
    translatedFields = [];
    createForm = null;
    editForm = null;
    softDeletable = false;
    virtualFields = {};
    links = {};
    hooks = {};

    build(sequelize) {
        let fields = {}
        _.each(Object.keys(this.fields), field => {
            fields[field] = {
                type: this.fieldMapping(field),
                uniq: field.uniq,
            }
        })

        return sequelize.define(this.name, fields, { tableName: this.name })
    }

    fieldMapping(field) {
        switch (field.type) {
        case "text":
            return Sequelize.STRING(field.length !== undefined ? field.length : 250)
        case "boolean":
            return Sequelize.BOOLEAN
        default:
            return Sequelize.STRING(field.length !== undefined ? field.length : 250)
        }
    }
}

export default BaseModel
