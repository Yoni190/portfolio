import React from 'react'

const Navbar = ({ onHomeClick, onAboutClick, onProjectsClick, onContactClick }) => {
  return (
    <div className='border py-3 bg-gray-900'>
        <ul className='flex gap-5 justify-center text-white text-xl'>
            <li className='hover:cursor-pointer hover:text-blue-400'><button onClick={onHomeClick}>Home</button></li>
            <li className='hover:cursor-pointer hover:text-blue-400'><button onClick={onAboutClick}>About</button></li>
            <li className='hover:cursor-pointer hover:text-blue-400'><button onClick={onProjectsClick}>Projects</button></li>
            <li className='hover:cursor-pointer hover:text-blue-400'><button onClick={onContactClick}>Contact</button></li>
        </ul>
    </div>
  )
}

export default Navbar