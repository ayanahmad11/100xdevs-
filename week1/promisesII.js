
function promiseBody(resolve){
    setTimeout(resolve,5000);
}

function medicine1get(){
    var answer = new Promise(promiseBody)      
    return answer;                           // answer is an object
    }
function printThing(){
    console.log("medicine 1 received")
}

var medicine = medicine1get(); // so medicine is an object or promise on our case
console.log(medicine)
//**Output  Promise {pending} */

// after getting the promise
medicine.then(printThing)
// NOTE : In this the printThing function is not known to the 




// console.log(Object.keys(medicine)) .. // return keys;
