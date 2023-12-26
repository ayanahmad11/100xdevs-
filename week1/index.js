function count(start,last)
{ let sum=0;
    for(let i=start;i<=last;i++){
        sum+=i
    }
    console.log(sum);
}

function printToScreen(){
    console.log("10 seconds have passed");
}
setTimeout(printToScreen,10*1000);// asynchronus task

 count(1,1000)
 console.log("next commit")

// count(1,10000);
// count(10000,2000000)