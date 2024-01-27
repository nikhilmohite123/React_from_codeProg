import React from 'react'
import { useState } from 'react'




function RadioBtn() {

    const[gender,setGender]=useState("male")


  return (
    <div style={{
        padding:"1rem"
        
    }}>
        <h1>Radio Btn</h1>
        <label htmlFor="male">Male</label>
        <input type="radio" id="male"  name='gender' checked={gender==='male'} onChange={()=>{
        setGender("male");
        }}/>
        <br />
        <label htmlFor="female">Female</label>
        <input type="radio" id="female"  name='gender'checked={gender==="female"} onChange={()=>{
            setGender("female")
        }}/>
        <br />
        <label htmlFor="other">Other</label>
        <input type="radio" id="other"  name='gender'checked={gender==="other"} onChange={()=>{
            setGender("other")
        }}/>

    </div>
  )
}

export default RadioBtn