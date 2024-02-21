import React,{ useState } from "react";

// hook or custom hook
function usetodos(){
  const[todos,setTodos]= React.useState([]);

 
  React.useEffect(()=>{
   
    fetch("http://localhost:3000/todos").then((response)=>{
      response.json().then((data)=>{
        console.log(data);
        setTodos(data)
      })
    })  
    setInterval(()=>{
      fetch("http://localhost:3000/todos").then((response)=>{
        response.json().then((data)=>{
          console.log(data);
          setTodos(data)
        })
      }) 
    },1000)
  
  },[]);
  return todos;
}

function App() {
  const todos = usetodos();
  return (
    <div>
        {todos.map(todo => {
            return  <div>
                {todo.title}
                {todo.description}  
                 <button>delete</button> 
                 <br/>
              </div>
        })}
    </div>
  )
}


export default App