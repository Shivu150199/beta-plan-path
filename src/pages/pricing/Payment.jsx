import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import { applepay, credit, paypal, visa } from '../../assets/pricing'
import { Applepay, CreditPayment, Paypal } from '../../components/pricing'
import { Link } from 'react-router-dom'

const Payment = () => {
const [selectedMethod,setSelectedMethod]=useState(null)

const handleSelectedMethod=(select)=>{
  setSelectedMethod(select)
}


  const navigationList=['Home',"payment"]
  return (
<section className='flex justify-center flex-col w-[100%]'>
  <Navigation list={navigationList}/>
  <main>
  <h2 className='md:hidden text-xl font-bold text-dark_violet text-center w-[80%] m-auto my-6'>Enter payment info to start your free trial</h2>

<div className='flex flex-col-reverse md:flex-row  border-[1px] mx-4 rounded-lg shadow-sm md:p-4'>
  <div className='md:flex-[.6] lg:flex-[.7] p-4 md:p-0'>
<h2 className='hidden md:block md:text-[1.8rem] text-xl font-bold text-dark_violet pt-8 pb-12'>Enter payment info to start your free trial</h2>

<div className='flex flex-col gap-2 items-start'>
  <h4 className='text-dark_violet text-[18px] font-bold'>Your payment methods</h4>
  <img src={visa} alt="Visa payment method" />
</div>

<div className='flex flex-col gap-2 items-start my-8 w-full md:w-[70%] lg:w-[50%]'>
  <button className={`h-16 w-full flex items-center justify-center border-[1px] ${selectedMethod=='credit'&&'border-primary'} rounded-lg`} onClick={()=>handleSelectedMethod('credit')}>
    <img src={credit} alt="Credit card payment method" />
  </button>
{selectedMethod=='credit'&&<CreditPayment/>}


  <button className={`h-16  w-full flex items-center justify-center border-[1px] ${selectedMethod=='applepay'&&'border-primary'} rounded-lg`} onClick={()=>handleSelectedMethod('applepay')}>
    <img src={applepay} alt="Apple Pay payment method" />
  </button>
  {selectedMethod=='applepay'&&<Applepay/>}
  <button className={`h-16 w-full flex items-center justify-center border-[1px] ${selectedMethod=='paypal'&&'border-primary'} rounded-lg`} onClick={()=>handleSelectedMethod('paypal')}>
    <img src={paypal} alt="PayPal payment method" />
  </button>
  {selectedMethod=='paypal'&&<Paypal/>}
</div>

<p className='text-sm font-normal text-[#4b4b4b] md:w-[70%]'>
  By clicking "Agree and subscribe", you agree: After your trial ends, you will be charged US$30 (plus tax) monthly. At the end of your one-year term, your subscription will automatically renew monthly until you cancel (price subject to change). No annual commitment required after the first year. You also agree to the Terms of Use and the Subscription and Cancellation Terms.
</p>

<div className='flex my-10 gap-4'>
  <Link to='/subscribed' className='py-2 px-4 bg-primary text-white rounded-md text-sm font-medium hover:bg-violet-500'>
    Agree & Subscribe
  </Link>
  <Link to='/' className='py-2 px-4 border-[1px] border-primary text-primary rounded-md text-sm font-medium hover:bg-primary hover:text-white'>
    Back
  </Link>
</div>

  </div>

  <aside className='md:p-4 flex items-center flex-col md:flex-[.4] lg:flex-[.3] mb-10 md:mb-4'>
<div className='w-full md:border-[1px] border-b-[1px] md:shadow p-2 md:rounded-lg'>
<h3 className='text-[28px] font-bold text-dark_violet pb-4'>Summary</h3>

<div className='flex flex-col gap-1 border-t-[1px] p-2'>
  <h4 className='text-sm font-normal text-[#4b4b4b]'>Subscription</h4>
  <div className='flex items-center justify-between'>
    <span className='text-base text-[#4b4b4b] font-normal'>Pro</span>
    <span className='text-base text-[#4b4b4b] font-normal'>US $30/month</span>
  </div>
</div>

<div className='border-t-[1px] p-2 flex flex-col gap-1'>
<div className='flex items-center justify-between'>
    <span className='text-base text-[#4b4b4b] font-normal'>Sub total</span>
    <span className='text-base text-[#4b4b4b] font-normal'>US $30/month</span>
  </div>
  <div className='flex items-center justify-between'>
    <span className='text-base text-[#4b4b4b] font-normal'>Tax</span>
    <span className='text-base text-[#4b4b4b] font-normal'>US $32</span>
  </div>
</div>

<div className='flex items-center justify-between p-2 border-t-[1px]'>
    <span className='text-base text-[#4b4b4b] font-normal'>Total amount</span>
    <span className='text-dark_violet font-bold text-[26px]'>US $32</span>
  </div>
</div>

  </aside>
</div>
</main>
</section>
  )
}

export default Payment
