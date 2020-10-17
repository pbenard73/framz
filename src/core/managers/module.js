import AbstractThirdManager from './abstractThird'
import Module from "./../thirds/module"

class ModuleManager {
    modules = {}

    hasModule(moduleName) {
        return this.modules[moduleName] !== undefined
    }

    getModule(moduleName) {
        return this.modules[moduleName]
    }

    addModule(App, moduleObject) {
        this.modules[moduleObject.name] = moduleObject

        this.merge(App, moduleObject)
    }
}

const moduleManager = new ModuleManager()

export default moduleManager
