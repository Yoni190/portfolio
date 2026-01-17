import React from 'react'


const Hero = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-black'>
        <h1 className='text-6xl text-white text-center'>Hello, I'm <span className='text-blue-400'>Yonatan</span>. <br /> I'm a Full Stack Developer.</h1>
        <button className='border-2 border-blue-400 mt-2 px-10 py-2 text-blue-400 transition duration-500 hover:shadow-xl/30 hover:cursor-pointer'>View My Work</button>
    </div>
  )
}

export default Hero