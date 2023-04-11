import React, { useEffect, useRef } from 'react'

export const UseRef = () => {
    const inputRef = useRef(null)
    useEffect(()=>{},[])
  return (
    <div>
        <input type="text" ref={inputRef}/>
    </div>
  )
}
