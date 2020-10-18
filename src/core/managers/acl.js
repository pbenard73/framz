import _ from "underscore"
import required from "./../helpers/required"
import database from "./../database/database"

class AclManager {
    constructor() {
        this.prepareHierarchy()
    }
    pool = {
        ROLE_SUPER_ADMIN: {
            ROLE_ADMIN: {
                ROLE_USER: {
                    ROLE_ANONYMOUS: {},
                },
            },
        },
    }

    flatPool = {}

    setHierarchy(pool) {
        this.pool = pool

        this.prepareHierarchy()
    }

    getPool() {
        return this.pool
    }

    addRole(roleName = required("roleName"), parent = null) {
        if (parent === null) {
            this.pool[roleName.toUpperCase()] = {}
        } else if (this.pool[parent.toUpperCase()] !== undefined) {
            let found = false
            this.pool["ROLE_SUPER_ADMIN"][roleName.toUpperCase()] = {}
        } else {
            throw new Error(`Role ${parent} was not found in hierarchy`)
        }

        this.prepareHierarchy()
    }

    prepareHierarchy() {
        this.flatPool = {}
        const flaten = (roleName, pool) => {
            const keys = Object.keys(pool)
            let keyPool = [roleName]

            _.each(keys, key => {
                const values = flaten(key, pool[key])
                this.flatPool[key] = values
                keyPool = [...keyPool, ...values]
            })

            return keyPool
        }

        _.each(Object.keys(this.pool), key => {
            this.flatPool[key] = flaten(key, this.pool[key])
        })
    }

    isGranted = (req, roleName) => {
        if (roleName === "ROLE_ANONYMOUS") {
            return true
        }

        const isOk = subject => [null, undefined].indexOf(subject) === -1

        const check = () =>
            isOk(req) === true &&
            isOk(req.session) === true &&
            isOk(req.session.user) === true &&
            this.flatPool[req.session.user.acl] !== undefined &&
            this.flatPool[req.session.user.acl].indexOf(roleName) !== -1

        const givenToken = isOk(req) === true && isOk(req.get) === true ? req.get("token") : null

        if (isOk(givenToken) === false) {
            return check()
        }

        const user = this.getUserByToken(givenToken)

        req.session.user = user === null ? undefined : user

        return check()
    }

    getUserByToken = async token => {
        const promise = new Promise((resolve, reject) => {
            database("user")
                .findOne({ where: { token: givenToken } })
                .then(user => {
                    if (user === null) {
                        return reject()
                    }

                    resolve(user)
                })
                .catch(error => reject(false))
        })

        try {
            return await promise
        } catch (e) {
            return null
        }
    }
}

const aclManager = new AclManager()

export default aclManager
