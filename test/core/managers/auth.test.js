import authManager from "./../../../src/core/managers/auth"

test("Auth Manager: Custom login function should be affectable", () => {
    function myCustomLogin() {}
    authManager.setLoginMethod(myCustomLogin)

    const authLogin = authManager.loginMethod

    const isValid = typeof authLogin === 'function' && authLogin.name === 'myCustomLogin'

    expect(isValid).toBe(true)
})
