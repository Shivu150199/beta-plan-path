import React from 'react'
import { emptycart } from '../../assets/cart'
import Navigation from '../../components/Navigation'
import { success } from '../../assets/pricing'
import { Link } from 'react-router-dom'

const SuccessfulSubscribe = () => {
    const navigationList=['Home','Payment','Subscribed']
    return (<section>
      <Navigation list={navigationList}/>
  
      <div className='flex items-center justify-center flex-col gap-4 h-[80vh] md:border-[1px] md:mx-4 md:rounded-lg'>
<img src={success} alt="" />
<h2 className='text-[18px] font-bold  text-success'>Subscription activated</h2>

<p className='text-center text-dark_violet text-sm font-normal w-[90%]'>Congratulations, you have successfully activated premium access to all the feature of the application, enjoy it!</p>

<Link to='/course' className='py-2 px-4 bg-primary hover:bg-violet-500 text-white rounded-lg'>Back to course listing</Link>


    </div>
  
    </section>
    )
}

export default SuccessfulSubscribe