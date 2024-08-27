import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { courseData } from '../../data'
import Navigation from '../../components/Navigation'
import star from '../../assets/card/star.svg'
import { nanoid } from 'nanoid'
import { edit } from '../../assets/course'
import { Tabs } from 'antd'
import { CourseDesc, CourseInfo, UserReview } from '../../components/course'
const EditSingleCourse = () => {
  
    const onChange = (key) => {
        console.log(key);
      };

    const { id } = useParams()
    console.log(id)
    const navigationList = ['Home', 'Course']
    const [navList, setList] = useState(navigationList)
    const [data, setData] = useState(null)

    const filteredData = courseData.filter((item) => item.id == id)

console.log(filteredData)
    useEffect(() => {
        setList([...navigationList, filteredData[0].title])
    }, [])

    const items = [
        {
          key: '1',
          label: 'Course Info',
          children: <CourseInfo obj={filteredData[0].about}/>,
        },
        {
          key: '2',
          label: 'Course Description',
          children: <CourseDesc courseDescription={filteredData[0].desc}/>,
        },
        {
          key: '3',
          label: 'User Review',
          children:<UserReview/>,
        },
        {
          key: '4',
          label: 'Question & Answer',
          children: "question",
        },
      ];

    return (
        <section className='bg-creambg'>
            <Navigation list={navList} />
            <div className='maindiv bg-white' >

{/*  */}



                <div className=' gap-4 border-y-[1px] p-4 flex'>
                    <div>
                        <img src={filteredData[0].image} alt="" className=' bg-slate-200 rounded-lg w-[12rem] md:w-[12rem]' />

                    </div>
                    <div className='flex gap-1 flex-col'>
                        {/* <img src={filteredData[0].image} alt="" className=' bg-slate-200 rounded-lg  md:hidden' /> */}

                      
                            <h2 className='font-[700] md:text-[28px] text-[18px] text-[#31225C]'>{filteredData[0].title}</h2>
                            <div className='flex gap-2 items-center'>
                                <span className='text-[#31225C] font-[700] text-[14px]'>{filteredData[0].rating}</span>
                                <ul className='flex items-center gap-1'>
                                    <li>
                                        <img src={star} alt="" />
                                    </li>
                                    <li>
                                        <img src={star} alt="" />
                                    </li>
                                    <li>
                                        <img src={star} alt="" />
                                    </li>
                                    <li>
                                        <img src={star} alt="" />
                                    </li>
                                    <li>
                                        <img src={star} alt="" />
                                    </li>
                                </ul>
                                <span className='text-[#31225C] font-[400] text-[14px]'>({filteredData[0].totalRating})</span>
                            </div>

                            <p className='text-primary text-[14px] font-[700]'>Available Credit : <span>{filteredData[0].credit}</span>
                            </p>

                            <div className='flex-col p-4 md:p-0 md:mt-4  gap-2 hidden md:flex'>
                <ul className='flex flex-wrap gap-x-4'>
                        {filteredData[0].available.map((item) => {
                            return <li key={nanoid()} className='flex items-center gap-2 font-[400] text-[14px]'><div className='w-[4px] h-[4px] rounded-full bg-[#525252]'></div>{item}</li>
                        })}

                    </ul>
                    <div className='flex'>

                        <Link to={`/edit-course/`} className='bg-white text-primary rounded-[4px] px-4 py-2 border-[1px] border-primary font-medium text-sm flex gap-2 items-center justify-center'><img src={edit} alt="" />
                            <span>Edit Course</span>
                        </Link>
                    </div>
                </div>

                    </div>

                 






                </div>
                <div className='flex-col p-4 flex gap-2 md:hidden'>
                <ul className='flex flex-wrap gap-x-4'>
                        {filteredData[0].available.map((item) => {
                            return <li key={nanoid()} className='flex items-center gap-2 font-[400] text-[14px]'><div className='w-[4px] h-[4px] rounded-full bg-[#525252]'></div>{item}</li>
                        })}

                    </ul>
                    <div className='flex'>

                        <Link to={`/edit-course/`} className='bg-white text-primary rounded-[4px] px-4 py-2 border-[1px] border-primary font-medium text-sm flex gap-2 items-center justify-center'><img src={edit} alt="" />
                            <span>Edit Course</span>
                        </Link>
                    </div>
                </div>


           
             


{/*  */}



<div className='p-4 bg-white'>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange}  />
        </div>





            </div>




        </section>
    )
}

export default EditSingleCourse