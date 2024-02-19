import {useState} from 'react'

function InputForm({children}) {
    const [username,setUsername]=useState("");
    console.log("input renderd")
  return (
 <>
   <form action="" onSubmit={(e)=>{
    e.preventDefault()
   }}>
 <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
 <button onClick={()=>setUsername("")}>Clear</button>



   </form>
   {children}
    
 </>
  )
}

export default InputForm