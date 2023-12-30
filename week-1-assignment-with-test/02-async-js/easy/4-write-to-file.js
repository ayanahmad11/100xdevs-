// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs')

let data = "Is this really happening ";

function afterContentsUpdated(err){
    if(err){
        console.error(err); 
        return ;

    }
    console.log("file has been written ");  
}
fs.writeFile('/Users/ayanahmed/Desktop/Full_Stack_Cohort/week1/week-1-assignment-with-test/02-async-js/easy/a.txt',data,'utf-8',afterContentsUpdated)
