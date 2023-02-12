import React from 'react'
import "./Inputtwo.css"

export const Inputtwo = (props) => {
    const {type,placeholder,onChange, value} = props
  return (
    <input type={type} value={value} onChange={onChange} placeholder={placeholder}/>
  )
}
