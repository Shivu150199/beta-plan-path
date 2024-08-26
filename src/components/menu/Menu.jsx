import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthMenu from './AuthMenu'
import MenuProfile from './MenuProfile'
import MenuList from './MenuList'

const Menu = ({onClose}) => {
  const [isLogin,setIslogin]=useState(true)
  return (
    <div>
      {isLogin?  <MenuProfile onClose={onClose}/>: <AuthMenu onClose={onClose}/>}
     
    
      <MenuList onClose={onClose}/>
    </div>
  )
}

export default Menu