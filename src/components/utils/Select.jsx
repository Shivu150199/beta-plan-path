import { nanoid } from 'nanoid'
import React from 'react'

import { angleDown } from '../../assets/pricing'

const Select = ({label,placeholder,list}) => {
  return (<div className='flex flex-col gap-2 w-full'>
<label htmlFor="" className='text-base font-medium text-dark_gray'>{label}</label>

   <select  className='course-select p-4 select-bordered w-full rounded-[4px] outline-none placeholder:text-placeholder border-[1px] focus:border-primary'>
  <option disabled  selected className='text-placeholder'>{placeholder}</option>
  {list.map((item)=>{
    let id=nanoid()
    return   <option key={id}>{item}</option>
  })}

  {/* <option>Greedo</option> */}
</select>
  </div>
  )
}

export default Select