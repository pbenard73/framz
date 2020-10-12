import authManager from "./../managers/auth"
import required from "./../helpers/required"

export default {
    setCustomLogin: function (method) {
        authManager.setLoginMethod(method)

        return this
    }
}
