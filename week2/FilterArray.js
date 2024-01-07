
// ### Filter Array
/*
- Write a function 'filterArray' that takes an array and a callback function as arguments.
'filterArray' should filter the elements of the array based on the condition specified 
by the callback function and return a new Array with the filtered elements;   
*/
function isEven(element){
   
    if(element%2)
        return false
    
    return true    

}
function isEqualArr(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const sortedArr1 = arr1.slice().sort();
    const sortedArr2 = arr2.slice().sort();

    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false;
        }
    }

    return true;
}
function testCases(func,inputs,expectedValues){
    // assert: func is a function which accepts a single argument

    //          inputs is an array where inputs[i]
    //          is a value to be passed to the function

    //          expectedValues is an array where expectedValues[i]
    //             is the expected output of func(inputs[i])

    // inputs.length=== expectedValues.length
    var flag=true;
//    console.log(func(inputs[0][0],inputs[0][1]))
    for(let i=0;i<inputs.length;i++){
        // console.log(func(inputs[i]))
        if(!isEqualArr(func(...inputs[i]),expectedValues[i])){
            flag=false;
            break;
        }
    }
    // assert : flag is true if func(inputs[i])===expectedValues[i]
    //      (0<= i <= inputs.length)
    return flag;

}
function filterArray(arr,callback){
    
    return arr.filter(callback);
}
inputsArray=[
    [[1,2,3,4],isEven],
    [[1,3,4],isEven]
]
expectedValues=[
    [2,4],
    [4]
]
console.log(testCases(filterArray,inputsArray,expectedValues ));