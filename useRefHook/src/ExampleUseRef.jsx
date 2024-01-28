import { useState, useRef } from "react";

// function ExampleUseRef() {
//   console.log("rendered");
//   const [username, setUsername] = useState("");
//   return (
//     <div>
//       <form
//         action=""
//         onSubmit={(e) => {
//           e.preventDefault();
//           console.log(username);
//         }}
//       >
//         <label htmlFor="usename">username</label>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <br />
//         <br />
//         <button type="submit">submit</button>
//       </form>
//       <br />
//     </div>
//   );
// }
function ExampleUseRef(){
console.log("render")

const username=useRef("")
const htmlElment=useRef("")
const counter=useRef(0)
console.log(username)
    return(

        <>
         <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log(username.current);
        }}
      >
        <label htmlFor="usename">username</label>
        <input
          type="text"
        
          ref={username}
          onChange={(e) => {
            username.current=e.target.value;
          }}
        />
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
        <h1 ref={htmlElment}>hlo</h1>
        <button onClick={()=>{
            htmlElment.current.textContent="ravi";
        }}>Change Name</button>
        <h1>{counter.current}</h1>
        <button onClick={()=>{
            counter.current += 1;
            console.log(counter.current)
        }}> increase</button>
        </>
        
    )
}

export default ExampleUseRef;
