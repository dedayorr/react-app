import React from 'react'
import "./Input.css"

export const Input = (props) => {
const {placeholder,type,value, onChange} = props
  return (
    <input 
    type={type} 
    value={value} 
    placeholder={placeholder} 
    onChange={onChange}/>
  )
}



