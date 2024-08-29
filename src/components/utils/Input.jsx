import React from 'react'

const Input = ({label,type,placeholder}) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
    <label htmlFor="" className='text-base font-medium text-dark_gray'>{label}</label>
       <input type={type} className="focus:border-primary p-4 border-[1px] input-bordered w-full rounded-[4px] outline-none placeholder:text-placeholder" placeholder={placeholder}/>
      

      </div>
  )
}

export default Input