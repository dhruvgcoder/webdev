import { useState } from 'react';

export default function MyApp(){
  const [todos , setTodo] = useState([{
    title : "Morning routine",
    description : "Go to the gym",
    done : true
  }]);


function AddTodo(){
  setTodo([...todos,{
    title : document.getElementById("title").value,
    description : document.getElementById("description").value,
    done : true
    
  }])
  
}

return (
  <>
  <input id="title" type="text" placeholder="title"></input>
  <input id="description" type="text" placeholder="description"></input>
  <button onClick={AddTodo}>Add Todo</button>
  {todos.map((todo) => (
    <Todo
    title={todo.title}
    description={todo.description}
    done={todo.done}/>
      )
    )}
  </>
);
}

function Todo(props){
  return(
    <div>
    <h2>{props.title}</h2>
    <h2>{props.description}</h2>
    <h2>{props.done ? "Task is done" : "Task not done"}</h2>
    <br/> 
    </div>
  )
}
