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
