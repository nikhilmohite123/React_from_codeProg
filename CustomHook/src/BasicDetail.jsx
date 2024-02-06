import useLocalStorage from "./Hooks/useLocalStorage"




function BasicDetail() {
//    const [firstname,setFirstname]=useState(()=>{
// return JSON.parse(localStorage.getItem("firstname")) || " "
//    })


//    useEffect(()=>{
//    localStorage.setItem("firstname",JSON.stringify(firstname))
//    },[firstname])

    const [firstname,setFirstname]=useLocalStorage("firstname");
    const [lastName,setLastName]=useLocalStorage("lastName")

  return (
    <form>

    <label htmlFor="firstname">firstname</label>
    <input type="text" id="firstname" value={firstname} onChange={(e)=>{
       
        setFirstname(e.target.value)
    }}/>
    <br />
    <br />
    <h1>firstname :{firstname}</h1>
    <br />
    <label htmlFor="lastname">lastname</label>
    <input type="text" id="firstname" value={lastName} onChange={(e)=>{
       
        setLastName(e.target.value)
    }}/>
    <br />
    <br />
    <h1>lastName :{lastName}</h1>



    </form>
  )
}

export default BasicDetail