import React, { useEffect } from 'react'


function CleanupFn() {
    useEffect(()=>{
        console.log("inside useEffect");

        return function(){
          console.log("cleanup")
        }
    },[])
  return (
   <>
   <h1>hlo bhai log</h1>
   
   
   </>
  )
}

export default CleanupFn