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

    addModule(App, ModuleObject) {
        if (ModuleObject.prototype instanceof Module === false) {
            throw new Error(`Parameter must be a Module instance`)
        }

        const importedModule = new ModuleObject()
        this.modules[importedModule.name] = importedModule

        this.merge(App, importedModule)	    
    }
}

const moduleManager = new ModuleManager()

export default moduleManager
