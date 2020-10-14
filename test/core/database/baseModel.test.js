import BaseModel from "./../../../src/core/database/baseModel"

test("BaseModel Should should be correct", () => {
    class Model extends BaseModel {
        name = 'test'
        url = 'tests'
        fields = {
            name: {type: 'text', length: 300},
            subname: {length: 300},
            othername: {},
        }
    }

    const myModel = new Model()
    const fields = myModel.getFields()

    expect(Object.keys(fields).length).toBe(3)
    expect(typeof myModel.build).toBe('function')
})

