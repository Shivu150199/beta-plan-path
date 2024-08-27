import React from 'react'
import { faq } from '../../assets/course'

const NoFaq = ({faqValue,faqSet}) => {
  return (
    <div className='flex items-center justify-center p-4 bg-white border-t-[2px]'>

    <div className='flex items-center justify-center flex-col  rounded-md gap-4'>
        <img src={faq} alt="" />
        <h2 className='text-[18px] font-bold text-dark_violet'>No FAQ added</h2>
        <button className='bg-primary py-1 px-4 rounded-md text-white' onClick={()=>faqSet(!faqValue)}>Add FAQ</button>
    </div>
    </div>
  )
}

export default NoFaq