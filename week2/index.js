
// creating a express server
// use of query parameters
// use of headers
// use of get post methods
// use of middleware
const express = require('express')
const app = express()
const port = 3000


let numberOfRequests = 0;

function middleware(req,res,next){          //to capture global requests we use middleware
                                            // middleware runs before actual handler start to run
    numberOfRequests = numberOfRequests+1;
    console.log(numberOfRequests)
    console.log("through"+req.headers.counter)
    next(); 
}
app.use(middleware);

function handleFirstRequest(req,res){
    // res.send('Hello WOrld!')
   
    res.send("another route let's say for login and signup")

}

function handleSecondRequest(req,res){
    // res.send('Hello WOrld!')
    var counter = req.query.counter
    console.log(req.query.counter)
    // console.log(req.query.counter2)
    // console.log(req.query.counter3)
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

function handleIt(req,res){
    console.log(req.headers)
    var counter = req.headers.counter;
    var calculatedSum =  sum(counter);
    var ans = "the sum is" + calculatedSum;
    res.send(ans);
}
// POST
app.post('/createUser',createUser)
app.post('/handleIt',handleIt)
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

