import AbstractThirdManager from './abstractThird'
import Module from "./../thirds/module"

class ModuleManager {
    modules = {}

    hasModule(moduleName) {
        return modules[moduleName] !== undefined
    }

    getModule(moduleName) {
        return modules[moduleName]
    }

    addModule(App, ModuleObject) {
        if (moduleObject instanceof Module === false) {
            throw new Error(`Parameter must be a Module instance`)
        }

        const importedModule = new moduleObject()
        modules[importedModule.name] = importedModule

        this.merge(App, importedModule)
    }
}

const moduleManager = new ModuleManager()

export default moduleManager
