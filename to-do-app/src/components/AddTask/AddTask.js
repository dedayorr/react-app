import React from "react";
import "./AddTask.css";
import { useState } from "react";

export const AddTask = ({ func }) => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");

  function titleHandler(e) {
    setTitle(e.target.value);
  }

  function descHandler(e){
    setDesc(e.target.value);
  }
  return (
    <>
      <div>
        <form>
          <p>Add Task</p>
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={titleHandler}
          />
          <textarea value={description} onChange={descHandler} rows="10" cols="50"> Description </textarea>
          {/* <input type="email" value={mail} placeholder="Enter your mail" onChange={mailHandler}/> */}
          {/* <input type="password" value={password} placeholder="Enter your password" onChange={passwordHandler}/> */}
          <button onClick={() => func(true)}>Add Task</button>
        </form>
      </div>
    </>
  );
};
