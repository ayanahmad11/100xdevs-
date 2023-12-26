function printInLine(n){
    str=""
    for(let i=0;i<n;i++){
        str = str + "*";
    }
    console.log(str)
}
function partialLine(n){
    str="*"
    for(let i=1;i<n-1;i++){
        str+=" "
    }
    str+="*"
    console.log(str)
}
function Rtline(n,j){
    str=""
    for(let i=1;i<=n-j;i++){
        str+=" ";
    }
    
     str = str + "*".repeat(j);
     console.log(str);
}
function Ltline(n,j){
    str=""
    str+="*".repeat(j)
    for(let i=n-j;i>=1;i--){
        str += " "
    }
    console.log(str)
}
function pyline(n,j){
    let str=""
    for(let i=-1;i<n-j;i++){
        str+=" "
    }
    for(let k=3;k<2*j-2;k++)
        str+="*"
        console.log(str)
}
function pyline1(n,j){
    let str=""
    for(let i=1;i<=n-j;i++){
        str+=" "
    }
    for(let k=0;k<2*j-1;k++)
        str+="*"
    for(let i=n-j;i>0;i--){
        str+=" ";
    }
    for(let i=n-j;i>0;i--){
        str+=" ";
    }
    for(let k=2*j+1;k>2;k--)
            str+="*"
    console.log(str);
}
// 1 Solid Rectangle
// function printRecT(n){
//     for(let i=1;i<=n;i++){
//         printInLine(n);
//     }
// }
// printRecT(5);
// console.log("\n")
// ----------------------------------
// 2. Hollow rectangle
// function printHr(n){
//     printInLine(5);  
//     for(let i=0;i<3;i++){
//     partialLine(5);
//     }
//     printInLine(5);
// }
// printHr(5)
// console.log("\n")
//----------------------------------
// 3. Right angle triangle
// function printRT(n){
   
//     for(let i=1;i<=n;i++){
//         Rtline(n,i)
//     }
// }
// printRT(5);
// console.log("\n")
//----------------------------------
// // 4.Left angle triangle
// function printLT(n){
   
//     for(let i=1;i<=n;i++){
//         Ltline(n,i)
//     }
// }
// printLT(5);
// console.log("\n")
//----------------------------------
// 5. Download triangle pattern
// function printDT(n){

//     for(let i=0;i<n;i++){
//         printInLine(n-i);
//     }
// }
// printDT(5);
// console.log("\n")
// ------------------------------------
//6 pyramid pattern
// function pyramid(n){
//     for(let i=1;i<=n;i++){
//       pyline(n,i)
//     }
// }
// pyramid(5);
// -----------------------------------------
// 7.reverse pyramid 
function  Rpyramid(n){
    for(let i=n;i>=1;i--){
        pyline(n,i);
    }
}  
Rpyramid(5);
// -------------------------------------------
// 8) My heart is the ocean 
function Heart(n){
   for(let i=2;i<=3;i++){
        pyline1(n,i);
    }
    Rpyramid(2*n);
}
Heart(4);

