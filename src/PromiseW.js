// Can be used like a regular `Promise`, with additional API:
// - `promiseW.done` returns true if the promise has been resolved or rejected.
// - `promiseW.resolved` returns true if the promise has been resolved.
// - `promiseW.rejected` returns true if the promise has been rejected.
// - `promiseW.resolve(value)` resolves the promise if it hasn't been resolved or rejected yet.
// - `promiseW.reject(value)` rejects the promise if it hasn't been resolved or rejected yet.
// E.g.:
//   let promise = new PromiseW();
//   promise.then(x => console.log('then', x));
//   console.log(promise.done) // false
//   promise.resolve(10); // then 10
//   console.log(promise.done, await promise) // true, 10

class PromiseW {
	constructor(executor = undefined) {
		let resolve, reject;
		let promise = new Promise((res, rej) => {
			resolve = res;
			reject = rej;
		});

		let resolved = false;
		let rejected = false;
		Object.defineProperties(promise, {
			done: {get: () => resolved || rejected},
			resolved: {get: () => resolved},
			rejected: {get: () => rejected},
		});

		promise.resolve = value => {
			if (promise.done)
				return;
			resolved = true;
			resolve(value)
		};

		promise.reject = value => {
			if (promise.done)
				return;
			rejected = true;
			reject(value)
		};

		if (executor)
			executor(promise.resolve, promise.reject);

		return promise;
	}
}

module.exports = PromiseW;
