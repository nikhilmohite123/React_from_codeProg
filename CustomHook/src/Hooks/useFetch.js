
import { useEffect,useState } from "react"

function useFetch(url){
   
    const [data,setData]=useState([])
    const [loading,setLoading]=useState()

    useEffect(()=>{
        const controller=new AbortController();
      const fetchApi=async()=>{
           setLoading(true)
       
            const responce=await fetch(url,{signal:controller.signal});
            const resData=await responce.json();
            
            setData(resData);
            setLoading(false)
          
            
            
      }
      fetchApi()

      return ()=>{
        controller.abort();

    }
    },[url])
return[data,loading];
}
export default useFetch;