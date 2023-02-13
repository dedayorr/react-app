import React from 'react'
import "./Input.css"

export const Input = (props) => {
    const {text, value, placeholder, onChange} = props;
  return (
    <input text={text} value={value} placeholder={placeholder} onChange={onChange} />
  )
}
