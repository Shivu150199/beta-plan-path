import React from 'react'
import { Link } from 'react-router-dom'
import close from '../../assets/close.svg'
const AuthMenu = ({onClose}) => {
  return (
    <div className='bg-[#F3EEFF] p-6  flex items-center justify-between sticky top-0'>
       <div className='flex gap-4' onClick={onClose}>
    <Link  to='/login' className="bg-primary border-primary border-[1px] px-2 py-1 rounded font-medium text-sm text-white capitalize hover:text-white">Sign in </Link>
    <Link  to='/register' className="border-primary border-[1px] px-2 py-1 rounded font-medium text-primary capitalize text-sm hover:text-primary">Sign up</Link>
    </div>
    <button onClick={onClose}><img src={close} alt="" /></button>
      
    </div>
  )
}

export default AuthMenu