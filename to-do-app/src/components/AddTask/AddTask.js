import React from "react";
import "./AddTask.css";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Spinner from "../Spinner/Spinner";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export const AddTask = ({ func, setOpenCreateTask }) => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    title: "",
    desc: "",
    date: "",
  });

  const { title, desc, date } = state;
  console.log(state);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  function submitHandler(e) {
    if (!title || !desc || !date) {
      toast.warning("All fields are required");
      return;
    }
    setLoading(true);
    const data = { id: uuidv4(), title, desc, date };

    setTimeout(() => {
      const tasks = localStorage.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks"))
        : [];
      const taskcopy = [...tasks, data];
      localStorage.setItem("tasks", JSON.stringify(taskcopy));

      setState({ title: "", desc: "", date: "" });

      setLoading(false);

      toast.success("Task created");
      setOpenCreateTask(false);
    }, 3000);
  }

  return (
    <>
      <div>
        <form className="theForm">
          <div onClick={() => setOpenCreateTask(false)} className="icon">
            <AiFillCloseCircle />
          </div>
          <div className="addTask">Add Tasks</div>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onChange={changeHandler}
          />
          <textarea
            value={desc}
            name="desc"
            onChange={changeHandler}
            rows="10"
            cols="50"
          >
            {" "}
            Description{" "}
          </textarea>
          <input
            type="date"
            name="date"
            value={date}
            onChange={changeHandler}
          />

          {loading ? (
            <Spinner />
          ) : (
            <button onClick={submitHandler} className="btn-three">
              Add Task
            </button>
          )}
        </form>
      </div>
    </>
  );
};
