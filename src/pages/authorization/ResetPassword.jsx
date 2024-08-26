import React, { useState } from 'react';

import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import {  signup, eye } from '../../assets/authorization';
import logo from '../../assets/navbar/plan_path_logo.svg'

const ResetPassword = () => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
    navigate('/login');
  };

  const handleChange = (e) => {
    console.log('form data collected');
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const showPass = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <section className='grid grid-cols-1 p-4 md:p-1 w-full md:grid-cols-2'>
      <form
        className='p-2 flex justify-center mt-10'
        onSubmit={handleSubmit}
        aria-labelledby="reset-password-title"
        role="form"
      >
        <div className='flex flex-col gap-4 md:w-[80%] lg:w-[60%] w-full'>
          <header className='flex flex-col gap-1 mb-6'>
            <h2 id="reset-password-title" className='text-2xl font-medium text-[#3F3E3E]'>Change Password</h2>
            <p className='text-sm font-medium text-dark_gray'>Create your own learning path</p>
          </header>

          <div className='flex flex-col gap-1 w-full'>
            <label htmlFor="new-password" className='font-medium text-[16px] text-[#3F3E3E] capitalize'>
              New Password
            </label>
            <div className='border-[1px] border-gray-300 px-2 py-2 rounded-md flex items-center justify-between'>
              <input
                className='border-none outline-none bg-transparent w-full'
                type={showPassword ? "text" : "password"}
                id="new-password"
                placeholder='Create password'
                onChange={handleChange}
                aria-required="true"
                required
              />
              <button onClick={showPass} type='button' aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? <FaRegEye /> : <img src={eye} alt="Toggle password visibility" />}
              </button>
            </div>
            <span className='text-sm font-normal text-dark_gray'>Between 8 and 16 characters</span>
          </div>

          <div className='flex flex-col gap-1 w-full'>
            <label htmlFor="confirm-password" className='font-medium text-[16px] text-[#3F3E3E] capitalize'>
              Re-enter Password
            </label>
            <div className='border-[1px] border-gray-300 px-2 py-2 rounded-md flex items-center justify-between'>
              <input
                className='border-none outline-none bg-transparent w-full'
                type={showPassword ? "text" : "password"}
                id="confirm-password"
                placeholder='Re-enter password'
                onChange={handleChange}
                aria-required="true"
                required
              />
              <button onClick={showPass} type='button' aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? <FaRegEye /> : <img src={eye} alt="Toggle password visibility" />}
              </button>
            </div>
          </div>

          <button
            type='submit'
            className='btn bg-light_gray text-white mt-6'
            aria-label="Update password"
          >
            Update password
          </button>
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
        <img src={logo} alt="Footer logo" />
        <nav aria-label="Footer navigation">
          <ul className='flex flex-col items-center justify-center gap-4'>
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
              <Link className='text-sm font-medium text-dark_violet e' to='/contactus'>
                Contact us
              </Link>
            </li>
            <li>
              <Link className='text-sm font-medium text-dark_violet ' to='/terms'>
                Terms of service & Use
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </section>
  );
};

export default ResetPassword;
