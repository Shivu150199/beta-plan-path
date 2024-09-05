import React, { useContext, useEffect, useState } from "react";

import Pagination from "../../components/Pagination";
import search from "../../assets/search.svg";

import { courseData } from "../../data";

import { Button, Drawer, Radio, Space } from "antd";
import { BreadCrumb } from "../../components/utils";
import { CourseContext } from "../../context api/CourseContext";
import { CourseCardList, CourseFilter, Filter } from "../../components/course";
import { filterIcon } from "../../assets/course";
import { Link } from "react-router-dom";
import alert from '../../assets/alert.svg'

const Course = () => {
    const { showFilter, onCloseFilter, openFilter, setIsVertical, formData,compareId } =
        useContext(CourseContext);

    const { breadCrumbList } = useContext(CourseContext);

    useEffect(() => {
        const handleResize = () => {
            setIsVertical(window.innerWidth < 1024);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const onChange = (key) => {
        //  const filterData=courseData.filter((item)=>)
    };


    return (
        <section className="bg-creambg px-2 flex flex-col w-[100%] h-[calc(100vh-64px)] relative">
            <BreadCrumb list={breadCrumbList} />
            <div className="flex  items-center justify-between border-[2px] p-2 rounded-md border-[#7d7d7d] md:hidden mt-4">
                <input
                    type="search"
                    placeholder="Search for courses, schools, etc."
                    className="outline-none w-full bg-transparent"
                />
                <img src={search} alt="search icon" />
            </div>

            <div className="flex items-center justify-between my-2 md:hidden">
                <h2
                    className="text-[18px] font-bold text-[#525252
]"
                >
                    Courses(2022)
                </h2>
                <button
                    onClick={showFilter}
                    className=" relative flex items-center justify-between gap-2 border-primary border-[1px] rounded px-2 py-1"
                >
                    <img src={filterIcon} alt="" />
                    <span className="text-primary font-md tracking-wide text-[14px]">
                        Filter
                    </span>
                    {formData && (
                        <span className="w-3 h-3 bg-red-700 absolute top-[-5px] right-[-5px] rounded-full border-[2px] border-white"></span>
                    )}
                </button>
            </div>

            <div className="flex md:border-[1px] rounded-lg bg-white md:mx-4 md:h-[calc(100vh-160px)] h-[calc(100vh-212px)] ">
                <CourseFilter />
                <CourseCardList />
     
            </div>

            {compareId.length > 0 && (
                <Link to='/compare'
                    // onClick={() => handleOpen()}
                    className="bg-primary rounded-md text-white font-medium text-sm fixed right-10 bottom-14 flex items-center gap-1 px-4 py-2"
                >
                    <span>Compare</span>
                    <p className="bg-white rounded-sm text-black w-4 h-4 flex items-center justify-center ">
                        {compareId.length}
                    </p>
                </Link>
            )}
{compareId.length>2&&<div role="alert" className="alert alert-error bg-[#FFD6D6] opacity-80 rounded-md border-[1px] border-red-600 fixed left-1/2 transform -translate-x-1/2 bottom-auto top-20 md:top-auto md:bottom-20 md:w-[50%] flex items-center gap-2">
<img src={alert} alt="alert icon" />
  <span>You can select max 4 courses to compare</span>
</div>}



            <Pagination />
            <Drawer
                width="100%"
                placement="right"
                closable={false}
                onClose={onCloseFilter}
                open={openFilter}
            >
                <Filter />
            </Drawer>
        </section>
    );
};

export default Course;
