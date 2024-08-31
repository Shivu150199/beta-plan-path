import React from 'react'
import Filter from '../Filter'

const CourseFilter = () => {
  return (
    <div className='min-w-[250px] filter flex-[.25]  h-[78vh] hidden md:flex flex-col border-r-[1px] overflow-auto no-scrollbar'>
    <div className='flex items-center justify-between p-2 border-b-slate-200 border-b-[1px]'>
        <h2 className='text-[18px] font-bold text-[#31225C]'>Filters</h2>
        <button className='text-[14px] font-medium text-primary'>Clear filter</button>
    </div>
    
    {/* filter section */}
    
    <Filter/>
    <Filter/>
    <Filter/>
    
    
        </div>
  )
}

export default CourseFilter