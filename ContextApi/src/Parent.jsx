import React from 'react'
import Child from './Child'
function Parent() {
  return (
    <div style={{
        margin:"2rem",
        padding:"2rem",
        backgroundColor:"lightblue",
        width:"80%",
        height:"80%"
    }}>
        <h1>Parent</h1>
        <Child/>
    </div>
  )
}

export default Parent