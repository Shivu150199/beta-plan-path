import React from 'react'

const Applepay = () => {
  return (
    <div className='flex flex-col gap-2 w-full'>

<div className='grid grid-cols-2 gap-4'>
      <input type="text" placeholder='First name' className='p-4 w-full border-[1px] outline-none rounded-lg placeholder:text-[#4b4b4b]'/>
      <input type="text" placeholder='Last name' className='p-4 w-full border-[1px] outline-none rounded-lg placeholder:text-[#4b4b4b]'/>
      <input type="number" placeholder='Zip code' className='p-4 w-full border-[1px] outline-none rounded-lg placeholder:text-[#4b4b4b]'/>
      <input type="number" placeholder='Country/Region' className='p-4 w-full border-[1px] outline-none rounded-lg placeholder:text-[#4b4b4b]'/>
    
    </div>



    <div className='flex items-center  border-[1px] outline-none rounded-lg'>
  
      <input type="tel" placeholder='Phone number (optional)' className='p-4 w-full border-none outline-none rounded-lg placeholder:text-[#4b4b4b]' min={0}/>
    </div>
  
    
        </div>
  )
}

export default Applepay