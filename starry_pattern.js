function starline(num,answer){
    // let answer="";
    for(let i=1;i<=2*num-1;i++){
        answer+="*";
    }
    console.log(answer);
}

for(let i=1;i<=5;i++){
   let answer="";
    for(let j=i;j<5;j++){
   answer+=" ";
   }
    starline(i,answer);
  
}
//    *
//   ***
//  *****
// 