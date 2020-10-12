import * as http from "http"
import socketIo from "socket.io"

let server
var port

export default function () {
    port = normalizePort(process.env.PORT || "3000")
    this.app.set("port", port)

    server = http.createServer(this.app)

    if (this.config.useSocket === true) {
        const io = socketIo(server)
        this.initSocket(io)
    }

    server.listen(port)
    server.on("error", onError)
    server.on("listening", onListening)
}

function normalizePort(val) {
    var port = parseInt(val, 10)

    if (isNaN(port)) {
        // named pipe
        return val
    }

    if (port >= 0) {
        // port number
        return port
    }

    return false
}

function onListening() {
    var addr = server.address()
    var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port
    console.log("Listening on " + bind)
}

function onError(error) {
    if (error.syscall !== "listen") {
        throw error
    }

    var bind = typeof port === "string" ? "Pipe " + port : "Port " + port

    // handle specific listen errors with friendly messages
    switch (error.code) {
    case "EACCES":
        console.error(bind + " requires elevated privileges")
        process.exit(1)
        break
    case "EADDRINUSE":
        console.error(bind + " is already in use")
        process.exit(1)
        break
    default:
        throw error
    }
}
