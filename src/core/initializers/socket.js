import socketManager from "./../managers/socket"

export default {
    setSocketConfig: function (config) {
        if (config === undefined) {
            this.config.socket = {}
        } else {
            this.config.socket = config
        }

        return this
    },

    useSocket: function (use = true, session = false) {
        this.config.useSocket = use
        this.config.useSessionSocket = session

        return this
    },

    addRooms: function (...rooms) {
        socketManager.addSockets(...rooms)

        return this
    },

    includeSockets: function (...socketPools) {
        socketManager.addActions(...socketPools)

        return this
    },

    initSocket: function (io) {
        socketManager.init(io)

        return this
    },
}
