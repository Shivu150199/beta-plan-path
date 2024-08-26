import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { eye, facebookIcon, footerlogo, googleIcon, signup } from '../../assets/authorization';
import logo from '../../assets/navbar/plan_path_logo.svg'
const Signup = () => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
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
    <section className='p-4 md:p-1 w-full flex flex-col md:flex-row'>
      <form
        className='p-2 flex justify-center md:flex-[.6] md:h-screen  md:-ml-10 lg:ml-0'
        onSubmit={handleSubmit}
        aria-labelledby="signup-form-title"
        role="form"
      >
        <div className='flex flex-col gap-2 md:w-[60%] lg:w-[50%]'>
          <header className='flex flex-col gap-1 mb-6'>
            <h2 id="signup-form-title" className='text-2xl font-medium text-[#3F3E3E]'>Sign up</h2>
            <p className='text-sm font-medium text-dark_gray'>Create your own learning path</p>
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
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaRegEye /> : <img src={eye} alt="Toggle password visibility" />}
              </button>
            </div>
            <Link to='/forgot-password' className='font-normal text-sm text-primary'>
              Forgot password?
            </Link>
          </div>

          <div className='flex flex-col gap-1 w-full'>
            <label htmlFor="confirmPassword" className='font-medium text-[16px] text-[#3F3E3E] capitalize'>
              Re-enter password
            </label>
            <div className='border-[1px] border-gray-300 px-2 py-2 rounded-md flex items-center justify-between'>
              <input
                className='w-full border-none bg-transparent outline-none'
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder='Re-enter password'
                onChange={handleChange}
                aria-required="true"
                required
              />
              <button
                onClick={togglePasswordVisibility}
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaRegEye /> : <img src={eye} alt="Toggle password visibility" />}
              </button>
            </div>
            <span className='text-sm font-normal text-dark_gray'>Between 8 and 16 characters</span>
          </div>

          <button
            type='submit'
            className='btn bg-primary text-white'
            aria-label="Join for free"
          >
            Join for Free
          </button>

          <p className='text-xs text-light_gray text-center mt-2'>
            By clicking “Join for free”, you agree to our <Link className='font-medium text-primary underline' to='/terms'>Terms of Service</Link> & Use and acknowledge that you have read our <Link className='font-medium text-primary underline' to='/policy'>Privacy Policy</Link>.
          </p>

          <div className="divider text-xs text-light_gray">OR</div>

          <div className='flex gap-2 flex-col'>
            <button
              className='flex items-center gap-1 border-[1px] btn transition-all bg-transparent border-slate-200 justify-between text-sm font-medium text-[#515151] capitalize'
              aria-label="Continue with Google"
            >
              <img className='justify-start' src={googleIcon} alt="Google logo" loading='lazy' />
              <span>Continue with Google</span><span></span>
            </button>
            <button
              className='flex items-center gap-1 border-[1px] btn transition-all bg-transparent border-slate-200 justify-between text-sm font-medium text-[#515151] capitalize'
              aria-label="Continue with Facebook"
            >
              <img className='justify-start' src={facebookIcon} alt="Facebook logo" loading='lazy' />
              <span>Continue with Facebook</span><span></span>
            </button>
          </div>

          <p className='text-center text-light_gray text-sm mt-2'>
            Already on PlanPaths? <Link className='font-medium text-primary underline' to='/login'>Login</Link>
          </p>

          <hr className='my-2' />

          <Link
            to='/signup-organisation'
            className='text-center text-primary text-sm font-bold underline'
          >
            Sign up with your organisation
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

      <footer className='bg-[#f3efff] flex flex-col items-center justify-center gap-4 mt-10 p-8 md:hidden'>
        <img src={logo} alt="Footer logo" />
        <nav aria-label="Footer navigation">
          <ul className='flex flex-col items-center justify-center gap-4'>
            <li>
              <Link className='text-sm font-medium text-dark_violet capitalize' to='/aboutus'>
                About us
              </Link>
            </li>
            <li>
              <Link className='text-sm font-medium text-dark_violet capitalize' to='/policy'>
                Privacy policy
              </Link>
            </li>
            <li>
              <Link className='text-sm font-medium text-dark_violet capitalize' to='/contactus'>
                Contact us
              </Link>
            </li>
            <li>
              <Link className='text-sm font-medium text-dark_violet capitalize' to='/terms'>
                Terms of service & Use
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </section>
  );
};

export default Signup;
