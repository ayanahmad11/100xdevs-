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
let n=10;
wait(n).then(printThing)