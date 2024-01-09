const fs = require('fs')
function removeExtraSpaces(str){
    newStr = str.replace(/\s+/g,' ').trim();
    console.log(newStr)
    return newStr;
}
function series(){
    fs.readFile('a.txt','utf-8',waitCallback);
   
}
function waitCallback(err,data){
            // assert : data is contents of a.txt
            function writeCallback(){
             fs.writeFile('b.txt',data,'utf-8',removeSpace)
            }
            function removeSpace(err){
                newData = removeExtraSpaces(data);
                fs.writeFile('a.txt',newData,'utf-8',deleteA);
            }
            setTimeout(writeCallback,3*1000)
}
function deleteA(err){
    fs.writeFile('a.txt','','utf-8',deleteB);
}
function deleteB(err){
    fs.writeFile('b.txt','','utf-8',finalcallback);
}
function finalcallback(){
    console.log("success")
}
series();