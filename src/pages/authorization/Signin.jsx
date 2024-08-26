import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { eye, facebookIcon, footerlogo, googleIcon, signup } from '../../assets/authorization';
import { Footer } from '../../components/layout component';
import logo from '../../assets/navbar/plan_path_logo.svg'

const Signin = () => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    navigate('/');
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
        aria-labelledby="signin-form-title"
        role="form"
      >
        <div className='flex flex-col gap-4 md:w-[80%] lg:w-[50%] w-full'>
          <header className='flex flex-col gap-1 mb-6'>
            <h2 id="signin-form-title" className='text-2xl font-medium text-[#3F3E3E]'>Welcome back</h2>
            <p className='text-sm font-medium text-dark_gray'>Create your own learning path</p>
          </header>

          <div className='flex flex-col gap-1 w-full'>
            <label htmlFor="email" className='font-medium text-base text-[#3F3E3E] capitalize'>
              Email ID
            </label>
            <input
              className='border-[1px] border-gray-300 px-2 py-2 rounded-md'
              type="email"
              id="email"
              placeholder='Enter your email ID'
              onChange={handleChange}
              aria-required="true"
              required
            />
          </div>

          <div className='flex flex-col gap-1 w-full'>
            <label htmlFor="password" className='font-medium text-base text-[#3F3E3E] capitalize'>
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
              <button onClick={togglePasswordVisibility} type='button' aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? <FaRegEye /> : <img src={eye} alt="Toggle password visibility" />}
              </button>
            </div>
            <Link to='/forgot-password' className='font-normal text-sm text-primary'>
              Forgot password?
            </Link>
          </div>

          <button
            type='submit'
            className='btn bg-primary text-white'
            aria-label="Log in"
          >
            Log in
          </button>

          <div className="divider text-xs text-light_gray">OR</div>
          <div className='flex gap-2 flex-col'>
            <button
              className='flex items-center gap-1 border-[1px] btn transition-all bg-transparent border-slate-200 justify-between text-sm font-medium text-[#515151] capitalize'
              aria-label="Continue with Google"
            >
              <img className='justify-start' src={googleIcon} alt="Google logo" loading='lazy' />
              <span className='text-sm xs:text-xs'>Continue with Google</span><span></span>
            </button>
            <button
              className='flex items-center border-[1px] btn transition-all bg-transparent border-slate-200 justify-between text-sm font-medium text-[#515151] capitalize'
              aria-label="Continue with Facebook"
            >
              <img className='justify-start' src={facebookIcon} alt="Facebook logo" loading='lazy' />
              <span className='text-sm xs:text-xs'>Continue with Facebook</span><span></span>
            </button>
          </div>

          <p className='text-center text-light_gray text-sm mt-2'>
            New to PlanPaths? <Link className='font-medium text-primary underline' to='/register'>Sign up</Link>
          </p>

          <hr className='my-2' />

          <Link to='/signin-organisation' className='text-center text-primary text-sm font-bold underline'>
            Log in with your organisation
          </Link>
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

      <footer className='bg-[#f3efff] flex flex-col items-center justify-center gap-4 mt-10 p-8 w-[100%] md:hidden'>
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
        </nav>
      </footer>
    </section>
  );
};

export default Signin;
