import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import {  signup } from '../../assets/authorization';
import logo from '../../assets/navbar/plan_path_logo.svg'

const SignupOrg = () => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false); // Default error state to false
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation for the URL (you might need to refine this)
        if (!formData.email || !formData.email.includes('.')) {
            setError(true);
            return;
        }
        setError(false);
        navigate('/success');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <section className='p-4 md:p-1 w-full flex flex-col md:flex-row'>
            <form
                className='p-2 pt-16 flex justify-center md:flex-[.6] md:h-screen  md:-ml-10 lg:ml-0'
                onSubmit={handleSubmit}
                aria-labelledby="signup-org-form-title"
                role="form"
            >
                <div className='flex flex-col gap-2 md:w-[80%] lg:w-[60%] w-full'>
                    <header className='flex flex-col gap-1 mb-6'>
                        <h2 id="signup-org-form-title" className='text-2xl font-medium text-[#3F3E3E]'>
                            Sign up with your organization
                        </h2>
                        <p className='text-sm font-medium text-dark_gray'>
                            Create your own learning path
                        </p>
                    </header>
                    <div className='flex flex-col gap-1 w-full'>
                        <label htmlFor="email" className='font-medium text-[16px] text-[#3F3E3E] '>
                            Enter your organization URL
                        </label>
                        <input
                            className={`border-[1px] ${error ? 'border-red-600' : 'border-gray-300'} px-2 py-2 rounded-md`}
                            type="email"
                            id="email"
                            placeholder='(e.g., company.com or company.org)'
                            onChange={handleChange}
                            aria-required="true"
                            aria-invalid={error ? 'true' : 'false'}
                            required
                        />
                        {error && <p className='text-red-600 text-sm mt-1'>Please enter a valid URL.</p>}
                    </div>
                    <button
                        type='submit'
                        className='btn bg-primary text-white mt-6'
                        aria-label="Continue"
                    >
                        Continue
                    </button>
                    <p className='text-center text-light_gray text-sm mt-2'>
                        Back to <Link className='font-medium text-primary underline' to='/register'>Signup</Link>
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
                        <li><Link className='text-sm font-medium text-dark_violet ' to='/aboutus'>About us</Link></li>
                        <li><Link className='text-sm font-medium text-dark_violet ' to='/policy'>Privacy policy</Link></li>
                        <li><Link className='text-sm font-medium text-dark_violet ' to='/contactus'>Contact us</Link></li>
                        <li><Link className='text-sm font-medium text-dark_violet ' to='/terms'>Terms of Service & use</Link></li>
                    </ul>
                </nav>
            </footer>
        </section>
    );
};

export default SignupOrg;
