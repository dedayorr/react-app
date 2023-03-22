import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Spinner from "../Spinner/Spinner";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export const UpdateBlog = ({ setBlogOpen, setUpdateOpen, id }) => {
  console.log(id);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    title: "",
    image: "",
    desc: "",
    date: "",
  });
  const { title, image, desc, date } = state;
  // console.log(state);
  function submitHandler(e) {
    e.preventDefault();
    const { title, image, desc, date } = state;
    if (title === "" || image === "" || desc === "" || date === "") {
      toast.warning("All field is required");
      return;
    }

    setLoading(true);
    
    // const data = { id: uuidv4(), title, image, desc, date };

    // setTimeout(() => {
    //   const blogs = localStorage.getItem("blogs")
    //     ? JSON.parse(localStorage.getItem("blogs"))
    //     : [];
    //   const blogCopy = [...blogs, data];
    //   localStorage.setItem("blogs", JSON.stringify(blogCopy));
    //   setLoading(false);
    //   toast.success("Blog successfully added");
    //   setBlogOpen(false);
    //   console.log(blogs);
    // }, 3000);
  }

  function changeHandler(e) {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  return (
    <div>
      <form
        className="mt-[50%] flex flex-col gap-[30px] px-[3%] py-32 w-[90%] mx-auto drop-shadow-2xl bg-[#1c2e62] md:mt-[10%] md:w-[50%] "
        onSubmit={submitHandler}
      >
        <div
          className="absolute left-[325px] bottom-[97%] text-3xl text-[#f3f3f4] md:left-[98%]"
          onClick={() => {
            setUpdateOpen(false);
          }}
        >
          <AiFillCloseCircle />
        </div>
        <input
          className="p-[2%] rounded-md"
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={changeHandler}
        />
        <input
          className="p-[2%] rounded-md"
          accept="image/png, image/jpeg, image/webp"
          type="text"
          name="image"
          value={image}
          placeholder="Choose image"
          onChange={changeHandler}
        />
        <input
          className="p-[2%] rounded-md"
          type="text"
          name="desc"
          value={desc}
          placeholder="Description"
          onChange={changeHandler}
        />
        <input
          className="p-[2%] rounded-md"
          type="date"
          name="date"
          value={date}
          onChange={changeHandler}
        />
        {loading ? (
          <Spinner />
        ) : (
          <button
            type="submit"
            className="w-[25%] mx-auto text-[#FFF2F2] bg-[#e5e0ffe8] p-[2%] rounded-md hover:bg-[#91a4f1c6]"
          >
            Add
          </button>
        )}
      </form>
    </div>
  );
};
