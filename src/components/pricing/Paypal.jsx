import React from 'react'
import { paypalbtn } from '../../assets/pricing'

const Paypal = () => {
  return (
    <div className='flex flex-col gap-8'>
<input type="tel" placeholder='Phone number (optional)' className='p-4 w-full border-[1px] outline-none rounded-lg placeholder:text-[#4b4b4b]'/>
<p className='text-sm text-[#4b4b4b] font-normal'>This opens a new window for you to connect to your PayPal account. After connecting, you'll come back here to complete your transaction</p>
<div className='flex gap-2 items-center'>
    <button className='px-4 py-2 bg-[#DAF4FF] border-[1px] border-[#009CDA] rounded-md'><img src={paypalbtn} alt="" /></button>
    <button className='px-4 py-1 bg-white text-primary border-[1px] border-primary rounded-md font-medium'>Back</button>
</div>
    </div>
  )
}

export default Paypal