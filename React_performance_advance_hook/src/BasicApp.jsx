import React, { useState } from 'react'
import InputForm from './InputForm'
import ExtraComponent from './ExtraComponent';
function BasicApp() {
    console.log("basic renderd")
   
  return (
    <>
    <h1>BasicApp</h1>
    <InputForm><ExtraComponent/></InputForm>
    
   
    
    </>
  )
}

export default BasicApp