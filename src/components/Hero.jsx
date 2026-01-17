import React, { useEffect, useState } from 'react'


const Hero = ({ scrollToRef }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  const handleClick = () => {
    if (scrollToRef && scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-black'>
        <h1
          className={`text-6xl text-white text-center transition-all duration-1000 ease-out
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >Hello, I'm <span className='text-blue-400'>Yonatan</span>. <br /> I'm a Full Stack Developer.</h1>
        <button
            className={`mt-5 border-2 border-blue-400 px-10 py-2 text-blue-400
              transition-all duration-300 delay-100
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              hover:scale-110 hover:bg-blue-400 hover:text-black hover:cursor-pointer`}
            onClick={handleClick}
          >View My Work</button>
    </div>
  )
}

export default Hero