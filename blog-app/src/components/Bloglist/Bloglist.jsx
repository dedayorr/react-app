import React from "react";
import { Blogcard } from "../Blogcard/Blogcard";

export const Bloglist = ({ blogs, getBlogs, setUpdateOpen, collectId }) => {
  function truncate(str, num) {
    if (str.length > num) {
      str = str.subString(str, num) + "...";
    }
  }
  return (
    <div className="md:flex md:flex-wrap justify-center items-center gap-[30px] w-[90%] mx-auto ">
      {blogs && blogs.length > 0 ? (
      blogs.map((blog) => <Blogcard key={blog.id} blog={blog} getBlogs={getBlogs} setUpdateOpen={setUpdateOpen} collectId={collectId}/>)
      ) : (
        <div className="font-bold text-3xl text-center"></div>
      )}
      <br></br>
      {/* <div
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        className="w-[90%] mx-auto p-[2%] bg-[#4e65c34e] h-[450px]"
      >
        <p className="text-[#4e66c3] font-bold text-xl">VentureBeat.com</p>
        <img src="./techs.webp" alt="img" />
        <p className="text-[#FFF2F2]">
          VentureBeat is a media company obsessed with covering amazing
          technology and why it matters in our lives. From the most innovative
          tech and gaming companies...
          <a href="https://venturebeat.com">
            <button className="text-[#4e66c3]">Read more</button>
          </a>
        </p>
        <div className="flex justify-between">
          <div className="flex justify-between w-[20%] text-xl text-[#4e66c3]">
            <FaRegEdit />
            <MdDelete />
          </div>
          <div className="text-[#4e66c3]">
            <BsFillShareFill />
          </div>
        </div>
      </div>
      <br></br>
      <div
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        className="w-[90%] mx-auto p-[2%] bg-[#4e65c34e] h-[450px]"
      >
        <p className="text-[#4e66c3] font-bold text-xl">Eurogamer.net</p>
        <img src="./hitman.jpeg" alt="img" />
        <p className="text-[#FFF2F2]">
          Eurogamer.net was founded in September 1999 and has been covering
          video games ever since. The site began life with a PC focus and a keen
          interest in the competitive FPS scene of the time...
          <a href="https://www.eurogamer.net/">
            <button className="text-[#4e66c3]">Read more</button>
          </a>
        </p>
        <div className="flex justify-between">
          <div className="flex justify-between w-[20%] text-xl text-[#4e66c3]">
            <FaRegEdit />
            <MdDelete />
          </div>
          <div className="text-[#4e66c3]">
            <BsFillShareFill />
          </div>
        </div>
      </div>
      <br></br>
      <div
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        className="w-[90%] mx-auto p-[2%] bg-[#4e65c34e] h-[450px]"
      >
        <p className="text-[#4e66c3] font-bold text-xl">TheNextWeb.com</p>
        <img src="./newweb.jpeg" alt="img" />
        <p className="text-[#FFF2F2]">
          The Next Web is another leading blog on the internet which provides
          technology stuff on the daily basis to internet users. Mostly it
          covers guides and topics related to business...
          <a href="https://thenextweb.com/">
            <button className="text-[#4e66c3]">Read more</button>
          </a>
        </p>
        <div className="flex justify-between">
          <div className="flex justify-between w-[20%] text-xl text-[#4e66c3]">
            <FaRegEdit />
            <MdDelete />
          </div>
          <div className="text-[#4e66c3]">
            <BsFillShareFill />
          </div>
        </div>
      </div> */}
      <br></br>
    </div>
  );
};
