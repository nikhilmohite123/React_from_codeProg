import ExampleUseEffect from "./ExampleUseEffect"
import FetchData from "./FetchData"
import CleanupFn from "./CleanupFn"
import { useState } from "react"
import EventLisner from "./EventLisner"
import StrickMode from "./StrickMode"
import Focus from "./Focus"
function App() {
  

  const [show,setshow]=useState(true)
  return (
   <>
   {/* <ExampleUseEffect/> */}
  
   <label htmlFor="component">Show component</label>
<input type="checkbox" checked={show} id="component" onChange={()=>{
  setshow(pre=> {
    return !pre;
  })
}}/>
{/* 
   {show ?<CleanupFn/>:null} */}
 {/* {show ?<EventLisner/>:null}  */}
{/* {show && <FetchData/>} */}
{/* {show && <StrickMode/>} */}
{ show && <Focus/>}
   </>
  )
}

export default App
