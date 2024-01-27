import { useState } from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { v4 as uuid } from 'uuid';

function App() {
  const[todoList,settodoList]=useState([
    {id:1,title:"dance practice",completed:false},
    {id:2,title:"Read book",completed:true},
    {id:3,title:"Morning walk",completed:false},
  
  ])
  function handleSubmit(newtodo){
   settodoList(prev=>{
    return [...prev,{id:uuid(), title:newtodo,completed:false}]
   })
  
  }
  function toggleComplted(id){
    
   settodoList(prev=>{
    return  prev.map((todo)=>{
      if(id===todo.id){
        return {...todo,completed:!todo.completed}
      }
      else{
        return {...todo};
      }
    })
   })
  }

  function removeTodo(id){

    settodoList(prev=>{
      return prev.filter((todo)=>{
        if(todo.id!==id){
          return todo;
        }
      })
    })
  }
 
  return (
    <div className='container'>
       <ToastContainer/>
    <h1 className='main-title'>Todo List</h1>
   
   <TodoForm handleSubmit={handleSubmit}/>
    <Todos todoList={todoList} toggleComplted={toggleComplted} removeTodo={removeTodo} />
   </div>
    
    
  )
}

export default App
