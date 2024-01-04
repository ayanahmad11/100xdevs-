
const express = require('express')
const app = express()
const port = 3000

function handleFirstRequest(req,res){
    // res.send('Hello WOrld!')
   
    res.send("another route let's say for login and signup")

}

function handleSecondRequest(req,res){
    // res.send('Hello WOrld!')
    var counter = req.query.counter
    console.log(req.query.counter)
    console.log(req.query.counter2)
    console.log(req.query.counter3)
    var calculatedsum = sum(counter) ;
    console.log(calculatedsum);
    var answer = "the sum is " + calculatedsum;
    res.send(answer)

}
app.get('/handlesum',handleSecondRequest)
app.get('/',handleFirstRequest)

function createUser(req,res){
    res.send("Hello World")
}
// POST
app.post('/createUser',createUser)
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

