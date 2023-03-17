import React, { useEffect, useState } from "react";
import { Addblog } from "../Addblog/Addblog";
import { Bloglist } from "../Bloglist/Bloglist";
import { Modal } from "../Modal/Modal";
import { UpdateBlog } from "../UpdateBlog/UpdateBlog";
import styles from "./Home.module.css";

export const Home = () => {
  const [blogOpen, setBlogOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  // console.log(blogs)
  useEffect(() => {
    getBlogs();
  }, [setBlogOpen]);

  function getBlogs() {
    const blogs = localStorage.getItem("blogs");
    const blogsJSON = JSON.parse(blogs);
    setBlogs(blogsJSON);
  }

  // collecting ID
  const [identity, setIdentity] = useState(null);
  function collectId(id) {
    setIdentity(id);
  }
  return (
    <>
      <div className={styles.background}>
        <div className="absolute w-[100%] h-[450px] top-[85px] right-0 left-0 bg-[#0000007b] md:h-[550px] md:top-[77px]"></div>
        {/* <img src="./nature.jpg" alt='img'/> */}
        <p className="text-3xl text-center absolute top-[25%] text-[#FFF2F2] w-[90%] mx-[5%] md:text-5xl ">
          A CUP OF TECH BRINGS YOU CLOSER TO GREATER IDEAS
        </p>
      </div>
      <div className="drop-shadow-2xl bg-[#1c2e62] w-[85%] mx-auto p-[5%] text-lg mt-[-140px] mb-[25px] z-10 text-center font-bold text-[#FFF2F2]  md:w-[80%] md:h-[500px] md:flex md:gap-[20px] md:mt-[-240px]">
        <div>
          <p className="text-3xl font-extrabold md:text-5xl">Lorem ipsum.</p>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
          </p>
          <p className="hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            architecto vitae adipisci, voluptate inventore aspernatur! Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Provident atque
            ipsa rem saepe voluptatum quam numquam quia quaerat quidem
            inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odio recusandae facere accusamus neque magnam aperiam delectus
            dignissimos explicabo quia at?
          </p>
        </div>
        <img className="md:w-[50%]" src="./lorem.jpg" alt="" />
      </div>
      <div className="cursor hover:text-[#080847ef] text-[#4e66c3] font-bold text-2xl text-center">
        LATEST BLOGS
      </div>
      <hr
        style={{
          width: "30%",
          borderWidth: "2px",
          borderBlockColor: "#1c2e62",
          margin: "0 auto",
        }}
      ></hr>

      {blogOpen && (
        <Modal>
          <Addblog setBlogOpen={setBlogOpen} />
        </Modal>
      )}

      {updateOpen && (
        <Modal>
          const [identity, setIdentity] = useState(null)
          <UpdateBlog setUpdateOpen={setUpdateOpen} id={identity} />
        </Modal>
      )}

      <Bloglist
        blogs={blogs}
        getBlogs={getBlogs}
        setUpdateOpen={setUpdateOpen}
        collectId={collectId}
      />
      <br></br>
      <button
        className="w-[25%] mx-auto text-[#faf7f7] bg-[#4e66c3] p-[2%] rounded-md hover:bg-[#91a4f1c6] md:p-[1%] md:w-[10%]"
        onClick={() => setBlogOpen(true)}
      >
        Add Blogs
      </button>
      <br></br>
    </>
  );
};
