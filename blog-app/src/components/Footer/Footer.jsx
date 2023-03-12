import React from 'react'
import {IoLogoFacebook} from "react-icons/io"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai"

export const Footer = () => {
  return (
    <div className='bg-[#7286D3] p-[5%] text-[#FFF2F2] flex flex-col gap-[15px] md:p-[2%] md:gap-[10px] md:text-2xl'>
      <p className='text-lg font-bold md:text-2xl'>BLOGIFY</p>
      <div>Subscribe to our newsletter</div>
     <div className='flex gap-[10px]'>
     <input className='p-[1%] rounded-md md:h-[40px]' name='news' placeholder='address@email.com'/>
    <button className='bg-[#e5e0ffa2] p-[2%] rounded-md hover:bg-[#91a4f1c6] md:h-[40px] md:py-[1%] md:flex md:justify-center md:items-center cursor '>Subscribe</button>
     </div>
     <div className='flex gap-[30px] '>Follow us: <div className='flex gap-[10px] md:text-5xl hover:bg-[#7286D3] cursor'><IoLogoFacebook/><AiFillInstagram/><AiFillTwitterCircle/></div></div>
    </div>
  )
}
