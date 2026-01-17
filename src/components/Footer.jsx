import React from 'react'
import GithubImage from '../assets/github.png'
import EmailImage from '../assets/email.png'

const Footer = () => {
  return (
    <div className='border relative px-7 py-10 flex flex-col gap-2 items-center bg-gray-900'>
        <div className='flex gap-4'>
            <a href="https://github.com/Yoni190" target='_blank'><img src={GithubImage} alt="Github" width={40} className='hover:scale-110 transition duration-300' /></a>
            <a href="mailto:yonatanadhanom00@gmail.com" target='_blank'><img src={EmailImage} alt="Email" width={40} className='hover:scale-110 transition duration-300' /></a>
        </div>
        <p className='text-white text-sm'>Yonatan Adhanom @ 2026</p>
    </div>
  )
}

export default Footer