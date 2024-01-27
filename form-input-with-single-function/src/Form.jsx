import React from 'react'
import { useState } from 'react'

function Form() {

const[username,setUsername]=useState("");
const[password,setpassword]=useState("");
const[email,setemail]=useState("");
const[phone,setphone]=useState("");

function handleSubmit(e){
    e.preventDefault();
    console.log(username,email,password,phone);
}




  return (
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">UserName :</label>
        <input type="text" id='username' name='username' value={username} onChange={(e)=>{
            setUsername(e.target.value);
        }}/>
        <br />
        <label htmlFor="email">Email :</label>
        <input type="email" id='email' name='email' value={email} onChange={(e)=>{
            setemail(e.target.value);
        }} />
        <br />
        <label htmlFor="password">Password :</label>
        <input type="password" id='password' name='password' value={password} onChange={(e)=>{
            setpassword(e.target.value);
        }}/>
        <br />
        <label htmlFor="phone">Phone no :</label>
        <input type="text" id='phone' name='phone' value={phone} onChange={(e)=>{
            setphone(e.target.value);
        }} />
        <br /><br />
        <button type='submit'>submit</button>

        

    </form>
  )
}

export default Form