import React from 'react'
import { Link } from 'react-router-dom'

const AuthButton = () => {
  return (
    <div className='flex items-start justify-center gap-4'>
    <Link to='/login' className="border-primary border-[1px] px-2 py-1 rounded font-medium text-primary  text-sm">Sign in </Link>
    <Link to='/register' className="bg-primary border-primary border-[1px] px-2 py-1 rounded font-medium text-sm text-white  hidden md:block">Sign up</Link>
    </div>
  )
}

export default AuthButton