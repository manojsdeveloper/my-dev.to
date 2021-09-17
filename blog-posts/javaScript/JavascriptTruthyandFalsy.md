As well as a type, each value also has an inherent Boolean value, generally known as either truthy or falsy. Some of the rules are a little bizarre, so understanding the concepts and effect on comparison helps when debugging JavaScript applications.

The following values are always falsy:

- false
- 0 (zero)
- -0 (minus zero)
- 0n (BigInt zero)
- '', "", `` (empty string)
- null
- undefined
- NaN

Everything else is truthy. That includes:

- '0' (a string containing a single zero)
- 'false' (a string containing the text “false”)
- [] (an empty array)
- {} (an empty object)
- function(){} (an “empty” function)

A single value can therefore be used within conditions. For example:

`if (value) { // value is truthy } else { // value is falsy // it could be false, 0, '', null, undefined or NaN }`

#Ref: https://www.sitepoint.com/javascript-truthy-falsy/
