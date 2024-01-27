import React from 'react'
import Todo from './Todo'
function Todos({todoList,toggleComplted,removeTodo}) {
  return (
    <div>
        {
            todoList.map((todo)=>{
                return <Todo {...todo} key={todo.id} toggleComplted={toggleComplted} removeTodo={removeTodo}/>
            })
        }
    </div>
  )
}

export default Todos