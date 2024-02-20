import React from 'react'
import {useSelector} from 'react-redux'
import Todo from './Todo'

function Todos() {
   const todos= useSelector((state)=>{
     return state.todos
    })
    
  return (
    <div>
        {
            todos.map((todo)=>{
                return <Todo {...todo} key={todo.id}/>
            })
        }

    </div>
  )
}

export default Todos