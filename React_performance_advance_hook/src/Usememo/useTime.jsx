import {useState,useEffect} from 'react'

function useTime() {
    const [time,setTime]=useState(new Date());

    useEffect(()=>{
       const id=window.setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=>{
         window. clearInterval(id);
        }
    },[])
  return time;
    
  
}

export default useTime