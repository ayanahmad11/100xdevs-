import React,{ useState } from "react";



function App() {
  const[todoforToday,setTodoforToday]= React.useState({
    title : "Go to Gym",
    description : "Hit gym from 7-9",
    id:1
  });
  console.log("above useeffect")
  React.useEffect(()=>{
    console.log("hi from useEffect ");
    setInterval(()=>{
      setTodoforToday({
        title : "used use effect",
        description:"it is a hook",
        id:3
      })
    },5000)
   

  },[]);
  return (
    <div>
        {todoforToday.title}
          <br></br> 
        {todoforToday.description}
    </div>
  )
}


export default App