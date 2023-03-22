import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaBlog } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center bg-slate-400 md:">
        <div className="flex text-[10px] gap-[7px] md:text-lg">
          <p className="flex justify-center items-center gap-[1px]">
            <BsTelephoneForwardFill /> Telephone: 09127563048
          </p>
          <p className="flex justify-center items-center gap-[3px]">
            <AiOutlineMail />
            Email: dedayo16@gmail.com
          </p>
        </div>
        <div className="flex justify-center items-center gap-[3px] md:text-xl md:gap-[15px]">
          <IoLogoFacebook />
          <AiFillInstagram />
          <AiFillTwitterCircle />
        </div>
      </div>
      <div className=" bg-[#7286D3] flex justify-between p-[5%] md:p-[1%] md: ">
        <div className="flex justify-center items-center gap-[10px] text-[#f0e8e8] md:ml-[3%]">
          <div className="text-5xl">
            <FaBlog />
          </div>
          <p className="font-extrabold md:text-3xl">BLOGIFY</p>
        </div>
        <div
          className=" flex justify-center items-center text-white text-3xl md:hidden "
          onClick={() => setOpen((prev) => !prev)}
        >
          <RxHamburgerMenu />
        </div>
        {open && (
          <ul className="font-bold hover:bg- [#8EA7E9] absolute top-[15%] right-0 bottom-[270px] bg-[#f0e8e8da] w-[60%] p-[10%] text-black flex flex-col gap-[30px] z-50 ">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/blogpage">BLOG</Link>
            </li>
            <li>
              <Link to="/storepage">STORE</Link>
            </li>
            <li>
              <Link to="/contactpage">CONTACT</Link>
            </li>
          </ul>
        )}

        <ul className="hidden md:flex  md:text-2xl md:gap-[30px] md:mr-[2%] text-[#f0e8e8da] justify-center items-center ">
          <li className="cursor hover:underline">
            <Link to="/">HOME</Link>
          </li>
          <li className="cursor hover:underline">
            <Link to="/blogpage">BLOG</Link>
          </li>
          <li className="cursor hover:underline">
            <Link to="/storepage">STORE</Link>
          </li>
          <li className="cursor hover:underline">
            <Link to="/contactpage">CONTACT</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
