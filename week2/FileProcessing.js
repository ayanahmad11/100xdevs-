
// ### File Processing with Callback
/* Write a function 'readFileCallback' that takes a filename and a callback function . 'readFileCallback'
   should read the contents of file asynchronously and pass the data to the callback Function . 
*/
const fs = require('fs')
function printText(err,data){
    if(err)
        console.log("error")
    else     
    console.log(data)
}
function readFileCallback(name,callback){
         fs.readFile(name,'utf-8',callback)
}
readFileCallback(__dirname + '/a.txt',printText);// ok
// readFileCallback(__dirname + '/b.txt',printText);// error
