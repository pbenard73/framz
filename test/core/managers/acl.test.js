import aclManager from "./../../../src/core/managers/acl"

test("Acl Manager: All features should work", async () => {
    aclManager.setHierarchy({
        ROLE_SUPER_ADMIN: {
            ROLE_ADMIN: {
                ROLE_USER: {},
            },
        },
    })

    aclManager.addRole("ROLE_GOD")
    aclManager.prepareHierarchy()
    expect(Object.keys(aclManager.flatPool).length).toBe(4)

    const roleAdmin = JSON.stringify(aclManager.flatPool["ROLE_ADMIN"])
    expect(roleAdmin).toBe(JSON.stringify(["ROLE_ADMIN", "ROLE_USER"]))

    const req = {
        session: {
            user: {
                acl: "ROLE_ADMIN",
            },
        },
	get: () => null
    }

    expect(await aclManager.isGranted(req, "ROLE_ADMIN")).toBe(true)
    expect(await aclManager.isGranted(req, "ROLE_USER")).toBe(true)
    expect(await aclManager.isGranted(req, "ROLE_SUPER_ADMIN")).toBe(false)
})
