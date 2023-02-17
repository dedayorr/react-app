import React from 'react'
import "./Cartitems.css"

export const Cartitems = ({item}) => {
    console.log(item, 'products')
  return (
    <div className='items'>
{item.map((size,i)=> <li key={i}>{size}</li>)}
    </div>
  )
}
