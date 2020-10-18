import _ from 'underscore'

class Listener {
	pool = {}

	register(...messages) {
		_.each(messages, message => {
			const key = message.toUpperCase()

			if (this.pool[key] === undefined) {
				this.pool[key] = []
			}
		})
	}

	subscribe(message, func) {
		const key = message.toUpperCase()

		if (this.pool[key] === undefined) {
			this.pool[key] = []
		}

		this.pool[key].push(func)
	}

	trigger(message, ...args) {
		const key = message.toUpperCase()

		const pool = this.pool[key]

		if (pool === undefined) {
			return
		}

		_.each(pool, func => {
			func(...args)
		})
	}
}

const listener = new Listener()

export default listener
