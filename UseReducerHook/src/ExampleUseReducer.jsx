import React from 'react'
import { useReducer } from 'react'


function reducer(state,action){
    if(action.type==="INCREMENT"){
        return {...state, count:state.count+1};
    }
    if(action.type=="RESET"){
        return {...state, count:0};
    }
    if(action.type==="DECREAMENT"){
        return {...state, count:state.count-1};
    }
    return state;
}

function ExampleUseReducer() {
     const [state,dispatch] =useReducer(reducer,{count:0})

  return (
    <>
    <h1>Count :{state.count}</h1>
    <button onClick={()=>{
        dispatch({
            type:"INCREMENT"
        })
    }}>+</button>
    <button onClick={()=>{
        dispatch({
            type:"DECREAMENT"
        })
    }}>-</button>
    <button  onClick={()=>{
        dispatch({
            type:"RESET"
        })
    }}
    >Res</button>
    </>
  )
}

export default ExampleUseReducer