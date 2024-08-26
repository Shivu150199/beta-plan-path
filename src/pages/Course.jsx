import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Pagination from '../components/Pagination'
import search from '../assets/search.svg'
import view from '../assets/horizontal.svg'
import { Tabs } from 'antd';
import Card from '../components/HorizontalCard'
import Filter from '../components/Filter'
import VerticalCard from '../components/VerticalCard'
import vertical from '../assets/vartical.svg'
import { courseData } from '../data'
import filterIcon from '../assets/filterIcon.svg'
import { Button, Drawer, Radio, Space } from 'antd';







const Course = () => {
    const [isVertical,setIsVertical]=useState(true)
    const [data,setData]=useState(courseData)
    const [openFilter, setOpenFilter] = useState(false);
    let navigationList=['Home','Course']
    const showFilter = () => {
        setOpenFilter(true);
      };
      const onCloseFilter = () => {
        setOpenFilter(false);
      };
    useEffect(() => {
        // Function to check if the viewport is less than 768px
        const handleResize = () => {
          setIsVertical(window.innerWidth < 1000);
        };
    
        // Initial check when the component mounts
        handleResize();
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const items = [
        {
          key: '1',
          label: 'All (300)',
          children: '',
        },
        {
          key: '2',
          label: 'English (200)',
          children: "",
        },
        {
          key: '3',
          label: 'Math (50)',
          children:"",
        },
        {
          key: '4',
          label: 'Science (50)',
          children: "",
        },
      ];
    const onChange = (key) => {
    //  const filterData=courseData.filter((item)=>)
      };
    
  return (
    <section className='px-6 bg-[#fafafa]'>
<Navigation list={navigationList}/>
<div className='flex  items-center justify-between border-[2px] p-2 rounded-md border-[#7d7d7d] md:hidden mt-4'>
    <input type="text" placeholder='Search for courses, schools, etc.' className='outline-none w-full bg-transparent'/>
    <img src={search} alt="" />
</div>

{/* course and filter */}

<div className='flex items-center justify-between my-2 md:hidden'>
<h2 className='text-[18px] font-bold text-[#525252
]'>Courses(2022)</h2>
<button onClick={showFilter} className='flex items-center justify-between gap-2 border-primary border-[1px] rounded px-2 py-1'>
    <img src={filterIcon} alt="" />
    <span className='text-primary font-[500] tracking-wide text-[14px]'>

    Filter
    </span>
</button>
</div>

{/* card */}

<div className='flex md:border-[1px] rounded-lg bg-white'>
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
    <div className='main md:px-4 py-2 flex-auto'>
        <div className='items-center justify-between w-[100%] flex border-b-[1px] p-1'>
            
            <p className='text-[13px] text-[#525252] font-[700]'>Showing 1-100 of 2332 results</p>
            <div className='flex items-center gap-4'>
            <label className='hidden md:flex items-center gap-2'>
        <span className='text-[13px] text-[#525252] font-[500] capitalize'>Item per page : </span>
        <select name="" id="" className='py-1 px-2 border-[1px] border-primary text-primary outline-none rounded-md text-[13px] font-[500]'>
            <option value="">25</option>
            <option value="">26</option>
            <option value="">27</option>
            <option value="">28</option>
            <option value="">29</option>
        </select>
       </label>
<button className=' gap-2 items-center hidden lg:flex' onClick={()=>setIsVertical(!isVertical)}>
    {isVertical?<>
     <img src={view} alt="view" />
    <span className='text-[13px] text-primary font-[500] capitalize'>

    horizontal View
    </span>
    </>:<>   <img src={vertical} alt="view" />
    <span className='text-[13px] text-primary font-[500] capitalize'>

Vertical View
    </span>
    </>
    }
   
 
</button>

            </div>
      
        </div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} className='hidden md:block' />


    <div className={`no-scrollbar w-full h-[60vh] overflow-auto grid grid-cols-1 md:grid-cols-1 ${isVertical?'lg:grid-cols-2':'lg:grid-cols-1'} gap-4 items-center justify-around md:flex-row mt-4`}>
{/* <VerticalCard/> */}
{isVertical?<>
{data.map((item,index)=>{
    return <Card key={index} title={item.title} about={item.about} image={item.image} available={item.available} credit={item.credit} desc={item.desc}/>
})}

</>:<>
{data.map((item,index)=>{
    return <VerticalCard key={index} title={item.title} about={item.about} image={item.image} available={item.available} credit={item.credit} desc={item.desc} rating={item.rating} totalRating={item.totalRating}/>
})}
{/* <VerticalCard /> */}

</>}



</div>

    </div>
</div>




<Drawer
        title="Drawer"
        width='100%'
        placement='right'
        closable={true}
        onClose={onCloseFilter}
        open={openFilter}
      
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>


<Pagination/>
    </section>
  )
}

export default Course