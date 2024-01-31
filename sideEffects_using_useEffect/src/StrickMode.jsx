import React ,{useEffect,useState} from 'react'

function StrickMode() {
    console.log("rendered")
    useEffect(()=>{

        console.log("inside useEffect");

        return function(){
          console.log("cleanup")
        }
    },[])
  return (
    <div>
        <h1>hlo</h1>

    </div>
  )
}

export default StrickMode