import React from 'react'
import Grandchild from './Grandchild'
function Child() {
  return (
    <div
    style={{
        margin:"2rem",
        padding:"2rem",
        backgroundColor:"pink",
        width:"60%",
        height:"60%"
    }}>
<h1>Child</h1>
<Grandchild/>



    </div>
  )
}

export default Child