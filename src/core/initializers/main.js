export default {
    setPort: function (port) {
        this.config.port = port
        return this
    },
    use: function (...args) {
        this.uses.push(args)
        return this
    },
    get: function (...args) {
        this.routers.push(["get", args])
        return this
    },
    post: function (...args) {
        this.routers.push(["post", args])
        return this
    },
    put: function (...args) {
        this.routers.push(["put", args])
        return this
    },
    delete: function (...args) {
        this.routers.push(["delete", args])
        return this
    },
    addRouter: function (...args) {
        this.routers.push(["router", args])
        return this
    },
    addPublic(...args) {
        this.publicFolders.push(args)
        return this
    },
}
