import { useAuth } from "./Authprovider"


function BasicDetail() {
const {auth,setAuth}=useAuth()
  return (
    <div>
        <p>username :{auth.username}</p>
        <p>email :{auth.email}</p>
        <button onClick={()=>{
            setAuth({})
        }}>Log out</button>




    </div>
  )
}

export default BasicDetail