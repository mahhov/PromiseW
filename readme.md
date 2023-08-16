# PromiseW

Thin wrapper over standard `promise` that adds 3 bool getters (`done`, `resolved`, `rejected`) and `resolve` and `reject` functions.

## API

#### `proimseW.constructor([function executor])`

Similar to a traditional `promise` constructor, except `executor` is optional.

#### `bool proimseW.done`

Returns true if either `resolve` or `reject` have been invoked.

#### `bool proimseW.resolved`

Returns true if `resolve` has been invoked before `reject` was invoked.

#### `bool proimseW.rejected`

Returns true if `reject` has been invoked before `resolve` was invoked. 

#### `void promiseW.resolve(value)`

Resolves `promiseW` with `value` iff `done` is `false`; i.e. neither `resolve` nor `reject` been invoked yet. 

#### `void promiseW.reject(value)`

Rejects `promiseW` with `value` iff `done` is `false`; i.e. neither `resolve` nor `reject` been invoked yet. 

#### `PromiseW.then(function handler)`

Same as `promise.then`. `done`, `resolved`, and `rejected` will be updated prior to invoking the `handler`.

#### `promiseW.catch(function handler)`

Same as `promise.catch`. `done`, `resolved`, and `rejected` will be updated prior to invoking the `handler`.

## Examples

```js
let promiseW = new PromiseW();
console.log(promiseW.done, promiseW.resolved, promiseW.rejected); // false, false, false 

promiseW.resolve(5);
console.log(promiseW.done, promiseW.resolved, promiseW.rejected); // true true, false 

// PromiseW will prevent simple corruption.
proimseW.reject(3);
promiseW.resolved = false;
promiseW.rejected = true;
console.log(promiseW.done, promiseW.resolved, promiseW.rejected); // true true, false 
```
