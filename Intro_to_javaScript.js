// Primitives

// Variables

//numbers
var roll_no =1

// Strings 
var name="Ayan Ahmed"

// Arrays
const users=["Ayan","Anurudh","Atish","Aquib"];


// console.log(users);

// console.log(users[0]);
// console.log(users[2]);

// So now comes the LOOP
for(let i=0;i<users.length;i++)
{
    console.log(users[i]);
}

//objects
var users1={
    name:"Ayan Ahmed",
    class:"CSIT-1",
    Roll_No:2000270110027
}
// to check the type of these objects
console.log(typeof name);// Shift +option +up/down
console.log(typeof roll_no );
console.log(typeof users1 );

// console.log(users);
// console.log(users1);

// Array of Objects
var cp =[
{ name:"Ayan Ahmed",age:23},
{name:"Nida ",age:23    }
];
for(let i=1;i<cp.length;i++){
    console.log(cp[i].name+"Loves"+cp[i-1].name);
}
// console.log()