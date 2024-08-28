import React, { useState } from 'react'
import search from '../../assets/search.svg'
import { Link } from 'react-router-dom'
import { Button, Drawer, Radio, Space } from 'antd';
import logo from '../../assets/navbar/plan_path_logo.svg'
import cart from '../../assets/navbar/cart.svg'
import select from '../../assets/navbar/select.svg'
import { Menu } from '../menu';
import AuthButton from './AuthButton';
import Profile from './Profile&List';
// import { arrowDowns } from '../../assets/course';
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const [isLoggedIn,setIsLoggedIn]=useState(true) //show component according to authrization
 
  const showDrawerMenu = () => {
    setOpenMenu(true);
  };
  const onCloseMenu = () => {
    setOpenMenu(false);
  };
 
 
  return (
<div className="navbar px-4 sticky top-0 bg-white shadow-md z-30 flex gap-4 items-center justify-between">
 <div className='flex items-center'>
 <div className=" md:hidden">
    <button className="btn btn-square btn-ghost" onClick={showDrawerMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-7 w-7 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
  <Link className="" to='/'>
  <img src={logo} alt="" />
  </Link>
 </div>


    <div className=' bg-[#f4f4f4] gap-2 items-center rounded-[8px] px-4 pl-2 w-96 hidden lg:flex'>
      <div className='flex items-center justify-center py-2 px-4 border-r-[2px] border-light_gray'>
      <select name="" id="" className='bg-transparent  outline-none' style={{background:`url(${select})`,backgroundRepeat:'no-repeat',backgroundPosition:'calc(100% - 10px) center',right:'10px'}}>
        <option value="">All</option>
        <option value="">Math</option>
        <option value="">English</option>
        <option value="">Science</option>
      </select>
      </div>
    
    <input type="search" placeholder='Search course' className='bg-transparent outline-none w-full pl-2' />
    <button>
    <img src={search} alt="" className='w-[28px] h-[28px]'/>

    </button>
    </div>

  <div className="">
    <Link to='/cart' className='flex  relative p-2 md:hidden'>
        <img src={cart} alt="" />
        <span className='flex items-center justify-center text-white w-6 h-6 rounded-full absolute top-[-8px] right-[-8px] bg-red-600 border-2 border-white'>0</span>
    </Link>
<div className='items-center justify-center gap-8 hidden md:flex'>
    <ul className='flex gap-8 items-center'>
        <li className='font-medium text-sm'><Link to="/course">Courses</Link></li>
        <li className='font-medium text-sm'><Link to="/pricing">Pricing</Link></li>
        <li>
        <Link to='/cart' className='flex relative p-2'>
        <img src={cart} alt="cart" />
        <span className='flex items-center justify-center text-white w-6 h-6 rounded-full absolute top-[-8px] right-[-8px] bg-red-600 border-2 border-white'>0</span>
    </Link>
        </li>
      
    </ul>
{isLoggedIn?<Profile/>:<AuthButton/>}
 
</div>


  </div>
  <Drawer
        width='100%'
        placement='left'
        closable={false}
       
        open={openMenu}
        className='p-0 md:hidden'
      
      >
       <Menu  onClose={onCloseMenu}/>
      </Drawer>
 
</div>
  )
}

export default Navbar