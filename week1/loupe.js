// calling one Asynch call in another [Asynch chaining]
function medicine3get(){
    console.log("medicine3 received")
}
function medicine2get(){
    console.log("medicine2 received")
   setTimeout( medicine3get,3000)
} 
function medicine1get(){
    console.log("medicine 1 received")
    setTimeout(medicine2get,2000);
}
setTimeout(medicine1get,1000)

// Another way to write code written above
    // setTimeout(function medicine1get(){
    // console.log("medicine 1 received");
    // setTimeout(function medicine2get(){ console.log("medicine2 received");
    // setTimeout( function medicine3get(){
    // console.log("medicine3 received");
    // },3000) } ,2000);},1000)