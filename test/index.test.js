import * as application from './../src/index'
import _ from 'underscore'

test("All Exports should be availabe", () => {
    let items = [
        'App',
        'Repository',
        'acl',
        'aclManager',
        'cache',
        'crypter',
        'database',
        'express',
        'Router',
        'Module',
        'createError'
    ]

    _.each(items, item => {
        expect(application[item] !== undefined).toBe(true)
    })
})
