import React, { useContext, useEffect, useState } from "react";
import { BreadCrumb } from "../../components/utils";
import { AddSchoolContext } from "../../context api/AddSchoolContext";
import { filterIcon, search } from "../../assets/course";
import { Drawer } from "antd";
import { CourseCardList, CourseFilter, Filter } from "../../components/course";
import {
    AddToSchoolDrawer,
    AllCardContainer,
    DrawerFilter,
    MainFilter,
} from "../../components/addSchool";
import Pagination from "../../components/Pagination";
import { CreateCourse } from "../course";

const AddToSchool = () => {
    const {
        breadCrumbList,
        courseTabs,
        showFilter,
        onCloseFilter,
        formData,
        openFilter,
        filterData,
        handleFilter,
        handleFilterChange,
        AddSchoolData,
        setIsVertical,
        handleCourse,
        addedCourse,
        open,
        handleOpen,
        finalizeCourse,
    } = useContext(AddSchoolContext);

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

    return (
        <section className="bg-creambg px-2 flex flex-col w-[100%] h-[calc(100vh-64px)] relative">
            <BreadCrumb list={breadCrumbList} />
            {/* sm screen serach component */}
            <div className="flex  items-center justify-between border-[2px] p-2 rounded-md border-[#7d7d7d] md:hidden mt-4">
                <input
                    type="search"
                    placeholder="Search for courses, schools, etc."
                    className="outline-none w-full bg-transparent"
                />
                <img src={search} alt="search icon" />
            </div>

            {/*sm screen filter section  */}
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

            {/* main section */}
            <div className="flex md:border-[1px] rounded-lg bg-white md:mx-2 md:h-[calc(100vh-160px)] h-[calc(100vh-212px)]">
                <MainFilter
                    filterData={filterData}
                    handleFilterChange={handleFilterChange}
                />
                {/* <CourseCardList /> */}
                <AllCardContainer
                    formData={formData}
                    schoolData={AddSchoolData}
                    courseTab={courseTabs}
                    handleCourse={handleCourse}
                />
            </div>
            <Pagination />
            <Drawer
                width="100%"
                placement="right"
                closable={false}
                onClose={onCloseFilter}
                open={openFilter}
            >
                <DrawerFilter
                    filterData={filterData}
                    onCloseFilter={onCloseFilter}
                    handleFilter={handleFilter}
                    handleFilterChange={handleFilterChange}
                />
            </Drawer>

            {addedCourse.length > 0 && (
                <button
                    onClick={() => handleOpen()}
                    className="bg-primary rounded-md text-white font-medium text-sm fixed right-10 bottom-14 flex items-center gap-1 p-4"
                >
                    <span>Added to school</span>
                    <p className="bg-white rounded-sm text-black w-4 h-4 flex items-center justify-center ">
                        {addedCourse.length}
                    </p>
                </button>
            )}
            {/* add to school drawer */}
            <Drawer
                closable={false}
                onClose={() => handleOpen()}
                open={open}
                width={`100%`}
            >
                <AddToSchoolDrawer
                    handleOpen={handleOpen}
                    finalizeCourse={finalizeCourse}
                />
                {/* <CreateCourse /> */}
            </Drawer>
        </section>
    );
};

export default AddToSchool;
