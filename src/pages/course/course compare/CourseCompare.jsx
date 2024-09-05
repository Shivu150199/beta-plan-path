import React, { useContext } from "react";
import { BreadCrumb } from "../../../components/utils";
import { CourseContext } from "../../../context api/CourseContext";

import CompareCard from "./CompareCard";
import { Link } from "react-router-dom";

const CourseCompare = () => {
    const { compareCrumbList,compareData,deleteCompare } = useContext(CourseContext);
  
    return (
        <section className="bg-creambg h-[calc(100vh-93px)] overflow-auto no-scrollbar ">
            <BreadCrumb list={compareCrumbList} />
            <div className="flex border-[1px] rounded-md mx-4 bg-white">
                <div className="flex-[.2] flex flex-col">
                    <div className="px-4 py-2 border-b-[1px] text-dark_violet md:text-[18px] text-sm text-nowrap font-medium h-[254px]">
                        Courses
                    </div>
                    <div className="px-4 py-4 border-b-[1px] text-dark_violet md:text-[18px] text-sm text-nowrap font-medium">
                        Review
                    </div>
                    <div className="px-4 py-4 border-b-[1px] text-dark_violet md:text-[18px] text-sm text-nowrap font-medium">
                        State code
                    </div>
                    <div className="px-4 py-4 border-b-[1px] text-dark_violet md:text-[18px] text-sm text-nowrap font-medium">
                        Course code
                    </div>
                    <div className="px-4 py-4 border-b-[1px] text-dark_violet md:text-[18px] text-sm text-nowrap font-medium">
                        Course category
                    </div>
                    <div className="px-4 py-4 border-b-[1px] text-dark_violet md:text-[18px] text-sm text-nowrap font-medium">
                        Course sub-category
                    </div>
                    <div className="px-4 py-4 border-b-[1px] text-dark_violet md:text-[18px] text-sm text-nowrap font-medium">
                        Availble credits
                    </div>
                    <div className="px-4 py-4 border-b-[1px] text-dark_violet md:text-[18px] text-sm text-nowrap font-medium">
                        Max GPA weighted
                    </div>
                    <div className="px-4 py-4 border-b-[1px] text-dark_violet md:text-[18px] text-sm text-nowrap font-medium">
                        Course length
                    </div>
                    <div className="px-4 py-4 border-b-[1px] text-dark_violet md:text-[18px] text-sm text-nowrap font-medium">
                        Has prerequisites
                    </div>
                    <div className="px-4 py-4 border-b-[1px] text-dark_violet md:text-[18px] text-sm text-nowrap font-medium md:h-[182px] h-[142px]">
                        Course Detail
                    </div>
                </div>
                <div className="flex-[.8] overflow-auto no-scrollbar">
                    <div className=" flex w-full">
                    {compareData.length > 0 ? (
                            compareData.map(item => (
                                <CompareCard key={item.id} item={item} deleteCompare={deleteCompare} />
                            ))
                        ) : (
                        <div className="w-full flex items-center justify-center border-l-[1px] h-[100vh] flex-col gap-6">
                            <p className="text-[28px] text-dark_violet font-bold">No course to compare !</p>
                            <Link className='primary-btn' to='/course'>Explore Courses</Link>
                        </div>
                        )}

                    
                
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseCompare;
