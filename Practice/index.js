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


// const result1 = mergeSortedArrays([0,3,4,31], [3,4,6,30]);
// console.log(result1);

function LongestWord(sen) { 
  var stringLength = sen.split(" ");
  // var result = [];
  var value = stringLength[0].length;
  var result = 0;
   // console.log(stringLength.length)
  // code goes here  
   for(i=1;i < stringLength.length;i++) {
     console.log(value, stringLength[i])
     console.log(value, stringLength[i].length)
     // result.push(stringLength[i].length);
  //   stringLength.push(stringLength[i]);
    // 4 < 3
    if(value < stringLength[i].length) {
      // console.log(value, stringLength[i].length)
      value = stringLength[i].length;
      result = i;
    }

   }

  return stringLength[result]; 

}
   
// keep this function call here 
//console.log(LongestWord('Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"'));


//Leet Code: Two Sum
 var twoSum = function(nums, target) {
    let firstNum = nums[0];
    for(i=0;i<nums.length;i++) {
      if(firstNum + nums[i+1] == target){
        return [i, i+1];
      }
    }
};

var sumResult = twoSum([2,7,11,15], 9);
console.log(sumResult);