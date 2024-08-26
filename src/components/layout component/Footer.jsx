import React from 'react'
import logo from '../../assets/navbar/plan_path_logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[#f3efff] flex flex-col items-center justify-center gap-4 mt-10 p-8 md:flex-row md:bg-[#EEEFFF] md:justify-between md:h-[10rem]'>
    <img 
      src={logo} 
      alt="Footer logo" 
    />
    <ul className='flex flex-col items-center justify-center gap-4 md:flex-row md:gap-12 '>
      <li>
        <Link className='text-sm font-medium text-dark_violet ' to='/aboutus'>
          About us
        </Link>
      </li>
      <li>
        <Link className='text-sm font-medium text-dark_violet ' to='/policy'>
          Privacy policy
        </Link>
      </li>
      <li>
        <Link className='text-sm font-medium text-dark_violet ' to='/contactus'>
          Contact us
        </Link>
      </li>
      <li>
        <Link className='text-sm font-medium text-dark_violet ' to='/terms'>
          Terms of Service & Use
        </Link>
      </li>
    </ul>
  </footer>
  )
}

export default Footer