import React from 'react'
import Navigation from '../../components/Navigation'
import { EmptyCart } from '../../components/cart'
import { EmptyPath } from '../../components/path'

const Path = () => {
  const navigationList=['Home','My path']
  return (<section>
    <Navigation list={navigationList}/>

<EmptyPath/>

  </section>
  )
}

export default Path