// <!-- ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output.  -->

const fs = require('fs');
function printfile(err,data){
    if(err)
    {console.log(err);
    return ;
    }
    console.log(data)

}
fs.readFile('/Users/ayanahmed/Desktop/Full_Stack_Cohort/week1/week-1-assignment-with-test/02-async-js/easy/a.txt','utf-8',printfile)

// let sum=0;
// for(var i=0;i<1000000000;i++){   // first this synch task get executed then read file
//     sum+=i;
// }
// console.log(sum)