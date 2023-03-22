import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsFillShareFill } from "react-icons/bs";

export const Blogcard = ({ blog, getBlogs, setUpdateOpen, collectId }) => {
  function truncate(str, num) {
    if (str.length > num) {
      str = str.substring(0, num) + "...";
    }
    return str;
  }

  function removeId(id) {
    const blogs = JSON.parse(localStorage.getItem("blogs"));
    const blogCopy = [...blogs];
    console.log(blogCopy);
    const filterBlogs = blogCopy.filter((item) => item.id !== id);
    console.log(filterBlogs);
    localStorage.setItem("blogs", JSON.stringify(filterBlogs));
    console.log(id);
  }

  function removeHandler(id) {
    const decision = window.confirm("Are you sure you want to remove blog?");

    if (decision) {
      removeId(id);
      getBlogs();
    }
  }

  const editHandler = (id) => {
    setUpdateOpen(true);
    collectId(id);
  };

  return (
    <div
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      className="flex flex-col justify-between p-[20px] bg-[#4e65c34e] mt-[6%] h-[450px] w-[300px] gap-[3px] mx-auto"
    >
      <h1 className="text-[#4e66c3] font-bold text-xl hover:ring-blue-700">
        {truncate(blog.title, 30)}
      </h1>
      <div className="flex flex-col">
        <img className="h-[150px] " src={blog.image} alt="" />
        <p className="text-[#FFF2F2]">{truncate(blog.desc, 100)}</p>
      </div>
      <p>Added by dedayorr</p>
      <div className="text-[#4e66c3]">{blog.date}</div>
      <div className="flex justify-between mt-[20px]">
        <div className="flex justify-between w-[20%] text-xl text-[#4e66c3]">
          <FaRegEdit onClick={() => editHandler(blog.id)} />
          <MdDelete onClick={() => removeHandler(blog.id)} />
        </div>
        <div className="text-[#4e66c3]">
          <BsFillShareFill />
        </div>
      </div>
    </div>
  );
};
