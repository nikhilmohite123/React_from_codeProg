import { useState,createContext } from 'react'
import Parent from './Parent'
import { useContext } from 'react';


export const somecontext=createContext();


function App() {
  function myfn(){
    console.log("inside call")
  }
  

  return (
    <somecontext.Provider value={myfn}>
   <div style={{
    margin:"2rem",
    padding:"2rem",
    backgroundColor:"grey",
    height:"100vh"
}}>
<h1>APP</h1>
  <Parent/>
   </div>
   </somecontext.Provider>
  )
}
export function useSome(){
  return useContext(somecontext)
}

export default App
