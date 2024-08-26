import React, { useState } from 'react'
import { arrowdown } from '../../assets/navbar'
import { navMenulist } from '../../data'
import { Link } from 'react-router-dom'
import { logout } from '../../assets/menu'

const Profile = () => {
  const [showDropdown,setShowDropDown]=useState(false)
  return (<>
<div className='flex items-center gap-2'>
<h2 className='w-8 h-8 bg-dark_violet text-xl font-medium flex items-center justify-center text-white rounded-full '>A</h2>
<button className='flex items-center gap-2' onClick={()=>setShowDropDown(!showDropdown)}>
  <span className='text-sm text-dark_violet font-medium'>akshay15696</span>
  <img src={arrowdown} alt="" />
</button>

</div>

{showDropdown&&<ul className='fixed top-14 right-5 bg-white rounded-md shadow-lg'>
{navMenulist.map((item)=>{
      return <Link className='flex px-4 py-2 items-center gap-4' to={item.goto} key={item.id} onClick={()=>setShowDropDown(!showDropdown)}>
      <img src={item.icon} alt={item.title} />
      <span className='text-sm text-dark_violet'>{item.title}</span>
  </Link>
    })}
        <button className='flex px-4 py-2 items-center gap-4' onClick={()=>setShowDropDown(!showDropdown)}>
      <img src={logout} alt='log out' />
      <span className='text-sm text-dark_violet'>Log out</span>
  </button>
</ul>}

  </>
  )
}

export default Profile