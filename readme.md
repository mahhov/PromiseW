# PromiseX

## API

#### `bool proimseX.done`

Returns true if either `resolve` or `reject` have been invoked.

#### `bool proimseX.resolved`

Returns true if `resolve` has been invoked before `reject` was invoked.

#### `bool proimseX.rejected`

Returns true if `reject` has been invoked before `resolve` was invoked. 

#### `void promiseX.resolve(value)`

Resolves `promiseX` with `value` iff `done` is `false`; i.e. neither `resolve` nor `reject` been invoked yet. 

#### `void promiseX.reject(value)`

Rejects `promiseX` with `value` iff `done` is `false`; i.e. neither `resolve` nor `reject` been invoked yet. 

#### `PromiseX.then(function)`

Same as `promise.then`.

#### `promiseX.catch(function)`

Same as `promise.catch`.

## Examples

```js
let promiseX = new PromiseX();
console.log(promiseX.done, promiseX.resolved, promiseX.rejected); // false, false, false 

promiseX.resolve(5);
console.log(promiseX.done, promiseX.resolved, promiseX.rejected); // true true, false 

proimseX.reject(3);
promiseX.resolved = false;
promiseX.rejected = true;
console.log(promiseX.done, promiseX.resolved, promiseX.rejected); // true true, false 
```
