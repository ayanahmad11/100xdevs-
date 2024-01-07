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
