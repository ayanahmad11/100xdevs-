
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







