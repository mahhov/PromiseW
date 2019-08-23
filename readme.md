# PromiseW

## API

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

#### `PromiseW.then(function)`

Same as `promise.then`.

#### `promiseW.catch(function)`

Same as `promise.catch`.

## Examples

```js
let promiseW = new PromiseW();
console.log(promiseW.done, promiseW.resolved, promiseW.rejected); // false, false, false 

promiseW.resolve(5);
console.log(promiseW.done, promiseW.resolved, promiseW.rejected); // true true, false 

proimseW.reject(3);
promiseW.resolved = false;
promiseW.rejected = true;
console.log(promiseW.done, promiseW.resolved, promiseW.rejected); // true true, false 
```
