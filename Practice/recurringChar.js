//Given an array = [2,5,1,2,3,5,1,2,4]
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an array = [2,3,4,5]
//It should return undefined

function recurrArr(arr){
    let contain = [];
    // console.log(!!arr.length)
    if(!arr.length || arr.length === 1) {
        return undefined;
    }
    for(let i = 0; i < arr.length; i++) {
        if(contain.indexOf(arr[i]) !== -1) {
            return arr[i];
        } else {
            contain.push(arr[i]);
        }
        if(arr.length === contain.length){
            console.log('It works')
            return undefined;
        }
        // for(let j = i + 1; j < arr.length; j++) {
        //     if(arr[i] === arr[j]) {
        //         return arr[i];
        //     }
        // }
    }
}

function recurringHash(input) {
    let map = {};
    for(let i = 0; i < input.length; i++) {
        if(map[input[i]] !== undefined) {
            return input[i];
        } else {
            map[input[i]] = i; 
        }
    }
    console.log(map)
    return undefined;
}

let array = [2,5,4];
const result = recurringHash(array);
console.log(result);
