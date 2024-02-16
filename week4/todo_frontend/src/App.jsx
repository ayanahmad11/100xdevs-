import { useState } from "react";

var todos ={
  title :"Go to GYM",
  description :"go to gumm11",
  id:1 

}
// setInterval(()=>{       // it will not work because it is not the way or it is not a state variable
//   todos.title = "abcd", 
//   todos.description = "no";
// },1000);



function App() {
  // declaring state variable
  // const [component , state] = useState({ *initial state})
  const [todos,setTodo] =  useState({
    title:"go eat something ",
    description:"eat food",
    id:1
  });
  setInterval(()=>{
    setTodo({
      title:"title is changed",
      description:"description is changed",
      id :2
    })
  },2000)
 

  return (
    <>
     <h5>hi there</h5>
      {todos.title}<br>
      </br>
      {todos.description}
      <br></br>
      {todos.id}
      <Personname firstname={"shahalam"} lastname ={"ajaz"} ></Personname> 
     {/* props are like arguments */}
      
      <Personname firstname={todos.title} lastname = {todos.description}></Personname>
    </>
  )
} 

function Personname(props){    // this is a component
  return <div>      
    {props.firstname} 
    <br></br>
    {props.lastname}
  </div>
}

export default App
