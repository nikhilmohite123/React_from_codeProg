
import { useSome } from './App'


function Grandchild() {
    
const value=useSome();
  return (
    <div style={{
        margin:"2rem",
        padding:"2rem",
        backgroundColor:"yellow",
        width:"40%",
        height:"40%"
    }}>
        <h1>Grandchild</h1>
        <button onClick={value}>myfn</button>
    </div>
  )
}

export default Grandchild