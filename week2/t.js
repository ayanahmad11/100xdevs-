const fs = require('fs')

function fileRead(err,data){
    if (err) {
        console.error(err); // Handle any potential errors
        return;
      }
      console.log(data);
}
fs.readFile('a.txt','utf-8',fileRead);