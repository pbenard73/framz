export default {
    useAdmin: function (useAdmin = true) {
        this.config.admin.use = useAdmin

        return this
    },
    init: function () {
        console.log("Use Admin :" + this.config.admin.use)
    },
}
