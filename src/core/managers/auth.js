import database from "./../database/database"
import crypter from "./../helpers/crypter"

class AuthManager {
    loginMethod = null

    setLoginMethod(method = null) {
        if (method !== null && typeof method !== "function") {
            throw new Error("Custom login method must be a function")
        }

        this.loginMethod = method
    }

    login(req, payload) {
        return new Promise((resolve, reject) => {
            let { username, password: givenPassword } = req,
                payload

            const isEmpty = value => [null, undefined].indexOf(value) !== -1

            if (isEmpty(username) === true || isEmpty(givenPassword) === true) {
                return reject(new Error("Invalid login parameters"))
            }

            const password = crypter(givenPassword)

            database
                .getRepository(req, "user")
                .findOne({ where: { username, password, active: true } })
                .then(user => {
                    if (user === null) {
                        return reject(new Error("User was not found"))
                    }

                    resolve(user)
                })
                .catch(error => reject(error))
        })
    }
}

const authManager = new AuthManager()

export default authManager
