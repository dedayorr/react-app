import React, { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { Signup } from "./components/Signup/Signup";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Listitems } from "./components/Listitems/Listitems";
import { Users } from "./components/Users/Users";

function App() {
  const [open, setOpen] = useState(true);
  function handleSignUp(data) {
    setOpen(data);
  }
  function handleSignIn(data) {
    setOpen(data);
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="App">
        {open ? <Form func={handleSignUp} /> : <Signup func={handleSignIn} />}
        {/* <Form /> */}
        {/* <Signup/> */}
        <Listitems/>
        <Users/>
      </div>
    </>
  );
}

export default App;
