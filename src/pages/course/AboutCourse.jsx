import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Navigation from '../../components/Navigation'
import SingleCourse from '../../components/SingleCourse'
import { Tabs } from 'antd'

import { CourseDesc, CourseInfo, UserReview } from '../../components/course'

const AboutCourse = () => {
  let navigationList=['Home','Courses']
  const items = [
    {
      key: '1',
      label: 'Course Info',
      children: <CourseInfo/>,
    },
    {
      key: '2',
      label: 'Course Description',
      children: <CourseDesc courseDescription={''}/>,
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
const onChange = (key) => {
    console.log(key);
  };

  return (
    <section className='px-6 -z-10'>
        <Navigation list={navigationList}/>
        <div>
          <SingleCourse/>
        </div>
        <div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange}  />
        </div>
    
    </section>
  )
}

export default AboutCourse