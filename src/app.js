import express from "express"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import _ from "underscore"
import compression from "compression"
import run from "./core/run"

import { main, session, database, socket, third, acl } from "./core/initializer"
const initializers = [main, session, database, socket, third, acl]

function importInitializers(...initializers) {
    const excepted = ["build"]

    _.each(initializers, initializer => {
        _.each(Object.keys(initializer), method => {
            if (method === "init") {
                this.inits.push(initializer[method])
            } else if (excepted.indexOf(method) === -1) {
                this[method] = (...args) => initializer[method].call(this, ...args)
            }
        })
    })
}

class App {
    app = express()
    uses = []
    routers = []
    publicFolders = []
    models = []
    io = null
    config = {
        port: 3000,
        session: {
            type: null,
            config: {},
            redisConfig: undefined,
        },
        socket: {},
    }

    defaultConfig = {
        useCors: false,
        statics: {},
        useSession: false,
        useCompression: true,
        useSocket: false,
        useSessionSocket: false,
    }

    inits = []

    constructor() {
        importInitializers.call(this, ...initializers)
    }

    run() {
        this.config = { ...this.defaultConfig, ...this.config }
        this.app.set("trust proxy", 1)

        _.each(this.inits, init => {
            init.call(this)
        })

        this.app.use(morgan("dev"))
        this.app.use(express.json())
        this.use(express.urlencoded({ extended: false }))
        this.use(cookieParser())
        this.use(compression())

        _.each(this.publicFolders, folderArgs => {
            if (folderArgs.length === 1) {
                this.app.use(express.static(...folderArgs))
            } else if (folderArgs.length === 2) {
                this.app.use(folderArgs[0], express.static(folderArgs[1]))
            }
        })


        _.each(this.uses, useArgs => {
            this.app.use(...useArgs)
        })

        _.each(this.routers, routerArgs => {
            let [type, args] = routerArgs
	    console.log(type, args)

            this.app[type === "router" ? "use" : type](...args)
        })

        run.call(this)
    }
}

export default new App()
