import React, { useEffect, useState } from "react";
import { Addblog } from "../Addblog/Addblog";
import { Bloglist } from "../Bloglist/Bloglist";
import { Modal } from "../Modal/Modal";
import { UpdateBlog } from "../UpdateBlog/UpdateBlog";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { Controls, Player } from "@lottiefiles/react-lottie-player";

export const Home = () => {
  const [blogOpen, setBlogOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  // console.log(blogs)
  useEffect(() => {
    getBlogs();
  }, []);

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
        <div className="absolute w-[100%] h-[450px] top-[100px] right-0 left-0 bg-[#0000007b] md:h-[600px] md:top-[105px]"></div>
        {/* <img src="./nature.jpg" alt='img'/> */}
        <p className="text-3xl text-center absolute top-[25%] text-[#FFF2F2] w-[90%] mx-[5%] md:text-6xl ">
          THE ART CHALLENGES THE TECHNOLOGY <span className="text-[#7b93f6]">AND THE TECHNOLOGY INPIRES THE ART.</span>
        </p>
      </div>
      <div className="drop-shadow-2xl bg-[#1c2d628e] w-[85%] mx-auto p-[5%] text-lg mt-[-140px] mb-[25px] z-10 text-center font-bold text-[#FFF2F2]  md:w-[80%] md:h-[500px] md:flex md:gap-[20px] md:mt-[-240px]">
        <div>
          <a className="hover:underline"
            href="https://www.wired.com/story/i-saw-the-face-of-god-in-a-tsmc-factory/"
            target="_blank"
          >
            <h1 className="font-extrabold text-3xl md:">
              I Saw the Face of God in a Semiconductor Factory
            </h1>
          </a>
          <p className="text-sm">
            As the US boosts production of silicon chips, an American journalist
            goes inside TSMC, the mysterious Taiwanese company at the center of
            the global industry.
          </p>
          <p className="text-[10px] text-[#4e66c3]">VIRGINIA HEFFERMAN</p>
        </div>
        <div className=" md:hidden">
          <Player
            src="https://assets9.lottiefiles.com/private_files/lf30_ssAghj.json"
            background="transparent"
            speed="1"
            style={{ width: "280px", height: "250px" }}
            loop
            autoplay
          >
            <Controls visible={false} />
          </Player>
        </div>
        <div className="hidden md:block">
          <Player
            src="https://assets9.lottiefiles.com/private_files/lf30_ssAghj.json"
            background="transparent"
            speed="1"
            style={{ width: "280px", height: "250px" }}
            loop
            autoplay
          >
            <Controls visible={false} />
          </Player>
        </div>
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
      <div className=" flex flex-col justify-center items-center md:flex-row md:gap-10">
        <button
          className="w-[25%] text-[#faf7f7] bg-[#4e66c3] p-[2%] rounded-md hover:bg-[#91a4f1c6] md:p-[1%] md:w-[10%]"
          onClick={() => setBlogOpen(true)}
        >
          Add Blogs
        </button>
        <div className="flex items-center p-[2%] text-center text-xl md:p-0 md:float-right hover:text-[#4e66c3]">
          <Link to="/blogpage">CLICK HERE TO SEE MORE BLOGS...</Link>
        </div>
      </div>
      <br></br>
    </>
  );
};
