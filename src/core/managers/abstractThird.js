import _ from "underscore"

class AbstractThirdManager {
    merge(App, third) {
        this.mergeInitializers(App, third)
            .mergeModels(App, third)
            .mergeRouters(App, third)
            .mergePublic(App, third)
            .mergeSocketRooms(App, third)
            .mergeSockets(App, third)
            .mergeAcls(App, third)
    }

    mergeInitializers(App, third) {
        _.each(Object.keys(third.initializers), method => {
            if (method === "init") {
                App.inits.push(method)
            } else if (excepted.indexOf(method) === -1) {
                App[method] = (...args) => method.call(App, ...args)
            }
        })

        return this
    }

    mergeRouters(App, third) {
        _.each(third.routers, router => {
            App.addRouter(router)
        })

        return this
    }

    mergePublic(App, third) {
        _.each(third.publicPaths, path => {
            App.addPublic(...path)
        })

        return this
    }

    mergeModels(App, third) {
        App.addModels(...third.models)

        return this
    }

    mergeSocketRooms(App, third) {
        App.addRooms(...third.socketRooms)

        return this
    }

    mergeSockets(App, third) {
        return this
    }

    mergeAcls(App, third) {
        _.each(third.acls, acl => {
            App.addAcl(acl)
        })

        return this
    }
}

export default AbstractThirdManager
