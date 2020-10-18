import acl from "./../../../src/core/middlewares/acl"

test("Acl Middleware should be operationnal", async () => {
    const next = error => {
        if (error) {
            return false
        }

        return true

    }

    expect(await acl('ROLE_ANONYMOUS')(null, null, next)).toBe(true)
    expect(await acl('ROLE_USER')(null, null, next)).toBe(false)

    const req = {
        session:{
            user: {
                acl: 'ROLE_SUPER_ADMIN'
            }
        },
	get: () => null
    }

    expect(await acl('ROLE_USER')(req, null, next)).toBe(true)
})
