import session from "express-session"
import redis from "redis"
import RedisStoreInit from "connect-redis"
import crypter from "./../helpers/crypter"

export default {
    useSession: function (value) {
        if (typeof value === "string") {
            this.config.useSession = true
            this.config.session.config.secret = value
            crypter.setSecret(value)
        } else {
            this.config.useSession = value
        }

        return this
    },
    setSessionConfig: function (type, config, redisConfig) {
        if (config === undefined) {
            this.config.session.config = type
        } else if (redisConfig !== undefined) {
            this.config.session = { type, config, redisConfig }
        } else {
            this.config.session = { type }
        }

        const secret = this.config.session.config.secret
        if (secret !== undefined) {
            crypter.setSecret(secret)
        }

        return this
    },
    init: function () {
        if (this.config.useSession === true) {
            let config = this.config.session.config

            if (this.config.session === "redis") {
                const Store = RedisStoreInit(session)
                const redisClient = redis.createClient(this.config.session.redisConfig)

                config = {
                    store: new Store({ client: redisClient }),
                    ...this.config.session.config,
                }
            }

            this.app.use(session(config))
        }
    },
}
