// Synchronous Callback
/* ### Write a function 'higherOrder' that takes a callback function as an argument .
Inside 'higherOrder' call the callback function synchronously.*/

// let n=0;
function sum(n){
    console.log( n*(n+1)/2);
}
function higherOrder(sum){
    sum(10);
}
higherOrder(sum);

// Asynchronous Callback
/*
### Write a function 'higherOrderAsynch' that takes a callback function as an argument.
Inside 'higherOrderAsynch', call the callback function asynchronously using setTimeout.
after a delay of n seconds ,where  n is current day of month according to UTC time;(1<=n<=31)
 */
let n;
function message(){
    console.log(`after a delay of ${n} seconds`)
}

function higherOrderAsynch(callback){
     n = new Date().getUTCDate();

    setTimeout(callback,n*1000);

} 
higherOrderAsynch(message);

// ### Array map with callback
/*
- Implement a function 'mapArray' that takes an array and a callback function as 
arguments . 'mapArray' should apply the callback function to each element of the
array and return a new array with the modified values.
*/

// let arr = [1,2,3,4,5]

function mapArray(arr,callback){
    
    function callback(element,index,array){         // scope of callback is mapArray  
        
        newArr[index ] =add1(arr[index]); 
     
    }
    newArr=[]
    arr.forEach(callback); 
    return newArr;

}
function add1(element){
    return element+1;
}

// console.log(mapArray(arr,add1))
//------------------------------------------------------------------------------------------------------------//

//  Using Maparray  const names = ['Alice', 'Bob', 'Charlie'];

// const nameLengths = names.map(function(name, index, array) {
//     return `Length of "${name}" is ${name.length}`;
//   });

let arr = [1, 2, 3, 4, 5];

function mapArray(arr, callback) {
    return arr.map(callback);
}

function add1(element) {
    return element + 1;
}

console.log(mapArray(arr, add1));
  
// let arr = [1,2,3,4,5]

// function mapArray(arr,callback){
    
//     function callback(element,index,arr){
//         return add1(arr[index]);
//     }
//     return arr.map(callback)
    
    

// }
// function add1(element){
//     return element+1;
// }

// console.log(mapArray(arr,add1))
//------------------------------------------------------------------------------------------------------------//

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

