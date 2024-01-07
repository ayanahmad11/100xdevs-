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

function message(){
    console.log("after a delay of n seconds")
}

function higherOrderAsynch(callback){
    let n = new Date().getUTCDate();

    setTimeout(callback,n*1000);

} 
higherOrderAsynch(message);
