var arr = [1,2,3];
const mp = arr.map((x)=> x*2)
console.log(mp); 

var users = [{
    name:"ayan",
    age:"23"
    
},{
    name:"hakuna",
    age:"21"
}] 

console.log(users)
console.log(users.map(
    (x)=>
    
    {   return{
        name : x.name,
        age : x.age,
        isAllowed: x.age>22
    }
       
   
  
}
)
 )