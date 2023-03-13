import React from 'react'

export const Blogcard = () => {
    function truncate(str,num){
        if(str > num){
            str=str.subString(0,num) + "..."
        }
        return str;
    }
  return (
    <div className=''>
        <h1>Title</h1>
        <div className='flex '>
            <img src='' alt=''/>
            <p>Description</p>
        </div>
    </div>
  )
}
