import React from 'react'

const Navbar = () => {
  return (
    <div className='border py-3 mt-4 bg-gray-900'>
        <ul className='flex gap-5 justify-center text-white text-xl'>
            <li className='hover:cursor-pointer hover:text-blue-400'>Home</li>
            <li className='hover:cursor-pointer hover:text-blue-400'>About</li>
            <li className='hover:cursor-pointer hover:text-blue-400'>Projects</li>
            <li className='hover:cursor-pointer hover:text-blue-400'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar