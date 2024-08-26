
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {eye,facebookIcon,footerlogo,googleIcon,signup} from '../../assets/authorization'
import logo from '../../assets/navbar/plan_path_logo.svg'
const ForgotPassword = () => {
  const navigate=useNavigate()
    const [formData,setFormData]=useState(null)
    const [showPassword,setShowPassword]=useState(false)
    const handleSubmit=(e)=>{
      console.log('form sumitted')
      e.preventDefault()
      navigate('/success')
    }
    const handleChange=(e)=>{
  console.log('form data collected')
  setFormData({...formData,[e.target.id]:e.target.value})
    }

  return (
    <section className='grid grid-cols-1 p-4 md:p-1 w-full md:grid-cols-2'>
    <form 
      className='p-2 flex justify-center mt-10' 
      onSubmit={handleSubmit}
      aria-labelledby="forgot-password-title"
    >
      <div className='flex flex-col gap-2 md:w-4/5 lg:w-3/5 w-full'>
        <header className='flex flex-col gap-1 mb-6'>
          <h2 id="forgot-password-title" className='text-2xl font-medium text-[#3F3E3E]'>Forgot password</h2>
          <p className='text-sm font-medium text-[#3F3E3E] w-9/10'>
            Enter the email address you use on PlanPaths. We'll send you a link to reset your password.
          </p>
        </header>
        
        <div className='flex flex-col gap-1 w-full'>
          <label htmlFor="email" className='font-medium text-[16px] text-[#3F3E3E] capitalize'>
            Email ID
          </label>
          <input 
            className='border-[1px] border-gray-300 px-2 py-2 rounded-md outline-none' 
            type="email" 
            id="email" 
            placeholder='Enter your email ID' 
            onChange={handleChange} 
            aria-required="true"
            required
          />
        </div>
        
        <button 
          type="submit" 
          className='btn bg-primary text-white mt-6' 
          aria-label="Submit form to reset password"
        >
          Submit
        </button>

        {/* Uncomment if needed */}
        {/* <p>Back to <Link to=''>Login</Link></p> */}
      </div>
    </form>
    
    <div className='my-6 md:my-0 flex md:justify-end md:items-start justify-center flex-[.4]'>
        <img
          src={signup}
          className='w-full md:w-[30rem] md:hidden' 
          loading='lazy'
          alt="Signup illustration"
        />
      </div>

      <img
          src={signup}
          className='hidden md:block h-screen md:fixed md:right-0'
          loading='lazy'
          alt="Signup illustration"
        /> 
    
    <footer className='bg-[#f3efff] flex flex-col items-center justify-center gap-4 mt-10 p-8 md:hidden'>
      <img 
        src={logo} 
        alt="Footer logo" 
      />
      <ul className='flex flex-col items-center justify-center gap-4'>
        <li>
          <Link className='text-sm font-medium text-dark_violet ' to='/aboutus'>
            About Us
          </Link>
        </li>
        <li>
          <Link className='text-sm font-medium text-dark_violet ' to='/policy'>
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link className='text-sm font-medium text-dark_violet ' to='/contactus'>
            Contact Us
          </Link>
        </li>
        <li>
          <Link className='text-sm font-medium text-dark_violet ' to='/terms'>
            Terms of Service & Use
          </Link>
        </li>
      </ul>
    </footer>
  </section>
  )
}

export default ForgotPassword