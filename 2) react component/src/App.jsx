import Hello from "../component/Hellow"
import Greating from "../component/Greating"
function App() {
 
  return (
    <>
     // component name should be in capital
      <Hello/>
     <Greating/>
    </>
  )
}


// if export{App} then can't change name while importing
export {App}
//      ^ this is another way to export component

// if export default while importing you can change name