import React, { useState } from "react";
import { Input } from "../Input/Input";
import "./Form.css";

export const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  console.log(name)
  console.log(password)

  function nameHandler(e){
    setName(e.target.value)
  }

  function passwordHandler(e){
    setPassword(e.target.value)
  }

  return (
    <form className="form">
      <div className="login">Login</div>

      <div className="formInput">
        <label>Username</label>
        <Input type="text" 
        placeholder="Type your username" 
        value={name}
        onChange = {nameHandler} />

        <label>Password</label>
        <Input
          type="password"
          placeholder="Type your password"
          value={password}
          onChange = {passwordHandler}
        />
      </div>

      <div className="forgot">Forgot password ?</div>

      <button>LOGIN</button>

      <a href="/">SIGN UP</a>
    </form>
  );
};
