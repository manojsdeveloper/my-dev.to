## Nullish Coalescing

The nullish coalescing operator is another upcoming ECMAScript feature that goes hand-in-hand with optional chaining, and which our team has been involved with championing in TC39.

You can think of this feature - the ?? operator - as a way to “fall back” to a default value when dealing with null or undefined. When we write code like

let x = foo ?? bar();

Again, the above code is equivalent to the following.

let x = foo !== null && foo !== undefined ? foo : bar();
