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
        this.sockets = [...this.sockets, ...rooms]

        return this
    },

    initSocket: function (io) {
        this.io = io

        console.log("Jinit le io")

        return this
    },
}
