import React, { useState } from 'react'
import FullName from './FullName'
function Form() {
    console.log("renedered")
    const [fName,setFname]=useState("")
    const [lName,setlName]=useState("")
    const fullName=fName+" "+lName;
  return (
    <form action="">
      <input type="text" value={fName}  onChange={(e)=>{
        setFname(e.target.value)
      }}/>
      <br />

      <input type="text" value={lName} onChange={(e)=>{
        setlName(e.target.value)
        
      }}/>
       

       <br />
       <br />
       <br />
       <p>firtsName: {fName}</p>
       <p>lastName :{lName}</p>
       <p>fullName :<FullName fullName={fullName}/></p>
    </form>
  )
}

export default Form