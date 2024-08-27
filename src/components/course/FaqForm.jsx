import { Input } from 'antd'
import React from 'react'

const FaqForm = ({faqListValue,faqListSet}) => {
  return (
    <div className='bg-white p-4 flex gap-4 flex-col lg:w-[70%]'>

<label className='text-[18px] font-medium'>Frequently asked questions</label>
<input type='text' placeholder='Add a question: i.e. Do you translate to english as well?' className='input input-bordered rounded-[4px]  placeholder:text-sm'/>
<textarea placeholder='Add a question: i.e. Do you translate to english as well?' className='input input-bordered h-20 resize-none rounded-[4px] placeholder:text-sm'></textarea>

<div className='flex items-center gap-4 justify-end'>
    <button className='outline-btn'>Cancel</button>
    <button className='primary-btn' onClick={()=>faqListSet(!faqListValue)}>Save</button>
</div>


    </div>
  )
}

export default FaqForm