import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-4xl text-center'>Hello, I'm <span className='text-blue-400'>Yonatan</span>. <br /> I'm a Full Stack Developer.</h1>
        <button className='border-2 border-blue-400 mt-2 w-[7%] py-2 text-blue-400 transition duration-500 hover:shadow-xl/30 hover:cursor-pointer'>View My Work</button>
    </div>
  )
}

export default Hero