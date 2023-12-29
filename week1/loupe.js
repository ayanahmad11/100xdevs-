function medicine2get(){
    console.log("medicine2 received")
} 
function medicine1get(){
    console.log("medicine 1 received")
    setTimeout(medicine2get,2000);
}
setTimeout(medicine1get,1000)
