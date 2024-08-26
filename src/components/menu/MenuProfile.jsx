import React from 'react'
import close from '../../assets/close.svg'

const MenuProfile = ({onClose}) => {
  return (
    <div className='bg-[#F3EEFF] p-4 flex justify-between  items-start sticky top-0'>
<div className='flex items-center justify-center flex-col gap-4 w-full'>
<div className=' bg-[#ECE4FF] rounded-full  w-20 h-20 flex items-center justify-center'>
    <h1 className='text-6xl text-dark_violet font-bold'>A</h1>
</div>
<p className='text-[1.1rem] text-dark_violet'>akshay15696</p>
<button className='px-2 py-1 rounded-md border-[1px] text-primary bg-white border-primary font-medium text-xs'>Edit</button>
</div>
<button onClick={onClose}><img src={close} alt="" className='justify-self-start' /></button>
    </div>
  )
}

export default MenuProfile