import React from 'react'
import BasicDetail from './BasicDetail'
import { useAuth } from './Authprovider'

function UserDetail() {
    const {auth,setAuth}=useAuth();
    function handleLogin(){
        setAuth({username:"nikhil",email:"nikhilmohite@gmail.com"})
    }
  return (
    <>
    {auth.username ? <BasicDetail/>: <button onClick={ handleLogin}>Login</button>}
   
    </>
  )
}

export default UserDetail