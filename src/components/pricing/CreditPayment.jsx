import React from 'react'
import { creditinput } from '../../assets/pricing'

const CreditPayment = () => {
  return (
    <div className='flex flex-col gap-2 w-full'>
<div className='flex items-center  border-[1px] outline-none rounded-lg'>
  <div className='flex items-center justify-center p-4 bg-[#EFEAFF] rounded-tl-[6px] rounded-bl-[6px] h-14'>

  <img src={creditinput} alt="" />
  </div>
  <input type="number" placeholder='Card number' className='p-4 w-full border-none outline-none rounded-lg placeholder:text-[#4b4b4b]' min={0}/>
</div>
<div className='grid grid-cols-2 gap-4'>
  <input type="text" placeholder='First name' className='p-4 w-full border-[1px] outline-none rounded-lg placeholder:text-[#4b4b4b]'/>
  <input type="text" placeholder='Last name' className='p-4 w-full border-[1px] outline-none rounded-lg placeholder:text-[#4b4b4b]'/>
  <input type="number" placeholder='Zip code' className='p-4 w-full border-[1px] outline-none rounded-lg placeholder:text-[#4b4b4b]'/>
  <input type="number" placeholder='cvv' className='p-4 w-full border-[1px] outline-none rounded-lg placeholder:text-[#4b4b4b]'/>

</div>

    </div>
  )
}

export default CreditPayment