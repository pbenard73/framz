class Repository {
    constructor(req, Model, data) {
        this.req = req
        this.Model = Model
        this.data = data
    }

    prepareOptions(options = {}) {
        if (options.raw === undefined) {
            options.raw = true
        }

        return options
    }

    create(...args) {
        return new Promise((resolve, reject) => {
            this.Model.create(...args)
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    }

    createBulk(...args) {}

	paginate(options) {
		return this.findAll()
	}

    findAll(options = {}) {
        return new Promise((resolve, reject) => {
            this.Model.findAll(this.prepareOptions(options))
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    }

    findById(id, options = {}) {
        return new Promise((resolve, reject) => {
            this.Model.findOne(this.prepareOptions({ where: id }))
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    }

    findOne(options = {}) {
        return new Promise((resolve, reject) => {
            this.Model.findOne(this.prepareOptions(options))
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    }

    updateById(id, data, options = {}) {}

    deleteById(id) {}

    deleteAll(where, options = {}) {}
}

export default Repository
