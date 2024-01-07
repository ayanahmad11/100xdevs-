//### Parallel Execution with Callbacks 
/*  
Implement a function 'parallelFileOperation ' that returns an array of size of 2
with the first index containing the contents of the file 'a.txt' in utf-8
encoding .If 'a.txt' doesn't exist ,then throw an error .The second element of the
array contains 1 of the text `Hello!` is successfully written to the file `b.txt` and 0 if 
the write operations fails. 
*/  

// const fs = require('fs');


// function parallelFileOperation(){
//    let  ans=[]
//    let count=0;;
//     function readCallback(err,data){
//         if(err)
//             throw err;
//             ans[0]=data  ;
//             count++;
//         if(count==2)
//         console.log(ans)
           
//     }
//     function writeCallback(err){
//             if(err)
//                 ans[1]=0;
//             else 
//                 ans[1]=1;
//             count++;                   
//         if(count==2)
//             console.log(ans);         
//     }
       
//     fs.readFile('a.txt','utf-8',readCallback) 
//     fs.writeFile('b.txt','Hello','utf-8',writeCallback)
   
//     return ans;

//     // return arr = [ ];
// }
// // console.log(parallelFileOperation());
// parallelFileOperation();
// // console.log(ans);
const fs = require('fs').promises;

async function parallelFileOperation() {
    try {
        const [fileAContent] = await Promise.all([
            fs.readFile('a.txt', 'utf-8'),
            fs.writeFile('b.txt', 'Hello', 'utf-8').then(() => 1).catch(() => 0)
        ]);
        return [fileAContent, 1];
    } catch (err) {
        throw err;
    }
}

// Example usage:
parallelFileOperation()
    .then(result => console.log("Results:", result))
    .catch(error => console.error("Error:", error));
    /*
    
    Explanation:

*   The fs.promises module is used for asynchronous file operations, 
    providing promise-based versions of the fs functions.

*    Promise.all() is used to execute both the readFile and writeFile operations concurrently.

*    The writeFile operation is chained with .then() to resolve with 1 if successful or 0  
     if there's an error.

*    An async function parallelFileOperation is created to handle the asynchronous operations.

*    It uses await with Promise.all() to await the completion of both file operations simultaneously.

*    The function returns an array with the content of a.txt (or an error if a.txt doesn't exist)
     and the success/failure status of writing to b.txt.

This optimized version leverages promises and asynchronous/await syntax, resulting in cleaner and more concise code while ensuring parallel execution of file operations.
    */