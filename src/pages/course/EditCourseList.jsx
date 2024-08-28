import React, { useState } from 'react'
import { courseData } from '../../data'
import Navigation from '../../components/Navigation'
import { close, plus } from '../../assets/course'
import EditCourseCard from '../../components/course/EditCourseCard'
import arrow from '../../assets/course/arrowDowns.svg'
import Pagination from '../../components/Pagination'
import { Drawer } from 'antd'
import CreateCourse from './CreateCourse'



const EditCourse = () => {
    const [data,setData]=useState(courseData)
    const NavigationList=['Home','Your courses']
    const [open, setOpen] = useState(false);
  
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };

  return (
   <section className='bg-[#fafafa]'>
<Navigation list={NavigationList}/>
<div className='flex flex-col gap-2 border-[1px] mx-4 bg-white rounded-md'>
<div className='items-center justify-between w-[100%] flex border-b-[1px] px-4 py-2'>
            
            <p className='text-[10px] md:text-[13px] text-[#525252] font-[700]'>Showing 1-100 of 2332 results</p>
            <div className='flex items-center gap-4'>
            <label className='hidden md:flex items-center gap-2'>
        <span className='text-[13px] text-[#525252] font-[500] capitalize'>Item per page : </span>
        <select  name="" id="" className='item-select py-1 px-2 border-[1px] border-primary text-primary outline-none rounded-md text-[13px] font-[500] w-14'>
            <option value="">25</option>
            <option value="">26</option>
            <option value="">27</option>
            <option value="">28</option>
            <option value="">29</option>
        </select>
     
      
       </label>
<button onClick={showDrawer}  className='bg-primary flex items-center gap-1 justify-center py-2 px-2 md:px-4 rounded-md font-md text-white hover:bg-violet-500 text-sm'><img src={plus} alt="" /> <span>Create course</span> </button>


{/*  */}
<Drawer
      
        closable={false}
        // onClose={onClose}
        
        open={open}
        width={`100%`}
     
      >
   <CreateCourse onClose={onClose}/>
   
      </Drawer>

{/*  */}


            </div>
      
        </div>

<div className='flex flex-col gap-4 p-4'>


{data.map((item)=>{
    const{title,credit,image,available,about,desc,rating,totalRating,id}=item
    return <EditCourseCard key={item.id} id={id} available={available} title={title} credit={credit} about={about} desc={desc} rating={rating} totalRating={totalRating} image={image}/>
})}


</div>

</div>

<Pagination/>
   </section>
  )
}

export default EditCourse