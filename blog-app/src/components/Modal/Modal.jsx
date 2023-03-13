import React from 'react'


export const Modal = ({children}) => {
  return (
    <div className='fixed top-0 bottom-0 right-0 left-0 bg-[#000000a1] z-50'>{children}</div>
  )
}
