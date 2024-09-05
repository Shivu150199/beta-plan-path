import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { nanoid } from "nanoid";
import { edit, emptystar, fillstar } from "../../assets/course";
import { Drawer, Tabs } from "antd";
import {
    CourseDesc,
    CourseInfo,
    QuestionAnswer,
    UserReview,
} from "../../components/course";

import { DashboardContext } from "../../context api/DashboardContext";
import {
    AddedCourseInfo,
    AddedCourseUserReview,
} from "../../components/dashboard";
import AddedCourseDescription from "../../components/dashboard/AddedCourseDescription";
import AddedCourseQnA from "../../components/dashboard/AddedCourseQnA";
import { approve } from "../../assets/dashboard";
import { CreateCourse } from "../course";

const AddedCourseSingle = () => {
    const { addedCourse, review, queData,open,setOpen } = useContext(DashboardContext);

    const onChange = (key) => {};

    const { id } = useParams();

    const filteredData = addedCourse.filter((item) => item.id == id);

    const items = [
        {
            key: "1",
            label: "Course Info",
            children: <AddedCourseInfo obj={filteredData[0].about} />,
        },
        {
            key: "2",
            label: "Course Description",
            children: (
                <AddedCourseDescription
                    courseDescription={filteredData[0].desc}
                />
            ),
        },
        {
            key: "3",
            label: "User Review",
            children: <AddedCourseUserReview review={review} />,
        },
        {
            key: "4",
            label: "Question & Answer",
            children: <AddedCourseQnA qna={queData} />,
        },
    ];

    return (
        <section className="bg-creambg px-2 flex flex-col w-[100%] h-[calc(100vh-64px)] relative">
            <div className="maindiv bg-creambg h-[100%] overflow-auto relative no-scrollbar">
                {/*  */}

                <div className=" gap-4 border-y-[1px] p-4 flex">
                    <div>
                        <img
                            src={filteredData[0].image}
                            alt=""
                            className=" bg-slate-200 rounded-lg w-[12rem] md:w-[12rem]"
                        />
                    </div>
                    <div className="flex gap-1 flex-col">
                        {/* <img src={filteredData[0].image} alt="" className=' bg-slate-200 rounded-lg  md:hidden' /> */}
                        <div className="flex gap-4 items-center">
                            <h2 className="font-[700] md:text-[28px] text-[18px] text-[#31225C]">
                                {filteredData[0].title}
                            </h2>
                       
                        </div>

                        <div className="flex gap-2 items-center">
                            <span className="text-[#31225C] font-[700] text-[14px]">
                                {filteredData[0].rating}
                            </span>
                            <ul className="flex items-center gap-1">
                                {[
                                    ...Array(
                                        Math.floor(filteredData[0].rating)
                                    ),
                                ].map(() => {
                                    const id = nanoid();
                                    return (
                                        <li key={id}>
                                            <img src={fillstar} alt="star" />
                                        </li>
                                    );
                                })}
                                {[
                                    ...Array(
                                        5 - Math.floor(filteredData[0].rating)
                                    ),
                                ].map(() => {
                                    const id = nanoid();
                                    return (
                                        <li key={id}>
                                            <img src={emptystar} alt="star" />
                                        </li>
                                    );
                                })}
                            </ul>
                            <span className="text-[#31225C] font-[400] text-[14px]">
                                ({filteredData[0].totalRating})
                            </span>
                        </div>

                        <p className="text-primary text-[14px] font-[700]">
                            Available Credit :{" "}
                            <span>{filteredData[0].credit}</span>
                        </p>

                        <div className="flex-col p-4 md:p-0 md:mt-4  gap-2 hidden md:flex">
                            <ul className="flex flex-wrap gap-x-4">
                                {filteredData[0].available.map((item) => {
                                    return (
                                        <li
                                            key={nanoid()}
                                            className="flex items-center gap-2 font-[400] text-[14px]"
                                        >
                                            <div className="w-[4px] h-[4px] rounded-full bg-[#525252]"></div>
                                            {item}
                                        </li>
                                    );
                                })}
                            </ul>

                            <div className="flex items-center gap-4 p-2 justify-end md:justify-start">
                                <button className="outline-btn border-[1px] border-primary">
                                    <span>Edit course</span>
                                </button>
                                <button className="outline-btn border-[1px] border-primary">
                                    Mark as approved
                                </button>
                                <Drawer
                            closable={false}
                            onClose={open}
                            open={open}
                            width={`100%`}
                        >
                            <CreateCourse open={open} setOpen={setOpen} />
                        </Drawer>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col p-4 flex gap-2 md:hidden">
                    <ul className="flex flex-wrap gap-x-4">
                        {filteredData[0].available.map((item) => {
                            return (
                                <li
                                    key={nanoid()}
                                    className="flex items-center gap-2 font-[400] text-[14px]"
                                >
                                    <div className="w-[4px] h-[4px] rounded-full bg-[#525252]"></div>
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex">
                        <button
                            onClick={() => setOpen(true)}
                            className="bg-white text-primary rounded-[4px] px-4 py-2 border-[1px] border-primary font-medium text-sm flex gap-2 items-center justify-center"
                        >
                            <img src={edit} alt="" />
                            <span>Edit Course</span>
                        </button>
                    </div>
                </div>
                <div className=" bg-white">
                    <Tabs
                        tabBarStyle={{
                            borderBottom: "1px solid #e6f4ff",
                            position: "sticky",
                            top: "0",
                            background: "white",
                            zIndex: 10,
                            marginTop: 0,
                            paddingLeft: "10px",
                        }}
                        defaultActiveKey="1"
                        items={items}
                        onChange={onChange}
                    />
                </div>
            </div>
        </section>
    );
};

export default AddedCourseSingle;
