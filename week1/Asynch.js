
var counter = 0 
function printCounter(){
    console.clear()
    console.log(counter);
    counter = counter + 1;

}
setInterval(printCounter,1000) // asynch task is running after synch 
// task1 and keep runing

// synchronous task is calculated first  
// var counter2 = 0
// for(var i=0;i<1000;i++){
//     counter2++;
// }
// console.log(counter2)

var counter2 = 0 // very Heavy synchronous Task2
                    // thread is busy in calculating this
                    //  so it will not listen to asynch task 
for(var i=0;i<100000000000000;i++){
    counter2++;
}
console.log(counter2)
