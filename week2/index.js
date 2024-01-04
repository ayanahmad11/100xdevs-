
const express = require('express')
const app = express()
const port = 3000

function handleFirstRequest(req,res){
    // res.send('Hello WOrld!')
    var calculatedsum = sum(100) ;
    console.log(calculatedsum);
    var answer = "the sum is " + calculatedsum;
    res.send(answer)

}
app.get('/',handleFirstRequest)
function started(){
    console.log(`Example app listening on port ${port}`)
}
app.listen(port,started)
function sum  (counter){
    let csum=0;
    for(var i=1;i<=counter;i++){
       csum = csum + i;

    }
    return csum;

}

