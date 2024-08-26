import React from 'react'
import { academic, arrow, crown, elevengrade, hero, horizontal, horizontalWay, ninegrade, plane, tengrade, tune, twelvegrade, vertical, verticalWay } from '../../assets/landing'
import { Footer } from '../../components/layout component'
import { Link } from 'react-router-dom'


const Landing = () => {
    return (
        <section className='w-[100%]'>
            {/*  */}
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex flex-col gap-6 p-4 md:p-20'>
                    <h1 className='text-4xl md:text-6xl font-bold text-dark_violet leading-[45px] md:leading-[70px]'>Smart course <br />
                        selections for <span className='text-[#F54746]'>high school</span></h1>
                    <p className='text-base md:text-xl font-medium text-dark_violet'>Select the right courses. Explore career paths. Create a multi-year plan. Shape your future and give wings to your dreams.</p>
                    <div className='flex'>
                        <Link to='/register' className='btn bg-primary hover:bg-violet-500 text-white flex gap-2 items-center justify-center'><span>Explore courses</span> <img src={arrow} alt="" /> </Link>

                    </div>
                </div>
                <div className='flex items-center justify-center md:items-start md:p-16'>
                    <img src={hero} alt="" className='w-full' />
                </div>

            </div>
            {/*  */}

            <div className='w-[100%] flex items-center justify-center mt-10 p-4 md:px-20'>
                <img src={horizontal} alt="" className='hidden md:flex w-full' />
                <img src={vertical} alt="" className='md:hidden w-full' />
            </div>

{/*  */}
            {/*  */}
            <div className='grid grid-cols-1 md:grid-cols-[1fr,2fr] p-4 gap-2 md:p-20'>
<div className='p-4 flex gap-4 flex-col'>
<h2 className='text-[2rem] md:text-[2.5rem] font-bold text-dark_violet  md:text-start lg:w-[90%]'>Your learning path</h2>
<p className='text-base text-dark_violet font-normal md:text-start lg:w-[90%]'>Build your dream personal learning pathway by choosing the right high school courses to create multi year course progression roadmap. Set yourself on road to unparalleled success </p>
</div>
<div className='grid grid-cols-2'>
<div className='flex flex-col pt-10'>
<img src={ninegrade} alt="" />
<img src={elevengrade} alt="" />
</div>
<div className='flex flex-col'>
<img src={tengrade} alt="" />
<img src={twelvegrade} alt="" />
</div>

</div>

</div>

{/*  */}

            <div className='w-[100%] mt-20 flex items-center justify-center'>
                <img src={horizontalWay} alt="" className='hidden md:flex w-full' />
                <img src={verticalWay} alt="" className='md:hidden w-full' />
            </div>
            {/*  */}

            <div className='grid grid-cols-1 md:grid-cols-2 bg-[#F3EFFF] p-10 md:p-20'>
                <div className='p-4 flex items-center justify-center md:justify-start md:items-start  gap-4 flex-col'>
                    <h2 className='text-[2.1rem]  font-bold text-dark_violet text-center md:text-start lg:w-[70%]'>Achieve your goals with PlanPaths</h2>
                    <p className='text-center text-sm md:text-base text-dark_violet font-normal md:text-start lg:w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nulla quisquam perferendis deserunt necessitatibus .</p>
                </div>
                <div className='flex p-4 items-center justify-center'>
                    <div className='grid grid-cols-2 gap-2 p-2 items-center justify-center w-full'>
                

                    <img src={crown} alt="" />
                    <img src={plane} alt="" />
                    <img src={tune} alt="" />
                    <img src={academic} alt="" />

                    </div>
             
       

                </div>

            </div>

            {/*  */}

            <div className='w-[100%] p-6 flex flex-col gap-4'>
                <h2 className='md:text-[2.2rem] text-[1.5rem] text-primary font-bold text-center'>Your choices + Social feedback</h2>
                <p className='text-dark_violet text-base font-normal md:font-medium text-center'>Course selection are complex, challenging, and overwhelming. <br />
                Planpaths bring together the Art & the science of your Course choices with power of Social feedback.</p>
            </div>




            <Footer />

        </section>
    )
}

export default Landing