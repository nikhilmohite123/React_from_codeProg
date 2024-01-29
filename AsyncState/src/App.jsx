import { useState } from "react"

function App() {
  
  const [count,setCount]=useState(0)


  function add(){
 
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    
    setCount((prevCount) => prevCount + 1);
  setCount((prevCount) => prevCount + 1);
  setCount((prevCount) => prevCount + 1);
    console.log(count)
  }
  return (
   <>
   <h1>Count :{count}</h1>
   <button onClick={add}>+</button>
   </>
  )
}

export default App
