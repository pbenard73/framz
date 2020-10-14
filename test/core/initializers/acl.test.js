import acl from "./../../../src/core/initializers/acl"

import aclManager from './../../../src/core/managers/acl'

test("Required call should return an error", () => {
    const hierarchy = {
        ROLE_SUPER_TEST: {
            ROLE_TEST: {
                ROLE_USER: {}
            }
        }
    }

    acl.setAclHierarchy(hierarchy)
    
    expect(JSON.stringify(aclManager.pool)).toBe(JSON.stringify(hierarchy))

    acl.addAclRole('ROLE_ADDED')

    expect(aclManager.pool['ROLE_ADDED'] === undefined).toBe(false)

    acl.init()

    expect(Object.keys(aclManager.flatPool).length).toBe(4)
})
