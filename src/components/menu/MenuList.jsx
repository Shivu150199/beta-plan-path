import React from 'react'
import { about, academic, cart, logout, path, phone, policy, pricing, terms, wishlist } from '../../assets/menu'
import { Link } from 'react-router-dom'

const menulist=[
  {
    id:1,
    icon:academic,
    title:"Course",
    goto:'/course'
  },
  {
    id:2,
    icon:pricing,
    title:"Pricing",
    goto:'/pricing'
  },
  {
    id:3,
    icon:path,
    title:"My Path",
    goto:'/my-path'
  },
  {
    id:4,
    icon:cart,
    title:"My Cart",
    goto:'/cart'
  },
  {
    id:5,
    icon:wishlist,
    title:"Wish List",
    goto:'/wishlist'
  },
  {
    id:6,
    icon:about,
    title:"About us",
    goto:'/aboutus'
  },
  {
    id:7,
    icon:phone,
    title:"Contact us",
    goto:'/contactus'
  },
  {
    id:8,
    icon:policy,
    title:"Privacy policy",
    goto:'/policy'
  },
  {
    id:9,
    icon:terms,
    title:"Terms of service & Use",
    goto:'/terms'
  },

]


const MenuList = ({onClose}) => {
  return (
   <ul onClick={onClose} className='flex flex-col'>
    {menulist.map((item)=>{
      return <Link className='flex px-4 py-4 items-center gap-4' to={item.goto} key={item.id}>
      <img src={item.icon} alt={item.title} />
      <span className='text-sm text-dark_violet'>{item.title}</span>
  </Link>
    })}
    <button className='flex px-4 py-4 items-center gap-4'>
      <img src={logout} alt='log out' />
      <span className='text-sm text-dark_violet'>Log out</span>
  </button>


   </ul>
  )
}

export default MenuList