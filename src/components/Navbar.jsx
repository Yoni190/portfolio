import React from 'react'

const Navbar = ({ onHomeClick, onAboutClick, onProjectsClick, onContactClick }) => {
  return (
    <div className='sticky top-0 z-50 border py-3 bg-gray-900'>
        <ul className='flex gap-5 justify-center text-white text-xl'>
            <li><button className='hover:cursor-pointer hover:text-blue-400' onClick={onHomeClick}>Home</button></li>
            <li><button className='hover:cursor-pointer hover:text-blue-400' onClick={onAboutClick}>About</button></li>
            <li><button className='hover:cursor-pointer hover:text-blue-400' onClick={onProjectsClick}>Projects</button></li>
            <li><button className='hover:cursor-pointer hover:text-blue-400' onClick={onContactClick}>Contact</button></li>
        </ul>
    </div>
  )
}

export default Navbar