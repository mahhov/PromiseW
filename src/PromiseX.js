class PromiseX {
	constructor() {
		let promise = new Promise((resolve, reject) => {
			this.resolve = resolve;
			this.reject = reject;
		});

		this.resolved = false;
		this.rejected = false;

		Object.defineProperties(promise, {
			done: {get: () => this.resolved || this.rejected},
			resolved: {get: () => this.resolved},
			rejected: {get: () => this.rejected},
		});

		promise.resolve = value => {
			if (promise.done)
				return;
			this.resolved = true;
			this.resolve(value)
		};

		promise.reject = value => {
			if (promise.done)
				return;
			this.rejected = true;
			this.reject(value)
		};

		return promise;
	}
}

module.exports = PromiseX;
