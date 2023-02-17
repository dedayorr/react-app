import React from 'react'
import "./Header.css"
import {BsCart4} from "react-icons/bs"

export const Header = () => {
  return (
    <div className='navBar'>
<div className='logo'>
    UNIQUE
</div>
<div className='cart'>
    <BsCart4 style={{fontSize:"40px"}}/>
</div>
    </div>
  )
}
