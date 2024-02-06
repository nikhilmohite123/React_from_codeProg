import { useEffect, useState } from "react"

function useLocalStorage(key){
     const [state,setState]=useState(()=>{
return JSON.parse(localStorage.getItem(key)) || " "
   })


   useEffect(()=>{
   localStorage.setItem(key,JSON.stringify(state))
   },[state])




    return [state,setState]
}
export default useLocalStorage;