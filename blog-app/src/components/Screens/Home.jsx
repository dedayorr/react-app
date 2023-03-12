import React from "react";
import styles from "./Home.module.css"

export const Home = () => {
  return (
    <>
      <div
        className={styles.background}
      >
        <div className="absolute w-[100%] h-[450px] top-[85px] right-0 left-0 bg-[#0000007b] md:h-[550px] md:top-[77px]"></div>
        {/* <img src="./nature.jpg" alt='img'/> */}
        <p className="text-3xl text-center absolute top-[25%] text-[#FFF2F2] w-[90%] mx-[5%] md:text-5xl ">
          A CUP OF TECH BRINGS YOU CLOSER TO GREATER IDEAS
        </p>
      </div>
      <div className="bg-[#1c2e62] w-[85%] mx-auto p-[5%] text-lg mt-[-140px] mb-[25px] z-10 text-center font-bold text-[#FFF2F2] drop-shadow-2xl md:w-[80%] md:h-[500px] md:flex md:gap-[20px] md:mt-[-240px]">
       <div>
       <p className="text-3xl font-extrabold md:text-5xl">Lorem ipsum.</p>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
        </p>
        <p className="hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe architecto vitae adipisci, voluptate inventore aspernatur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident atque ipsa rem saepe voluptatum quam numquam quia quaerat quidem inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio recusandae facere accusamus neque magnam aperiam delectus dignissimos explicabo quia at?</p>
       </div>
        <img className="md:w-[50%]" src="./lorem.jpg" alt="" />
      </div>
      <div className="text-[#4e66c3] font-bold text-2xl text-center">
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
      <br></br>

      <form className="flex flex-col gap-[15px] p-[2%] bg-red-500 w-[90%] mx-auto drop-shadow-2xl">
        <input className="p-[2%] rounded-md"
          type="text"
          name="title"
          // value={title}
          placeholder="Title"
          // onChange={changeHandler}
        />
        <input className="p-[2%] rounded-md" type="text" name="desc" placeholder="Description" />
        <input className="p-[2%] rounded-md"
          type="date"
          name="date"
          // value={date}
          // onChange={changeHandler}
        />
      </form>
      <br></br>
    </>
  );
};
