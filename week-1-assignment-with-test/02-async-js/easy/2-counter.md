## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


// without using setInterval
// lets use set Interval
let cnt=1;
function counter=>{
   console.clear()
  console.log(cnt);
  cnt++;
}
for(var i=0;i<10;i++){
    setTimeout(counter,(i+1)*1000)
}





































































(Hint: setTimeout)