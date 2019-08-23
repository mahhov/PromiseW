const assert = require('assert');
const PromiseW = require('../src/PromiseW');

let promise = new PromiseW();
let promise2 = new PromiseW();

assert(!promise.done);
assert(!promise.resolved);
assert(!promise.rejected);

promise.resolve(3);
promise.resolve(4);
promise.reject(5);

assert(promise.done);
assert(promise.resolved);
assert(!promise.rejected);
assert.doesNotReject(promise);
promise.then(value => assert.equal(value, 3));

assert(!promise2.done);
assert(!promise2.resolved);
assert(!promise2.rejected);

promise2.reject(6);
promise2.done = false;
promise2.resolved = true;

assert(promise2.done);
assert(!promise2.resolved);
assert(promise2.rejected);
assert.rejects(promise2);
promise2.catch(value => assert.equal(value, 6));
