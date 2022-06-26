//input [1,2,4,2,6,3,4]
//output 2

//input [1,2,1,4,2,4]
//output 1

//input [1,2,4,6]
//output undefined

function RecurringMtd1(inputArray){
    let valueFound =[];
    let result = undefined;
    for(let i=0;i<inputArray.length;i++){
        if(valueFound.indexOf(inputArray[i]) !== -1) {
            return inputArray[i];
        } else {
            valueFound.push(inputArray[i]);
        }
    }
    return result;
}

function RecurringMtd2(inputArray){
    for(let i=0;i<inputArray.length;i++) {
       for(let j=i+1;j<inputArray.length;j++) {
            if(inputArray[i] == inputArray[j]) {
                return inputArray[i];
            }
       }
    }
    return undefined;
}

var result = RecurringMtd2([1,2,1]);
console.log(result)