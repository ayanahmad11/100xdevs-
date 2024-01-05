const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000
app.use(bodyParser.json()) 
function handleSecondRequest2(req,res){
    console.log(req.body) ;           // req.header is fine // req.query is fine// why req.body is undefined?
    var counter = req.query.counter
    var calculatedsum = sum(counter) ;
     console.log(calculatedsum);
     var answer = "the sum is " + calculatedsum;
     res.send(answer)
 }
 app.post('/handlesum',handleSecondRequest2)
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