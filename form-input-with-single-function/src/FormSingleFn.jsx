import React from 'react'
import { useState } from 'react';
function FormSingleFn() {

const[form,setForm]=useState({
    username:"",
    password:"",
    phone:"",
    email:""
})
const {username,password,phone,email}=form;

function handleChanges(e){
setForm(prev=>{
    return {...prev,[e.target.id]:e.target.value}
})
}

function handleSubmit(e){
    e.preventDefault();
    console.log(form);
}
  return (
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">UserName :</label>
        <input type="text" id='username' name='username' value={username} onChange={(e)=>{
        handleChanges(e)
        }}/>
        <br />
        <label htmlFor="email">Email :</label>
        <input type="email" id='email' name='email' value={email} onChange={(e)=>{
           handleChanges(e)
        }} />
        <br />
        <label htmlFor="password">Password :</label>
        <input type="password" id='password' name='password' value={password} onChange={(e)=>{
           handleChanges(e)
        }}/>
        <br />
        <label htmlFor="phone">Phone no :</label>
        <input type="text" id='phone' name='phone' value={phone} onChange={(e)=>{
            handleChanges(e)
        }} />
        <br /><br />
        <button type='submit'>submit</button>

        

    </form>
  )
}

export default FormSingleFn