## Nullish Coalescing

The nullish coalescing operator is another upcoming ECMAScript feature that goes hand-in-hand with optional chaining.

You can think of this feature - the `??` operator - as a way to “fall back” to a default value when dealing with null or undefined. When we write code like
```
let x = foo ?? bar();
```
Again, the above code is equivalent to the following.
```
let x = foo !== null && foo !== undefined ? foo : bar();
```
The `??` operator can replace uses of `||` when trying to use a default value.

For example, the following code snippet tries to fetch the volume that was last saved in localStorage (if it ever was); however, it has a bug because it uses `||`.
```
function initializeAudio() {
  let volume = localStorage.volume || 0.5;
  // ...
}

0 || 0.5 = 0.5 //wrong
0 ?? 0.5 = 0 //correct
```
When localStorage.volume is set to 0, the page will set the volume to 0.5 which is unintended. `??` avoids some unintended behavior from 0, NaN and "" being treated as falsy values.

