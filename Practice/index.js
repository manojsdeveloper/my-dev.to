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

//Merge Sorted Array

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  if(array1.length === 0) {
    return array2;
  }
  if(array2.length === 0) {
    return array1;
  }

  while(array1Item || array2Item) {
    console.log(array1Item, array2Item)
    if(!array2Item | array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
        mergedArray.push(array2Item);
        array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}


const result1 = mergeSortedArrays([0,3,4,31], [3,4,6,30]);
console.log(result1);
