import React, { useState } from "react";
import { toast } from "react-toastify";
import { Input } from "../Input/Input";
import "./Form.css";

export const Form = ({ func }) => {
  console.log(func);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  //   console.log(name)
  //   console.log(password)

  function nameHandler(e) {
    setName(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  function submitHandler() {
    console.log("submit");
    toast.success("successful");
  }

  return (
    <form className="form">
      <div className="login">Login</div>

      <div className="formInput">
        <label>Username</label>
        <Input
          type="text"
          placeholder="Type your username"
          value={name}
          onChange={nameHandler}
        />

        <label>Password</label>
        <Input
          type="password"
          placeholder="Type your password"
          value={password}
          onChange={passwordHandler}
        />
      </div>

      <div className="forgot">Forgot password ?</div>

      <button type="button" onClick={submitHandler}>
        LOGIN
      </button>

      <span onClick={() => func(false)}>SIGN UP</span>
    </form>
  );
};
