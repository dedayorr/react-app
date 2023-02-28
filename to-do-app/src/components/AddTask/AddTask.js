import React from "react";
import "./AddTask.css"
import { useState } from "react";
import {AiFillCloseCircle} from "react-icons/ai"

export const AddTask = ({ func, setOpenCreateTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [date, setDate] = useState("");

  function titleHandler(e) {
    setTitle(e.target.value);
  }

  function descHandler(e){
    setDesc(e.target.value);
  }

  function dateHandler(e){
    setDate(e.targer.value);
  }

  return (
    <>
      <div>
        <form className="theForm">
        <div onClick={()=> setOpenCreateTask(false)} className="icon"><AiFillCloseCircle/></div>
          <div className="addTask">Add Task</div>
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={titleHandler}
          />
          <textarea value={description} onChange={descHandler} rows="10" cols="50"> Description </textarea>
          <input 
            type="date"
            value={date}
            onChange={dateHandler}/>
          {/* <input type="email" value={mail} placeholder="Enter your mail" onChange={mailHandler}/> */}
          {/* <input type="password" value={password} placeholder="Enter your password" onChange={passwordHandler}/> */}
          <button className="btn-three">Add Task</button>
        </form>
      </div>
    </>
  );
};
