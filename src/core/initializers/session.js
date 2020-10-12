import session from "express-session"
import redis from "redis"
import RedisStoreInit from "connect-redis"

export default {
    useSession: function (value) {
        if (typeof value === "string") {
            this.config.useSession = true
            this.config.session.config.secret = value
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
