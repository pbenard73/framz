import acl from "./../../../src/core/middlewares/acl"

test("Acl Middleware should be operationnal", () => {
    const next = error => {
        if (error) {
            return false
        }

        return true

    }

    expect(acl('ROLE_ANONYMOUS')(null, null, next)).toBe(true)
    expect(acl('ROLE_USER')(null, null, next)).toBe(false)

    const req = {
        session:{
            user: {
                acl: 'ROLE_SUPER_ADMIN'
            }
        }
    }

    expect(acl('ROLE_USER')(req, null, next)).toBe(true)
})
