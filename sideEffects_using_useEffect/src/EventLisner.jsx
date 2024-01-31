import React from 'react'
import { useEffect } from 'react'
function mouseEvent(e){
    
        console.log(e.movementX,e.movementY);
    
}
function EventLisner() {
    useEffect(()=>{
        document.addEventListener('mousemove',mouseEvent)
        return function(){
            document.removeEventListener('mousemove',mouseEvent)
            console.log("cleanup")
        }
    },[])
  return (
    <div>

<h1>EventLisner</h1>

    </div>
  )
}

export default EventLisner