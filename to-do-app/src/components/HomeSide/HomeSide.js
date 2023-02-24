import React, { useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import "./HomeSide.css";
import Form from "../Form/Form";
import { AddTask} from "../AddTask/AddTask";
import Register from "../Register/Register";

const HomeSide = () => {
  const [open, setOpen] = useState(true);

  function handleSignup(data){
      setOpen(data)
  }

  function handleSignin(data){
    setOpen(data)
}

// function handleRegister(data){
//   setDisplay(data)
// }

// function handleSignin(data){
// setOpen(data)
// }

  return (
    <div className="container">
      <div className="firstSlide">
        <Player
          src="https://assets6.lottiefiles.com/packages/lf20_vxqjjzal.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        >
          <Controls visible={false} />
        </Player>

        <div className="text">
          <div>CREATE TASK HERE.</div>
          <p>“Management must manage!”</p>
        </div>
      </div>

      <div className="secondSlide">
       {open ?  <Form func = {handleSignup} /> : <AddTask func = {handleSignin}/> && open ?  <Form func = {handleSignup} /> : <Register func = {handleSignin}/>}
       {/* {show ?  <Form func = {handleRegister} /> : <Register reg = {handleSignin}/>} */}
       {/* <Register reg = {}/> */}
      </div>
    </div>
  );
};

export default HomeSide;
