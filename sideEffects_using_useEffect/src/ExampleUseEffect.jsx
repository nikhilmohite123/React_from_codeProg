import React from 'react'
import { useState,useEffect } from 'react'






function ExampleUseEffect() {
    console.log("rendered");
    const [count,setCounter]=useState(0);
    const [count2,setCount2]=useState(0);
    useEffect(()=>{
        console.log("inside useEffect")
    },[])
  return (


    <div>
      <h1>Count :{count}</h1>
      <button onClick={()=>{
        setCounter(count+1);
      }}>+</button>
<br /><br />
      <h1>Count2:{count2}</h1>
      <button onClick={()=>{
        setCount2(count2+1);
      }}>+</button>
    </div>
  )
}

export default ExampleUseEffect