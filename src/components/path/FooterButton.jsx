import React from 'react'
import { pdf, pencil, share } from '../../assets/path'

const FooterButton = () => {
  return (
    <div className='flex items-center justify-between p-2 sticky bottom-0 w-full md:hidden border-t-[1px] z-10 bg-white'>
      <button className='flex flex-col gap-1 items-center justify-center'>
        <img src={pencil} alt="" />
        <span>Edit</span>
      </button>
      <button className='flex flex-col gap-1 items-center justify-center'>
        <img src={share} alt="" />
        <span>Share</span>
      </button>
      <button className='flex flex-col gap-1 items-center justify-center'>
        <img src={pdf} alt="" />
        <span>download</span>
      </button>
    </div>
  )
}

export default FooterButton
