
import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FaRegEye } from "react-icons/fa";

import { Link } from 'react-router-dom'
import {eye,facebookIcon,footerlogo,googleIcon,signup} from '../../assets/authorization'
const EmailSuccess = () => {
  
  return (
    <section className='grid grid-cols-1 p-4 md:p-1 w-full md:grid-cols-2'>
   
  
    <div className=' p-2 flex flex-col items-center mt-14 '>
<div className='flex flex-col w-[60%] gap-2' >
    <h2 className='text-center font-medium text-2xl text-dark_gray'>
    Email has been sent

    </h2>
    <p className='text-sm text-light_gray font-normal text-center'>Please check your email inbox for a password recovery link. Don't forget to check your spam folder.</p>
</div>


<p className='text-sm text-light_gray mt-14'>Back to <Link className='text-primary underline' to='/login'>login</Link> </p>
    </div>
    
       
      <div className='my-6 md:my-0 flex md:justify-end md:items-start justify-center flex-[.4]'>
        <img
          src={signup}
          className='w-full md:w-[25rem]'
          loading='lazy'
          alt="Signup illustration"
        />
      </div>
    
    <footer className='bg-[#f3efff] flex flex-col items-center justify-center gap-4 mt-10 p-8 md:hidden'>
    <img src={footerlogo} alt="" />
    <ul className='flex flex-col items-center justify-center gap-4'>
      <li><Link className='text-sm font-medium text-dark_violet capitalize'>About us</Link></li>
      <li><Link className='text-sm font-medium text-dark_violet capitalize'>Privacy Policy</Link></li>
      <li><Link className='text-sm font-medium text-dark_violet capitalize'> contact us</Link></li>
      <li><Link className='text-sm font-medium text-dark_violet capitalize'>Terms of services & Use</Link></li>
    </ul>
    
    </footer>
       </section>
  )
}

export default EmailSuccess