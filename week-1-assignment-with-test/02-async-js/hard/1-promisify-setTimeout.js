/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function promiseBody(resolve){
    setTimeout(resolve,n*1000)
}
function printThing(){
    console.log("n seconds have passed");
}
function wait(n) {
var patience = new Promise (promiseBody) 
return patience

}
let n=3;
wait(n).then(printThing)
// is similar to 
// wait.then((resolve)=>{
    // console.log(resolve);
// })
// Here, resolve('Resolved after 3 second') 
// is used to fulfill the Promise after 3 second, 
// indicating that the asynchronous operation represented 
// by the Promise has completed successfully with the value 
// 'Resolved after 3 second'.
//  This value will be passed to the .then() 
// block when this Promise is used.

// Finally 
//  function wait(n){
// return new Promise((resolve)=>{
//     setTimeout(()=>{resolve('Resolved after 3 seconds')},n*1000)
// })
// }
  