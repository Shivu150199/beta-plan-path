import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { footerlogo, googleIcon, signup, eye } from '../../assets/authorization';
import logo from '../../assets/navbar/plan_path_logo.svg'

const SigninOrg = () => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    navigate('/login');
  };

  const handleChange = (e) => {
    console.log('Form data collected');
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <section className='p-4 md:p-1 w-full flex flex-col md:flex-row '>
      <form
        className='p-2 flex justify-center md:flex-[.6] md:h-screen  md:-ml-10 lg:ml-0'
        onSubmit={handleSubmit}
        aria-labelledby="signin-org-form-title"
        role="form"
      >
        <div className='flex flex-col gap-4 md:w-[80%] lg:w-[60%] w-full'>
          <header className='flex flex-col gap-1 mb-6'>
            <h2 id="signin-org-form-title" className='text-2xl font-medium text-[#3F3E3E]'>
              Log into your PlanPaths account
            </h2>
            <p className='text-sm font-medium text-dark_gray'>
              You already have a PlanPaths account, please log in with your existing account information
            </p>
          </header>

          <div className='flex flex-col gap-1 w-full'>
            <label htmlFor="email" className='font-medium text-[16px] text-[#3F3E3E] capitalize'>
              Email
            </label>
            <p className='text-light_gray font-normal text-sm'>akshaysingh@oki.com</p>
          </div>

          <div className='flex flex-col gap-1 w-full'>
            <label htmlFor="password" className='font-medium text-[16px] text-[#3F3E3E] capitalize'>
              Password
            </label>
            <div className='border-[1px] border-gray-300 px-2 py-2 rounded-md flex items-center justify-between'>
              <input
                className='border-none outline-none bg-transparent w-full'
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder='Enter password'
                onChange={handleChange}
                aria-required="true"
                required
              />
              <button
                onClick={togglePasswordVisibility}
                type='button'
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaRegEye /> : <img src={eye} alt="Toggle password visibility" />}
              </button>
            </div>
            <Link to='/forgot-password' className='font-normal text-sm text-primary'>
              Forgot Password?
            </Link>
          </div>

          <div className='w-full grid grid-cols-2 gap-1'>
            <button
              type='submit'
              className='btn bg-light_gray text-white mt-6'
              aria-label="Continue"
            >
              Continue
            </button>
            <button
              type='button'
              className='btn bg-primary text-white mt-6'
              onClick={() => navigate('/')}
              aria-label="Cancel"
            >
              Cancel
            </button>
          </div>

          <p className='text-light_gray text-sm mt-2 font-normal'>
            By clicking “Continue”, you agree to our <Link className='font-medium text-primary underline' to='/terms'>Terms of Service</Link> & Use and acknowledge that you have read our <Link className='font-medium text-primary underline' to='/policy'>Privacy Policy</Link>.
          </p>
          <p className='text-light_gray text-sm my-2'>
            By joining, you agree to your company following your progress and other activity in the learning program.
          </p>
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
            <li><Link className='text-sm font-medium text-dark_violet' to='/aboutus'>About us</Link></li>
            <li><Link className='text-sm font-medium text-dark_violet' to='/policy'>Privacy policy</Link></li>
            <li><Link className='text-sm font-medium text-dark_violet' to='/contactus'>Contact us</Link></li>
            <li><Link className='text-sm font-medium text-dark_violet' to='/terms'>Terms of service & Use</Link></li>
          </ul>
        </nav>
      </footer>
    </section>
  );
};

export default SigninOrg;
