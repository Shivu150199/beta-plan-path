import React from 'react'
import { emptycart } from '../../assets/cart'
import Navigation from '../../components/Navigation'
import { failure } from '../../assets/pricing'
import { Link } from 'react-router-dom'

const FailSubscribe = () => {
    const navigationList = ['Home', 'Payment', 'Subscription failed']

    return (
        <section>
            <Navigation list={navigationList} />

            <main className='flex items-center justify-center flex-col gap-4 h-[80vh] md:border-[1px] md:mx-4 md:rounded-lg'>
                <img src={failure} alt="Subscription failed illustration" />
                <h2 className='text-[18px] font-bold text-failure'>Subscription failed</h2>
                <p className='text-center text-dark_violet text-sm font-normal w-[90%]'>
                    Your subscription failed due to some technical reason. Please try again after some time.
                </p>
                <Link to='/pricing' className='py-2 px-4 bg-primary hover:bg-violet-500 text-white rounded-lg'>
                    Back to pricing page
                </Link>
            </main>
        </section>
    )
}

export default FailSubscribe
