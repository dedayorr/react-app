import React from 'react'

export const Home = () => {
  return (
    <>
    <div style={{
    backgroundImage:'url("./nature.jpg")',
    backgroundSize:"cover",
    backgroundPosition:"center",
    height:"350px",
    fontFamily:"serif",
    position:'relative'
    }}>
      <div className='absolute w-[100%] h-[350px] top-[0] right-0 left-0  bg-[#0000007b]'></div>
        {/* <img src="./nature.jpg" alt='img'/> */}
        <p className='text-3xl text-center absolute top-[25%] text-[#FFF2F2] w-[90%] mx-[5%]'>A CUP OF TECH BRINGS YOU CLOSER TO GREATER IDEAS</p>
    </div>
  <div className='bg-[#1c2e62] w-[85%] mx-auto p-[5%] text-lg mt-[-90px] mb-[25px] z-10 text-center font-bold text-[#FFF2F2]'>
    <p className='text-3xl font-extrabold'>Lorem ipsum.</p>
  <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
  <img src="./lorem.jpg" alt=""/>
  </div>
  <div className='text-[#4e66c3] font-bold text-2xl text-center'>LATEST BLOGS</div>
  <hr style={{width:"30%", borderWidth:"2px", borderBlockColor:'#1c2e62', margin:"0 auto"}}></hr>
    </>
  )
}
