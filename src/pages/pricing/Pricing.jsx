import React from 'react'
import Navigation from '../../components/Navigation'
import { basic, check, enterprise, pro, sales, wrong } from '../../assets/pricing'
import { Link } from 'react-router-dom'

const Pricing = () => {
    const navigationList=['Home','Pricing']
  return (
   <section className='bg-[#fafafa] w-[100%] p-4'>
<Navigation list={navigationList}/>
<div>
<h2 className='text-center text-dark_violet text-xl font-bold md:text-2xl md:w-[70%] md:m-auto'>Want to create smart course selections for your career - pick a subscription plan</h2>

<div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 md:p-4 gap-10 mt-16'>

<div className='relative border-[1px] border-primary py-4 flex flex-col items-start rounded-lg shadow-md bg-white '>
    <div className='flex-1 flex flex-col justify-between items-start'>
    <img src={basic} alt="" className='p-4'/>
   <div className='border-[1px] px-4 py-1 border-primary text-[1.5rem] font-normal border-l-0
     bg-light_violet rounded-tr-3xl rounded-br-3xl'>Basic plan</div>
   <p className='p-4 text-sm font-normal text-dark_violet'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
   <div className='p-4 flex flex-col gap-1'>
    <h2 className='font-bold text-dark_violet text-5xl'>$20</h2>
    <p className='text-[1rem] font-medium'>per user/month billed annually</p>
   </div>
   <div className='p-4 w-[100%] border-b-[1px] flex'>

<Link to='/payment' className='w-[100%] py-2 bg-primary rounded-3xl text-white font-medium text-base flex items-center justify-center'>Get started</Link>
</div>
    </div>

  
   <ul className='flex flex-col w-full mt-6 flex-1'>
    <li className='flex items-center gap-4 px-4 py-4 border-b-[1px] w-full'>
        <img src={check} alt="" />
        <span className='text-[#4B4B4B] text-sm font-normal'>create paths</span>
    </li>
    <li className='flex items-center gap-4 px-4 py-4 border-b-[1px] w-full'>
        <img src={check} alt="" />
        <span className='text-[#4B4B4B] text-sm font-normal'>Compare courses</span>
    </li>
    <li className='flex items-center gap-4 px-4 py-4 border-b-[1px] w-full'>
        <img src={check} alt="" />
        <span className='text-[#4B4B4B] text-sm font-normal'>Email support</span>
    </li>
    <li className='flex items-center gap-4 px-4 py-4 border-b-[1px] w-full'>
        <img src={wrong} alt="" />
        <span className='text-[#4B4B4B] text-sm font-normal'>Canned paths</span>
    </li>
    <li className='flex items-center gap-4 px-4 py-4 border-b-[1px] w-full'>
        <img src={wrong} alt="" />
        <span className='text-[#4B4B4B] text-sm font-normal'>create paths</span>
    </li>
  
    <li className='flex items-center gap-4 p-4 border-b-[1px] w-full'>
        <img src={wrong} alt="" />
        <span className='text-[#4B4B4B] text-sm font-normal'>Community access</span>
    </li>
  
   </ul>
</div>
{/*  */}

<div className='relative border-[1px] border-primary py-4 flex flex-col items-center  rounded-lg shadow-md bg-white before:content-["Recommended"] before:absolute before:-top-[37px] before:bg-dark_violet before:px-10 before:py-2 before:text-white before:text-sm before:rounded-tr-2xl before:rounded-tl-2xl'>

<div className='flex-1 flex flex-col justify-between items-start w-full'>

<img src={pro} alt="" className='p-4'/>
   <div className='border-[1px] px-4 py-1 border-primary text-[1.5rem] font-normal border-l-0
     bg-light_violet rounded-tr-3xl rounded-br-3xl'>Pro plan</div>
   <p className='p-4 text-sm font-normal text-dark_violet'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
   <div className='p-4 flex flex-col gap-1'>
    <h2 className='font-bold text-dark_violet text-5xl'>$89</h2>
    <p className='text-[1rem] font-medium'>per user/month billed annually</p>
   </div>
   <div className='p-4 w-[100%] border-b-[1px] flex'>

   <Link to='/payment' className='w-[100%] py-2 bg-primary rounded-3xl text-white font-medium text-base flex items-center justify-center'>Get started</Link>
   </div>
</div>



  
   <ul className='flex flex-col w-full mt-6 '>
    <li className='flex items-center gap-4 px-4 py-4 border-b-[1px] w-full'>
        <img src={check} alt="" />
        <span className='text-[#4B4B4B] text-sm font-normal'>create paths</span>
    </li>
    <li className='flex items-center gap-4 px-4 py-4 border-b-[1px] w-full'>
        <img src={check} alt="" />
        <span className='text-[#4B4B4B] text-sm font-normal'>Compare courses</span>
    </li>
    <li className='flex items-center gap-4 px-4 py-4 border-b-[1px] w-full'>
        <img src={check} alt="" />
        <span className='text-[#4B4B4B] text-sm font-normal'>Email support</span>
    </li>
    <li className='flex items-center gap-4 px-4 py-4 border-b-[1px] w-full'>
        <img src={wrong} alt="" />
        <span className='text-[#4B4B4B] text-sm font-normal'>Canned paths</span>
    </li>
    <li className='flex items-center gap-4 px-4 py-4 border-b-[1px] w-full'>
        <img src={wrong} alt="" />
        <span className='text-[#4B4B4B] text-sm font-normal'>create paths</span>
    </li>
  
    <li className='flex items-center gap-4 p-4 border-b-[1px] w-full'>
        <img src={wrong} alt="" />
        <span className='text-[#4B4B4B] text-sm font-normal'>Community access</span>
    </li>
  
   </ul>
</div>

{/*  */}

<div className='border-[1px] border-primary py-4 flex flex-col items-start rounded-lg shadow-md bg-white'>

<div className='flex-1 flex flex-col justify-between items-start'>

<img src={enterprise} alt="" className='p-4'/>
   <div className='border-[1px] px-4 py-1 border-primary text-[1.5rem] font-normal border-l-0
     bg-light_violet rounded-tr-3xl rounded-br-3xl'>Enterprise</div>
   <p className='p-4 text-sm font-normal text-dark_violet'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
   {/* <div className='p-4 flex flex-col gap-1'>
    <h2 className='font-bold text-dark_violet text-5xl'>$20</h2>
    <p className='text-[1rem] font-medium'>per user/month billed annually</p>
   </div> */}
   <p className='font-medium p-4 text-dark_violet text-[18px]'>Lorem,elit. Assumenda Assumenda quo esse saepe explicabo laboriosam nemo.</p>
   <div className='p-4 w-[100%] border-b-[1px]'>

   <button className='w-full py-2 bg-white rounded-3xl text-primary font-medium text-base flex items-center justify-center gap-2 border-[1px] border-primary'>
      <img src={sales} alt="" />
      Contact sales</button>
   </div>
</div>

  
  
   <ul className='flex flex-col w-full mt-6'>
    <li className='flex items-center gap-4 px-4 py-4 border-b-[1px] w-full'>
        <img src={check} alt="" />
        <span className='text-[#4B4B4B] text-sm font-normal'>create paths</span>
    </li>
    <li className='flex items-center gap-4 px-4 py-4 border-b-[1px] w-full'>
        <img src={check} alt="" />
        <span className='text-[#4B4B4B] text-sm font-normal'>Compare courses</span>
    </li>
    <li className='flex items-center gap-4 px-4 py-4 border-b-[1px] w-full'>
        <img src={check} alt="" />
        <span className='text-[#4B4B4B] text-sm font-normal'>Email support</span>
    </li>
    <li className='flex items-center gap-4 px-4 py-4 border-b-[1px] w-full'>
        <img src={wrong} alt="" />
        <span className='text-[#4B4B4B] text-sm font-normal'>Canned paths</span>
    </li>
    <li className='flex items-center gap-4 px-4 py-4 border-b-[1px] w-full'>
        <img src={wrong} alt="" />
        <span className='text-[#4B4B4B] text-sm font-normal'>create paths</span>
    </li>
  
    <li className='flex items-center gap-4 p-4 border-b-[1px] w-full'>
        <img src={wrong} alt="" />
        <span className='text-[#4B4B4B] text-sm font-normal'>Community access</span>
    </li>
  
   </ul>
</div>


</div>


</div>

   </section>
  )
}

export default Pricing