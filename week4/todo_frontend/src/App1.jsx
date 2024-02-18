import { useState } from "react";

// var todo ={
//   title :"Go to GYM",
//   description :"go to gumm11",
//   id:1 

// }

// setInterval(()=>{       // it will not work because it is not the way or it is not a state variable
//   todos.title = "abcd", 
//   todos.description = "no";
// },1000);



function App() {
  const[todoforToday,setTodoforToday]= React.useState({
    title : "Go to Gym",
    description : "Hit gym from 7-9",
    id:1
  });
  React.useEffect(()=>{

    console.log("hi from useEffect ");
    
  })

  return (
    <div>
      {todos.map((todo)=>{
        return <Todo title = {todo.title} description = {todo.description}></Todo>
      })
     
     }
     
     

</div>
  )
} 

function Personname(props){    // this is a component
  return <div>       
    {props.firstname} 
    <br></br>
    {props.lastname}
  </div>
}
function Todo(props){
  return <div style = {{backgroundColor: "red"}}>
          {props.title}
          {props.description} 
        </div>
}


export default App
