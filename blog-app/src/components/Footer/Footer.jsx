import React from 'react'
import {IoLogoFacebook} from "react-icons/io"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai"

export const Footer = () => {
  return (
    <div className='bg-[#7286D3] p-[5%] text-[#FFF2F2] flex flex-col gap-[15px]'>
      <p className='text-lg font-bold '>BLOGIFY</p>
      <div>Subscribe to our newsletter</div>
     <div className='flex gap-[10px]'>
     <input className='p-[1%] rounded-md' name='news' placeholder='address@email.com'/>
    <button className='bg-[#e5e0ffa2] p-[2%] rounded-md hover:bg-[#7285d394]'>Subscribe</button>
     </div>
     <div className='flex gap-[30px] '>Follow us: <div className='flex gap-[10px] text-2xl'><IoLogoFacebook/><AiFillInstagram/><AiFillTwitterCircle/></div></div>
    </div>
  )
}
