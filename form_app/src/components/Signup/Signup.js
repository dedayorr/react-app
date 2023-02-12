import React, { useState } from 'react'
import { Inputtwo } from '../Inputtwo/Inputtwo'
import "./Signup.css"

export const Signup = ({func}) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")
// console.log(name)
// console.log(password)
    function nameHandler(e){
        setName(e.target.value)
    }

    function passwordHandler(e){
        setPassword(e.target.value)
    }

  return (
    <form className='form'>
        <h1>Sign up</h1>
       <div className='formDiv'>
       <Inputtwo 
        type="text"
        value = {name}
        placeholder = "Username"
        onChange = {nameHandler}
        />
        <Inputtwo 
        type="password"
        value = {password}
        placeholder = "Password"
        onChange = {passwordHandler} 
        />
       </div>
       <button>SIGN UP</button>
       <span onClick={()=> func(true)}>LOGIN</span>
    </form>
  )
}
