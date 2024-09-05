import React from 'react'
import  plan_path_logo from '../../assets/navbar/plan_path_logo.svg'
import  followup from '../../assets/followup.svg'
const FollowupMail = () => {
  return (
    <section className='w-[100%] bg-creambg flex flex-col items-center p-6 gap-8'>
<div>
    <img src={plan_path_logo} alt="" />
</div>

<div className='bg-white border-[1px] border-primary flex flex-col items-center rounded-lg gap-4 max-w-[38rem]'>
    <h1 className='text-[28px] font-bold text-dark_violet p-6'>Placeholder for title</h1>
    <img src={followup} alt="" />
    <div className='flex flex-col gap-4 items-start p-6'>
        <h2 className='text-sm font-bold text-dark_violet'>Hi Akshay</h2>
        <p className='text-sm text-paraColor font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aliquid explicabo quos dolore doloremque incidunt voluptatum dignissimos, aperiam temporibus ipsam.</p>
        <button className='px-4 py-2 bg-primary text-sm font-medium text-white rounded-md hover:bg-violet-500'>
            If CTA required
        </button>
    </div>

    <footer className='bg-[#F6F3FF] w-[100%] p-6 rounded-bl-md rounded-br-md flex flex-col gap-6'>
        <p className='text-sm font-medium'>Please    <a href="" className='text-primary'>contact us</a> with any questions, we’re always happy to help
         
        </p>
        <p className='text-sm font-medium flex flex-col '>
            <span>Cheers,</span>
            <span>The plan path</span>
        </p>
    </footer>
</div>

    </section>
  )
}

export default FollowupMail
