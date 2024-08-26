import React from 'react'
import Navigation from '../../components/Navigation'
import { EmptyCart } from '../../components/cart'

const Cart = () => {
  const navigationList=['Home','My cart']
  return (<section>
    <Navigation list={navigationList}/>

<EmptyCart/>

  </section>
  )
}

export default Cart