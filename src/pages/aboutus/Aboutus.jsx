import React from 'react'
import { about, aboutme, rightArrow } from '../../assets/about-us'
import { Footer } from '../../components/layout component'
const Aboutus = () => {
  return (
    <section >
    <div className='flex items-center justify-center flex-col gap-4 relative w-[100%] h-[25rem] bg-cover bg-center before:absolute before:inset-0
                before:block
                before:bg-[#262134]
               before:h-[100%]
               before:overflow-hidden
                before:opacity-80
                before:z-[5]' style={{backgroundImage:`url(${about})`}}>
    
    <h2 className='text-2xl md:text-4xl font-bold text-white text-center z-20'>About Us</h2>
    
    <p className='text-sm font-medium md:text-xl md:font-medium text-center text-white w-[80%] lg:w-[50%] z-20'>We envision a world where you can select the right courses. Explore career paths. Create a multi-year plan. Shape your future and give wings to your dreams.</p>
    <button className='flex items-center gap-2 bg-primary rounded-md px-4 py-2 z-20 text-white font-medium text-base '>Explore courses <img src={rightArrow} alt="" /></button>
    
    
    </div>
    
 <div className='grid grid-cols-1 md:grid-cols-2 mt-10 p-4 md:gap-10'>

<div className=' flex flex-col gap-2 lg:p-8 justify-start items-start'>
<h2 className='font-bold text-[16px] md:text-2xl'>Lorem ipsum dolor sit amet.</h2>
<p className='text-sm text-[#4b4b4b]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor tempora rem id exercitationem repudiandae cumque tenetur aut minima neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veritatis, blanditiis neque a nesciunt voluptatum pariatur autem at, nemo harum sequi fugit tempore itaque eaque? Reiciendis distinctio sit aut soluta!</p>
</div>
<div className='mt-4 lg:px-8'>
  <img src={aboutme} alt=""  className='rounded-md '/>
</div>

 </div>


    
    <Footer/>
    
    
        </section>
  )
}

export default Aboutus