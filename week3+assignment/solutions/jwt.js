const jwt = require ('jsonwebtoken')
const secret = "Supers3CrT1";

let ans = jwt.sign({
    username: "ayan@gmail.com",
    password: 12345
},secret);
console.log(ans);

// original string contains the email|password
jwt.verify(ans,secret,(err,originalString)=>
{
    console.log(originalString);
});