

//////
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
  // declaring state variable
  // const [component , state] = useState({ *initial state})
  const [todos,setTodo] =  useState([{
    title:"go eat something ",
    description:"eat food",
    id:1
  },{ 
    title:"go to room  ",
  description:"sit on the table",
  id:1
    
  }]);
  // setInterval(()=>{
  //   setTodo({
  //     title:"title is changed",
  //     description:"description is changed",
  //     id :2
  //   })
  // },2000)
 

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
