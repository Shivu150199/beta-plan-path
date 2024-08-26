import React from 'react'
import CourseDesc from './CourseDesc'

const CourseInfo = () => {
  const courseInfo={
    "Category Type":'Mathemetics',
    "Course Category":"Mathematics",
    "Course Sub Caategory":"Algebra",
    "course Level":"Regular",
    "Available Credits":"1.00",
    "Course":"Mathematics",
  }
  return (
    <div>
      
<div className='border-b-[1px] py-2'>
<h2 className='text-[#31225C] font-[700] text-[22px]'>Course Info</h2>
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-4'>
{Object.entries(courseInfo).map(([key,value],index)=>{
  return <div key={index} className='flex flex-col gap-1 w-32'>
  <span className='text-[13px] font-[400] text-[#525252]'>
    {key}
  </span>
  <p className='text-[16px] font-[500] text-[#31225C]'>{value}</p>
</div>
})}

 
</div>

</div>
{/* table */}

<div className='grid grid-cols-1 gap-4 lg:grid-cols-2 my-6 border-b-[1px] py-4'>
<div className='border-[1px] border-[#b2b1b1] rounded-lg'>
{Object.entries(courseInfo).map(([key,value],index)=>{
  return <div key={index} className='grid grid-cols-2 px-2 py-1 border-b-[1px] even:bg-[#FBFBFB] last:border-none last:rounded-lg border-[#b2b1b1]'>
  <span className='text-[14px] font-[400] text-[#525252]'>{key}</span>
  <span className='font-[500] text-[14px] text-[#1f1f1f]'>{value}</span>
  </div>
})}



</div>
<div className='border-[1px] border-[#b2b1b1] rounded-lg'>
{Object.entries(courseInfo).map(([key,value],index)=>{
  return <div key={index} className='grid grid-cols-2 px-2 py-1 border-b-[1px] even:bg-[#FBFBFB] last:border-none last:rounded-lg border-[#b2b1b1]'>
  <span className='text-[14px] font-[400] text-[#525252]'>{key}</span>
  <span className='font-[500] text-[14px] text-[#1f1f1f]'>{value}</span>
  </div>
})}
</div>
</div>

<CourseDesc/>

    </div>
  )
}

export default CourseInfo