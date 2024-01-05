const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000
app.use(bodyParser.json()) 

// function handleSecondRequest2(req,res){
//     // console.log(req.body) ;           // req.header is fine // req.query is fine// why req.body is undefined?
//     var counter = req.body.counter
  
//     if(counter<100){

//         var calculatedsum = sum(counter) ;
//         console.log(calculatedsum);
//         var answer = "the sum is " + calculatedsum;
//         res.send(answer)
//     }
//     else{
//         res.status(411).send("you have sent a very big number")
//     }

//  }
function handleThirdRequest(req,res){
    var counter = req.body.counter;
    var calculatedSum = sum(counter);
    var product = mul(counter);
    var answerObject ={
        csum: calculatedSum,
        product: product
    } 
    // res.status(200).json(answerObject);
    res.status(200).send(answerObject);

}
function givePage(req,res){
    res.send(`<html>
    <head>
        <title>
            Hello from page;
        </title>
    </head>
    <body>
        <h6><b><i>Hi There</i></b></h6>
    </body>
</html>`)

// res.sendFile('/Users/ayanahmed/Desktop/Full_Stack_Cohort/week1/week2/index.html')
// res.sendFile(__dirname + '/index.html')
}
app.get('/',givePage)

// app.post('/handlesum',handleSecondRequest2)
app.post('/handlesum',handleThirdRequest)
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
function mul(counter){
    let p=1;
    for(let i=1;i<=counter;i++){
        p*=i;
    }
    return p;
}
// 99% of the api or server sends JSON objects [data in json format not in text format];