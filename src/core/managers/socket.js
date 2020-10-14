import _ from "underscore"
import aclManager from './acl'

class SocketManager {
    rooms = {}
    actions = {}
    roomAcls = {}
    sockets = []

    addSockets(...rooms) {
        this.sockets = [...this.sockets, ...rooms]
    }

    addActions(...socketPools) {
        _.each(socketPools, pool => {
            let [room, actionsObject] = pool

            if (actions[room] === undefined) {
                actions[room] = {}

                _.each(Object.keys(actionsObject), message => {
                    actions[room].message = actionsObject[message]
                })
            }
        })
    }

    getRoomType(socketObject) {
        if (typeof socketObject === "string") {
            return socketObject
        } else if ([null, undefined].indexOf(socketObject) === -1 && socketObject.constructor.name.toLowerCase() === "array") {
            let [name, acl] = socketObject
            this.roomAcls[name] = acl.toUpperCase()

            return name
        }

        return null
    }

    init(io) {
        _.each(this.sockets, socketObject => {
            const name = this.getRoomType(socketObject)

            if (null === name) {
                return
            }

            this.rooms[name] = io.of(`/socket_${name.toLowerCase()}`)

            this.rooms[name].on("connection", socket => {
                const acl = this.roomAcls[name]

                const runMessage = () => {
                    _.each(this.actions[name], action => {
                        let [message, method] = action
                        socket.on(message, method)
                    })
                }

                if (acl === undefined) {
                    return runMessage()
                }

                // checkUserByCookie and run message
            })
        })
    }
}

const socketManager = new SocketManager()

export default socketManager
