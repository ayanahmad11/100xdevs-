// Intro to promises

function a(){
    console.log("Hi");
}
var Ayan = {  // object
name : a
}
Ayan.name();

// var users = ["harkirat","raman","sameer"] array

var users={     //objects can be complex // and keys can be functions
    name:"ayan",
    age:17,
    isLikable:function b(){
    console.log("true");
    },
    address:["p11","MMIG phase-2 pallavpuram MOdipuram","Meerut","Up INDIA "]

}
console.log(users.address[0])
users.isLikable();