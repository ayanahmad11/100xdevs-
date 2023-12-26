// Asynchronous Tasks doesn't necessarily run on the same thread 
// as the main javascript thread is executing
const fs = require('fs');
function sum1(n){
    let sum = 0;
    for(var i=0;i<=n;i++){
        sum+=i;
    }
   console.log(sum);
   
} 
function fileIsRead(err,fileContent){
    sum1(fileContent)
}
fs.readFile("chocolate.txt","utf-8",fileIsRead);// asynch task

sum1(10)
sum1(23)
console.log("still not read")// this is executed first untill the above asynch task is processing
console.log("still not read")// this is executed first untill the above asynch task is processing
console.log("still not read")// this is executed first untill the above asynch task is processing
console.log("still not read")// this is executed first untill the above asynch task is processing
console.log("still not read")
sum1(100000)// this is executed first untill the above asynch task is processing
// this is asynchronous nature of javascript;
