import React from 'react'
import { clock, heroBg, location, mail, phone } from '../../assets/contact-us'
import { Footer } from '../../components/layout component'

const Contactus = () => {
  return (
    <section >
<div className='flex items-center justify-center flex-col gap-4 relative w-[100%] h-[20rem] bg-cover bg-center before:absolute before:inset-0
            before:block
            before:bg-[#262134]
           before:h-[100%]
           before:overflow-hidden
            before:opacity-80
            before:z-[5]' style={{backgroundImage:`url(${heroBg})`}}>

<h2 className='text-2xl md:text-4xl font-bold text-white text-center z-20'>Contact Us</h2>

<p className='text-sm  md:text-xl text-center text-white w-[80%] lg:w-[50%] z-20'>Have questions? The quickest way to get in touch with us is using the contact form below.</p>


</div>

<div className='grid grid-cols-1 md:grid-cols-2 mt-10'>
  <div className='flex p-4 justify-center'>
  <div className=' flex flex-col gap-4 w-[100%] md:w-[80%]'>


<div className='flex flex-col gap-2'>
    <h2 className='font-bold text-xl text-dark_gray'>Need help ?</h2>
    <p className='text-sm font-normal text-light_gray'>If you want to reach out to us, use the contact information below to reach out to us.</p>
</div>
<ul className='flex flex-col gap-4'>
<li className='bg-[#EFEAFF] flex rounded-md items-center gap-2 w-[70%] xs:w-[100%] overflow-hidden'><img className='bg-primary w-[2.5rem] h-[2.5rem] p-2 flex items-center justify-center rounded-md' src={mail} alt="" /><a href="mailto:Hello@olanPath.dev" className='text-sm font-medium'>Hello@planPath.dev</a></li>
<li className='bg-[#EFEAFF] flex rounded-md items-center gap-2 w-[70%] xs:w-[100%]'><img className='bg-primary w-[2.5rem] h-[2.5rem] p-2 flex items-center justify-center rounded-md' src={phone} alt="" /><a href="tel:+49 (800) 335 35 35" className='text-sm font-medium'>+49 (800) 335 35 35</a></li>
<li className='bg-[#EFEAFF] flex rounded-md items-center gap-2 w-[70%] xs:w-[100%]'><img className='bg-primary w-[2.5rem] h-[2.5rem] p-2 flex items-center justify-center rounded-md' src={location} alt="" /><a href="" className='text-sm font-medium'>844 nowhere land, Bagru</a></li>
<li className='bg-[#EFEAFF] flex rounded-md items-center gap-2 w-[70%] xs:w-[100%]'><img className='bg-primary w-[2.5rem] h-[2.5rem] p-2 flex items-center justify-center rounded-md' src={clock} alt="" /><a href="" className='text-sm font-medium'>Expect answers at 9 a.m. - 5 p.m.</a></li>

</ul>

</div>
  </div>


<div className='p-4 flex items-center justify-center'>
<form action="" className='w-[100%] md:w-[80%] lg:w-[60%] flex flex-col gap-4'>

<div className='flex flex-col gap-2'>
  <label htmlFor="" className='text-base font-medium text-dark_gray'>Email</label>
  <input type="email" placeholder='Enter your email' className='border-[2px] p-2 rounded-md outline-none placeholder:text-sm placeholder:font-normal placeholder:text-placeholder'/>
</div>
<div className='flex flex-col gap-2'>
  <label htmlFor="" className='text-base font-medium text-dark_gray'>Subject</label>
  <input type="email" placeholder='Enter your subject' className='border-[2px] p-2 rounded-md outline-none placeholder:text-sm placeholder:font-normal placeholder:text-placeholder'/>
</div>

<div className='flex flex-col gap-2'>
  <label htmlFor="" className='text-base font-medium text-dark_gray'>Message</label>
  <textarea name="" id="" placeholder='Please share your issue' className='border-[2px] p-2 rounded-md outline-none resize-none placeholder:text-sm placeholder:font-normal placeholder:text-placeholder' rows={5}></textarea>
</div>
<div className='flex'>

<button className='justify-start bg-primary text-white text-sm font-medium px-4 py-2 rounded-md'>Send my message</button>
</div>
</form>
</div>

</div>

<Footer/>


    </section>
  )
}

export default Contactus