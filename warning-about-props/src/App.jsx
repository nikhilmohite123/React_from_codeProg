import { useState } from 'react'

import PropsWarn from './PropsWarn'
function App() {
const [count,setCount]=useState(0)

  return (
 <>
 <h1>count : <PropsWarn count={count}  /></h1>
 <button onClick={()=>{
  setCount(count+1)
 }}>Add</button>
 </>
  )
}

export default App
