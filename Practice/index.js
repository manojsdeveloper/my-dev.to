//reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

//console.log(object1 === object2);
//console.log(object1 === object3);

//Array are just objects
//console.log([] === [])

//Context vs Scope

//reverse a string
function reverseString(str) {
  var arr = [];
  var totalLength = str.length - 1;
  for(i=totalLength;i>=0;i--) {
    arr.push(str[i]);
  }
  console.log(arr.join(''))
}

function reverseString2(str) {
  return str.split('').reverse().join('');
}

const reverseString3 = str => [...str].reverse().join('');

var result = reverseString3("Hello mano"); //o/p: onam olleH
console.log(result);


