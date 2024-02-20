import React from 'react'
import {useDispatch} from 'react-redux'
import { delTodo, toggle} from './todosSlice';

function Todo({id,title,completed}) {
    const dispatch = useDispatch();

function remove(){
    dispatch(delTodo(id));
}


  return (
    <div style={{
        margin:"1rem",
        padding:"1rem",
        border:"1px solid black",
        backgroundColor:"lightblue"
    }}>
        <input type="checkbox" checked={completed} onChange={()=>{
            dispatch(toggle(id))
        }}/>
        <p>id :{id}</p>
        <p style={{
            textDecoration:`${completed?'line-through':null}`
        }}>title :{title}</p>
        <p>completed: {completed?'true':'false'}</p>
        <button onClick={remove}>X</button>
        

    </div>
  )
}

export default Todo