function sum(startIndex,endIndex){
    let suM=0;
    for(let i=startIndex;i<=endIndex;i++){
        suM+=i;
    }
    return suM;
}
function multiply(index1,index2){
    return index1*index2;
}
function Add(index1,index2){
    return index1+index2;
}
function Sub(index1,index2){
    return index1-index2;
}
function divide(index1,index2){
    return index1/index2;
}

//
let a=1,b=10;
let x = sum(a,b)
console.log(sum(a,b));
console.log(Sub(a,b));
console.log(multiply(a,b));
console.log(divide(a,b));
console.log(Add(a,b));

function modulus(a,b){
    return a%b;
}
console.log(modulus(10,3));