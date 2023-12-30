// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
const fs = require('fs')

function clean(data){
    let arr= data.split(" ");
    let answerArray=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].length!=0)
            answerArray.push(arr[i]);

    }
    let s= answerArray.join(" ");
    return s;
}
// clean("My name    is ayan    ahmed")
function fileWritten(err){
console.log("done")
}

function printfile(err,data){
    if(err)
    {console.error(err);
    return ;
    }
    let cleanData = clean(data);
    fs.writeFile('/Users/ayanahmed/Desktop/Full_Stack_Cohort/week1/week-1-assignment-with-test/02-async-js/easy/a.txt',cleanData,'utf-8',fileWritten)

}

fs.readFile('/Users/ayanahmed/Desktop/Full_Stack_Cohort/week1/week-1-assignment-with-test/02-async-js/easy/a.txt','utf-8',printfile)

