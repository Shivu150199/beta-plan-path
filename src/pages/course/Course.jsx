import React, { useContext, useEffect, useState } from "react";

import Pagination from "../../components/Pagination";
import search from "../../assets/search.svg";

import { courseData } from "../../data";

import { Button, Drawer, Radio, Space } from "antd";
import { BreadCrumb } from "../../components/utils";
import { CourseContext } from "../../context api/CourseContext";
import { CourseCardList, CourseFilter, Filter } from "../../components/course";
import { filterIcon } from "../../assets/course";

const Course = () => {
    const { showFilter, onCloseFilter, openFilter, setIsVertical, formData } =
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
        <section className="bg-creambg px-2 flex flex-col">
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

            <div className="flex md:border-[1px] rounded-lg bg-white md:mx-4 h-[72vh]">
                <CourseFilter />
                <CourseCardList />
            </div>

            <Drawer
                width="100%"
                placement="right"
                closable={false}
                onClose={onCloseFilter}
                open={openFilter}
            >
                <Filter />
            </Drawer>
            <Pagination />
        </section>
    );
};

export default Course;
