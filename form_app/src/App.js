import React, {useState} from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { Signup } from "./components/Signup/Signup";

function App() {
  const [open, setOpen] = useState(true);
  function handleSignUp(data){
    setOpen(data)
  }
  function handleSignIn(data){
    setOpen(data)
  }
  return (
    <div className="App">
      {open ? <Form func = {handleSignUp}/> : <Signup func = {handleSignIn}/>}
        {/* <Form /> */}
        {/* <Signup/> */}
    </div>
  );
}

export default App;
