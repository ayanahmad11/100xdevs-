function promiseBody(resolve){

}
function medicine1get(){
    var answer = new Promise(promiseBody)
    return answer;
    // answer return is an object
}
//

var medicine = medicine1get(); // so medicine is an object
console.log(medicine)
//**Output  Promise {pending} */


console.log(medicine.then)

// console.log(Object.keys(medicine)) .. // return keys;
