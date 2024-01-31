import React,{useEffect,useState,useRef}from 'react'

function Focus() {
    const inp=useRef("")
    useEffect(()=>{
        inp.current.focus();
     
    },[])
  return (
    <div><label htmlFor="username">username</label>
    <input type="text" id="username" ref={inp}/>
    </div>
  )
}

export default Focus