
const express = require('express')
const app = express()
const port = 3000

function handleFirstRequest(req,res){
    res.send('Hello WOrld!')

}
app.get('/',handleFirstRequest)
function started(){
    console.log(`Example app listening on port ${port}`)
}
app.listen(port,started)
function sum  (counter){
    sum=0;
    for(var i=1;i<=counter;i++){
        sum = sum + i;

    }
    return sum;

}
var calculatedsum = sum(100) ;
console.log(calculatedsum);
