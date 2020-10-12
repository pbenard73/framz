import database from "./../database/database"

class AuthManager {
    loginMethod = null

    setLoginMethod(method = null) {
        if (method !== null && typeof method !== "function") {
            throw new Error("Custom login method must be a function")
        }

        this.loginMethod = method
    }

    login(payload) {
    	return new Promise((resolve, reject) => {
		let {username, password} = payload

		const isEmpty = value => [null, undefined].indexOf(value) !== -1

		if (isEmpty(username) === true || isEmpty(password) === true) {
			return reject(new Error('Invalid login parameters'))
		}

		/*
		 * Check database
		 */

	})
    }
}

const authManager = new AuthManager()

export default authManager
