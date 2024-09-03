import React, { useContext } from "react";
import Navigation from "../../components/Navigation";
import { EmptyCart } from "../../components/cart";
import { EmptyPath } from "../../components/path";
import { BreadCrumb } from "../../components/utils";
import { PathContext } from "../../context api/PathContext";
import { pathlogo } from "../../assets/path";

const Path = () => {
    const { myPathBreadCrumb } = useContext(PathContext);
    const grades = [
        {
            grade: "9th Grade",
            color: "orange",
            courses: [
                /* your course data */
            ],
        },
        {
            grade: "10th Grade",
            color: "red",
            courses: [
                /* your course data */
            ],
        },
        {
            grade: "11th Grade",
            color: "green",
            courses: [
                /* your course data */
            ],
        },
        {
            grade: "12th Grade",
            color: "blue",
            courses: [
                /* your course data */
            ],
        },
    ];
    return (
        <section className="bg-creambg w-[100%] ">
            <BreadCrumb list={myPathBreadCrumb} />
            {/* <EmptyPath /> */}
            <section className="bg-white">
                <div className="flex items-center justify-between p-4 border-b-[1px]">
                    <h2 className="text-2xl font-bold text-dark_violet">
                        Generate plan
                    </h2>
                    <div className="flex items-center gap-4">
                        <button className="outline-btn border-[1px] border-primary">
                            Data table view
                        </button>
                        <button className="outline-btn border-[1px] border-primary">
                            Share
                        </button>
                        <button className="outline-btn border-[1px] border-primary">
                            Download
                        </button>
                        <button className="primary-btn border-[1px] border-primary">
                            Edit
                        </button>
                    </div>
                </div>
                <div className="flex items-start justify-between p-4">
                    <img src={pathlogo} alt="" />
                    <h2 className="text-[36px] font-bold  text-center flex flex-col items-center justify-center">
                        {" "}
                        <span className="text-dark_violet">
                            {" "}
                            Course progression
                        </span>{" "}
                        <span className="text-[#F54746]">recommendation</span>
                    </h2>
                    <p>Created on: 20/06/2024</p>
                </div>
                {/*  */}

                <div className="p-4 bg-gray-50 min-h-screen flex flex-col items-center">
                    <h1 className="text-center text-2xl font-bold border-[1px] border-dark_violet p-1 rounded-md bg-[#EEE9FF] text-dark_violet">
                        Your learning path for high school
                    </h1>
                    <div className="w-[100%] flex justify-center pt-20">
                        <div className="">
                            <article className="bg-blue-500 w-72  h-96 relative before:content-[''] before:absolute before:top-0 before:left-[50%] before:w-full before:h-[50%] before:border-[2px] before:border-black before:rounded-br-[60px] before:-z-10"></article>
                            <article className="bg-blue-500 w-72 h-96 relative before:content-[''] before:absolute before:top-0 before:left-[50%] before:w-full before:h-[50%] before:border-[2px] before:border-black before:rounded-br-[60px] before:-z-10 mt-28"></article>
                        </div>
                        <div className="w-72"></div>
                        <div className="">
                            <article className="bg-blue-500 w-72 h-96 relative before:content-[''] before:absolute before:top-0 before:right-[50%] before:w-full before:h-[50%] before:border-l-[2px] before:border-b-[2px] before:border-primary before:rounded-bl-[60px] before:-z-10 mt-28"></article>
                            <article className="bg-red-500 w-72 h-96 relative before:content-[''] before:absolute before:top-0 before:right-[50%] before:w-full before:h-[50%] before:border-l-[2px] before:border-b-[2px] before:border-primary before:rounded-bl-[60px] before:-z-10 mt-28"></article>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Path;
