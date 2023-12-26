// single thread means node js code will run only on one core
// it doesn't matter if the machine has multiple cores
function complexFn(n){
    let sum = 0;
    for(var i=0;i<n;i++){
        sum+=i;
    }
    return sum;
   
} 
var startTime =  new Date().getTime();

// const a = complexFn(1000000000000000000);
// pootential blocking
// A very long computational task 
// like this might block the event loop and make the application unresponsive.

const a =complexFn(1000000);
var  endTime = new Date().getTime();

console.log((endTime-startTime)/1000);

