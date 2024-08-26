import React, { useState } from 'react'
import { eye } from '../../assets/authorization';
import Navigation from '../../components/Navigation';
import { Footer } from '../../components/layout component';
import { arrowdown, arrowup, congrats } from '../../assets/myprofile';
import { FaRegEye } from 'react-icons/fa';

const MyProfile = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isOpen,setIsOpen]=useState(null)
    const [isShow,setIsShow]=useState(false)
    let navigationList=['Home','My profile']

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

const handleProfileModal=()=>{
document.getElementById('profile-varify').showModal()
}

const handleIndex=(id)=>{
  setIsOpen(isOpen === id ? null : id);
  setIsShow(!isShow)
}

  return <section className=' flex flex-col gap-0 bg-[#f4f4f4]'>
    <Navigation list={navigationList}/>
<div className='grid gap-4 md:grid-cols-[1fr,2fr] my-2 md:mt-0 px-4'>
<div className='bg-white md:block  p-4 border-[1px] rounded-lg'>
<h2 className='text-xl font-bold text-dark_violet'>My Profile</h2>
<div className='w-full h-full flex flex-col items-center justify-center gap-2'>
    <div className='bg-light_violet rounded-full p-4 w-36 h-36 flex items-center justify-center ' >

<h3 className='font-medium text-8xl text-dark_violet '>A</h3>
    </div>
<span>akshay15696</span>


</div>

</div>
<form action="" className='bg-white flex flex-col gap-4 border-[1px] p-2 rounded-md'>
<h2 className='text-dark_violet font-bold text-xl'>Change password</h2>
<div className='flex flex-col gap-1 md:w-[50%]'>
    <label htmlFor="" className='font-medium text-base text-dark_violet capitalize'>New password</label>
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
</div>
<div className='flex flex-col gap-1 md:w-[50%]'>
    <label htmlFor="" className='font-medium text-base text-dark_violet capitalize'>Re-enter password</label>
    <div className='border-[1px] border-gray-300 px-2 py-2 rounded-md flex items-center justify-between'>
              <input
                className='border-none outline-none bg-transparent w-full'
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder='Enter password'
                onChange={handleChange}
                aria-required="true"
                required
              />
              <button onClick={togglePasswordVisibility} type='button' aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? <FaRegEye /> : <img src={eye} alt="Toggle password visibility" />}
              </button>
            </div>
</div>
<div className='flex  md:justify-end'>
<button
            type='submit'
            className='btn bg-primary text-white '
            aria-label="my profile"
            onClick={handleProfileModal}
          >
            Save changes
          </button>
</div>

</form>

</div>



{/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="profile-varify" className="modal">
  <div className="modal-box p-0 pb-4 rounded-lg flex flex-col justify-between absolute bottom-0 w-[100%] md:relative">
    <h3 className="font-bold text-[18px] p-4 border-b-[1px] text-dark_violet">Lets varify it's you</h3>
   <div className='py-4 flex flex-col gap-2 '>
    <p className='p-4 text-sm font-normal w-[80%] text-dark_gray'>
    Sent you OTP on your mail ID <span>akshay15696@gmail.com</span> Please check your mail and 
    <br />
    copy paste OTP here
    </p>
<div className='px-4 flex flex-col gap-2 pb-10 border-b-[1px]'>
<h4 className='text-dark_violet text-base'>OTP</h4>
<div className='flex gap-2'>
{[...Array(4)].map((_, index) => (
                  // <span contentEditable >1</span>
                  <input type="number" key={index} className='w-10 h-10 border-[1px] border-light_gray rounded text-2xl font-bold flex items-center justify-center pl-2 text-light_gray overflow-hidden no-scrollbar' min={0} max={9} />
                ))}
</div>

</div>


   </div>
    <div className="modal-action mt-0 px-6">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="text-sm font-medium  capitalize mr-6 text-primary ">cancel</button>
        <button className="text-sm font-medium text-white rounded cursor-pointer bg-primary px-4 py-2" onClick={()=>document.getElementById('congrat-modal').showModal()}>Submit</button>
      </form>
    </div>
  </div>
</dialog>

{/*  */}

{/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="congrat-modal" className="modal">
  <div className="modal-box flex flex-col items-center justify-center gap-4 py-10 rounded">
    <img src={congrats} alt="" />
    <h2 className='font-medium text-3xl text-[#2FAF47]'>Congratulation</h2>
    <p className='text-sm text-dark_gray text-center'>Your password has been successfully
    updated</p>
    <div className="modal-action mt-0">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="bg-primary text-white text-sm font-medium px-4 py-2 rounded hover:bg-violet-500">Close</button>
      </form>
    </div>
  </div>
</dialog>



{/* <Footer/> */}
  </section>
  
}

export default MyProfile