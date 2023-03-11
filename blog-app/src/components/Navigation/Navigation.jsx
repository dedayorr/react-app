import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {RxHamburgerMenu} from "react-icons/rx"
import {FaBlog} from "react-icons/fa"


export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='bg-[#7286D3] flex justify-between p-[5%]' >
      <div className='flex justify-center items-center gap-[10px] text-[#f0e8e8]'>
      <div className='text-4xl'><FaBlog/></div>
      <p className='font-extrabold '>BLOGIFY</p>
      </div>
      <div className='flex justify-center items-center text-white text-3xl' onClick={()=>setOpen((prev)=>!prev)}><RxHamburgerMenu/></div>
        {open && <ul className='font-bold hover:bg- [#8EA7E9] absolute top-[11%] right-0 bottom-[270px] bg-[#f0e8e8da] w-[60%] p-[10%] text-black flex flex-col gap-[30px] z-50'>
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
        </ul>}
    </div>
  )
}
