
import useFetch from "./Hooks/useFetch"

const url="https://jsonplaceholder.typicode.com/users"

function App() {

 const [data,loading]=useFetch(url);

 if(loading){
  return <h1>Loading ...</h1>
 }
 


  return (
   <>
   {
    data.map((userObj)=>{
      return <li key={userObj.id}>{userObj.username}</li>
    })

   }
 
   </>
  )
}

export default App
