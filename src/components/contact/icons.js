import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
const Icons = () => {
  return (
    <div className='flex justify-center space-x-10'>
        <a href='https://www.linkedin.com/in/bhushan-joshi-404/' target="_blank" rel='noopener noreferrer'><FaLinkedin className='text-white text-2xl hover:text-[#0a66c2]'/></a>
        <a href='https://twitter.com/_bhushan_joshi'  target="_blank" rel='noopener noreferrer'><FaTwitter className='text-white text-2xl hover:text-[#1da1f2]'/></a>
        <a href='https://github.com/Bhushan-joshi' target="_blank" rel='noopener noreferrer'><FaGithub className='text-white text-2xl hover:text-gray-600'/></a>
    </div>
  )
}

export default Icons