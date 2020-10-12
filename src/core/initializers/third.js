import _ from "underscore"
import moduleManager from "./../managers/module"
import websiteManager from "./../managers/website"

export default {
    addWebsite: function (websiteObject) {
        websiteManager.addWebsite(websiteObject)

        return this
    },
    addWebsites: function (...websites) {
        _.each(websites, website => this.addWebsite(website))

        return this
    },
    addModule: function (moduleObject) {
        moduleManager.addModule(moduleObject)

        return this
    },
    addModules: function (...modules) {
        _.each(modules, module => this.addModule(module))

        return this
    },
    init: function () {

    },
}
