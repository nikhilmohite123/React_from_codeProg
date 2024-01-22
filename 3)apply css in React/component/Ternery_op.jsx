import React from 'react'
import "./hello.css"
function Ternery_op() {
    const back_ground=false
    
  return (
    // using ternury oprator
    <>

    {/* want to give more than one className with or without condition */}
    <h1  className={`${back_ground?'bg':null} container`}> hi my name is NIKHIL</h1>
    <h2 style={{
      backgroundColor:back_ground?"yellow":"pink"
    }}>hey bhai kya kar raha he</h2>
    
    
    </>
  )
}

export default Ternery_op