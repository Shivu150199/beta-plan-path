import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthMenu from './AuthMenu'
import MenuProfile from './MenuProfile'
import MenuList, { MenuListBeforeLogin } from './MenuList'

const Menu = ({onClose}) => {
  const [isLogin,setIslogin]=useState(true)//change boolean to check other compenent
  return (
    <div>
      {isLogin?
      <>
      <MenuProfile onClose={onClose}/>
      <MenuList onClose={onClose}/>
      </>
      : 
      <>
      <AuthMenu onClose={onClose}/>
      <MenuListBeforeLogin onClose={onClose}/>
      </>
      }
     
   
     
    </div>
  )
}

export default Menu