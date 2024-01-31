import React, { useState } from 'react'
import { useEffect } from 'react'
import Userdata from './Userdata';
const url="https://jsonplaceholder.typicode.com/users"



function FetchData() {
console.log("rendered")
    const[data,setData]=useState([]);
    const[Loader,setLoader]=useState(true)
    const [controller,setController]=useState(false)

   
    useEffect(()=>{
        console.log("useEffect invoke")
        // async function FetchData(){
        //     const response=await fetch(url);
        //     const data= await response.json();
        //     setData(data);
        // }
        // FetchData();
        // setLoader(true)
        const abortController = new AbortController();
        const signal=abortController.signal;
        fetch(url,{signal:signal}).then((response)=>{
            // error handling
            if (!response.ok) {
                setController(true)
                setLoader(false)
                throw new Error(`HTTP error! Status: ${response.status}`);
              
              }

            return response.json();

        }).then(data=>{
            console.log(data)
            setData(data);
            setLoader(false)
        }).catch((err)=>{
            console.log(err,"err")
            
        })

        return function(){
            abortController.abort();
            console.log("cleanUp")
        }
        
    },[])


if(Loader){
    return <h1>Loading .....</h1>
}
else if(controller){
    return <h1>something is wrong</h1>
}

else
  return (
    <div>
        {
          data.map((user)=>{
                return <Userdata {...user} key={user.id}/>
            })
        }
       
    </div>
  )
}

export default FetchData