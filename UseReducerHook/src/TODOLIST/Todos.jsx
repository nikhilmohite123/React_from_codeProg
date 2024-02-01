import React from 'react'
import Todo from './Todo'
function Todos({todolist,dispatch}) {
  return (
    <>
     {
        todolist.map((todo)=>{
            return <Todo {...todo} dispatch={dispatch} key={todo.id}/>
        })
     }
    </>
  )
}

export default Todos