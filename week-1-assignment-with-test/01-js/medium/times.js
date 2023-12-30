/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/
//  Sum ?? --> can be done using (n*(1+n))/2;
// but for the question we calculate using for loop


function calculateTime(n) {
    let s = new Date().getTime();
    let sum=0;
    for(let i=1;i<=n;i++)
        sum+=i;
    let e =new Date().getTime();

    return ((e-s)/1000)
}
// console.log(calculateTime(10000))
// console.log(calculateTime(1000000))// greater the value thread might block or get large amount of timex
