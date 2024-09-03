import React, { useContext } from "react";
import Navigation from "../../components/Navigation";
import { EmptyCart } from "../../components/cart";
import { EmptyPath } from "../../components/path";
import { BreadCrumb } from "../../components/utils";
import { PathContext } from "../../context api/PathContext";
import { arrowpath, pathlogo, pdf, share, smallarrow, smArraow, table } from "../../assets/path";
import { wrong } from "../../assets/pricing";

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
                        <button className="outline-btn border-[1px] border-primary flex items-center gap-1">
                            <img src={table} alt="" />
                           <span> Data table view</span>
                        </button>
                        <button className="outline-btn border-[1px] border-primary flex items-center gap-2">
                            <img src={share} alt="" />
                       <span> Share</span>    
                        </button>
                        <button className="outline-btn border-[1px] border-primary flex items-center gap-1">
                            <img src={pdf} alt="" />
                            <span>Download</span>

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

                <div className="p-4 bg-white min-h-screen flex flex-col items-center">
                    <h1 className="text-center text-2xl font-bold border-[1px] border-dark_violet p-1 rounded-md bg-[#EEE9FF] text-dark_violet">
                        Your learning path for high school
                    </h1>
                    <div className="w-[100%] flex justify-center">
                        <div className="">
                            <article className="ninth border-[1px] rounded-md w-96 my-16 p-2 flex flex-col gap-2 border-l-[4px] border-l-[#F89706] relative">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-[24px] font-bold">
                                        9th Grade
                                    </h3>
                                    <button className="text-primary font-medium text-sm">
                                        Edit
                                    </button>
                                </div>
                                <div className="p-2 border-[1px] rounded-md flex flex-col gap-1">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
                                            <h2 className="text-base font-medium text-paraColor">
                                                English 1 for Credit Recovery ,
                                                [FL]
                                            </h2>
                                        </div>

                                        <button>
                                            <img src={wrong} alt="" />
                                        </button>
                                    </div>
                                    <p className="text-[12px] font-normal text-paraColor flex gap-2">
                                        <span>Code CS102</span>
                                        <span>offered credits : 4Cr.</span>
                                    </p>
                                </div>
                                {/*  */}
                                <div className="p-2 border-[1px] rounded-md flex flex-col gap-1">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
                                            <h2 className="text-base font-medium text-paraColor">
                                                English 1 for Credit Recovery ,
                                                [FL]
                                            </h2>
                                        </div>

                                        <button>
                                            <img src={wrong} alt="" />
                                        </button>
                                    </div>
                                    <p className="text-[12px] font-normal text-paraColor flex gap-2">
                                        <span>Code CS102</span>
                                        <span>offered credits : 4Cr.</span>
                                    </p>
                                </div>
                                {/*  */}
                                <div className="p-2 border-[1px] rounded-md flex flex-col gap-1">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <div className="w-3 h-3 bg-[#F89706] rounded-sm"></div>
                                            <h2 className="text-base font-medium text-paraColor">
                                                English 1 for Credit Recovery ,
                                                [FL]
                                            </h2>
                                        </div>

                                        <button>
                                            <img src={wrong} alt="" />
                                        </button>
                                    </div>
                                    <p className="text-[12px] font-normal text-paraColor flex gap-2">
                                        <span>Code CS102</span>
                                        <span>offered credits : 4Cr.</span>
                                    </p>
                                </div>
                                {/*  */}
                                <div className="border-[1px] border-[#F89706] p-2 rounded-md">
                                    <h2 className="text-base font-medium text-paraColor">Total Credit</h2>
                                    <p className="text-lg text-[#F89706]">40</p>
                                </div>

                                {/*  */}
                            </article>
                            <article className="eleventh border-[1px] rounded-md w-96 my-44 p-2 flex flex-col gap-2 border-l-[4px] border-l-[#17A8ED] relative">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-[24px] font-bold">
                                        12th Grade
                                    </h3>
                                    <button className="text-primary font-medium text-sm">
                                        Edit
                                    </button>
                                </div>
                                <div className="p-2 border-[1px] rounded-md flex flex-col gap-1">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <div className="w-3 h-3 bg-[#17A8ED] rounded-sm"></div>
                                            <h2 className="text-base font-medium text-paraColor">
                                                English 1 for Credit Recovery ,
                                                [FL]
                                            </h2>
                                        </div>

                                        <button>
                                            <img src={wrong} alt="" />
                                        </button>
                                    </div>
                                    <p className="text-[12px] font-normal text-paraColor flex gap-2">
                                        <span>Code CS102</span>
                                        <span>offered credits : 4Cr.</span>
                                    </p>
                                </div>
                                {/*  */}
                                <div className="p-2 border-[1px] rounded-md flex flex-col gap-1">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <div className="w-3 h-3 bg-[#17A8ED] rounded-sm"></div>
                                            <h2 className="text-base font-medium text-paraColor">
                                                English 1 for Credit Recovery ,
                                                [FL]
                                            </h2>
                                        </div>

                                        <button>
                                            <img src={wrong} alt="" />
                                        </button>
                                    </div>
                                    <p className="text-[12px] font-normal text-paraColor flex gap-2">
                                        <span>Code CS102</span>
                                        <span>offered credits : 4Cr.</span>
                                    </p>
                                </div>
                                {/*  */}
                                <div className="p-2 border-[1px] rounded-md flex flex-col gap-1">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <div className="w-3 h-3 bg-[#17A8ED] rounded-sm"></div>
                                            <h2 className="text-base font-medium text-paraColor">
                                                English 1 for Credit Recovery ,
                                                [FL]
                                            </h2>
                                        </div>

                                        <button>
                                            <img src={wrong} alt="" />
                                        </button>
                                    </div>
                                    <p className="text-[12px] font-normal text-paraColor flex gap-2">
                                        <span>Code CS102</span>
                                        <span>offered credits : 4Cr.</span>
                                    </p>
                                </div>
                                {/*  */}
                                <div className="border-[1px] border-[#17A8ED] p-2 rounded-md">
                                    <h2>Total Credit</h2>
                                    <p>40</p>
                                </div>

                                {/*  */}
                            </article>
                        </div>
                        <div className="w-72 flex justify-center flex-col items-center -mt-[55px] ">
                            <h2 className="rotate-90 relative top-[40%] w-full text-nowrap left-6 text-[20px] font-medium">Academic / Career skiils, Good paying jobs</h2>

{/*  */}
<img src={smArraow} alt="" className="relative top-[10%] " />
<img src={smArraow} alt="" className="relative top-[20%] " />
<img src={smArraow} alt="" className="relative top-[40%]" />
<img src={smArraow} alt="" className="relative top-[50%] " />
<img src={smArraow} alt="" className="relative top-[70%] " />
{/*  */}

                            <img
                                src={smallarrow}
                                alt=""
                                className="relative"
                            />{" "}
                            <img
                                src={smallarrow}
                                alt=""
                                className="relative"
                            />{" "}
                            <img
                                src={smallarrow}
                                alt=""
                                 className="relative"
                            />{" "}
                            <img
                                src={smallarrow}
                                alt=""
                                 className="relative"
                            />
                            <div className="w-2 h-2 bg-paraColor rounded-full"></div>
                            <div className="h-full w-[2px] bg-slate-600"></div>
                            <img
                                src={arrowpath}
                                alt=""
                                className="mt-[-10px]"
                            />
                            <p className="text-dark_violet font-medium text-lg">
                                College
                            </p>
                        </div>
                        <div className="">
                            <article className="tenth border-[1px] rounded-md w-96 my-44 p-2 flex flex-col gap-2 border-r-[4px] border-r-[#F95515] relative">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-[24px] font-bold">
                                        12th Grade
                                    </h3>
                                    <button className="text-primary font-medium text-sm">
                                        Edit
                                    </button>
                                </div>
                                <div className="p-2 border-[1px] rounded-md flex flex-col gap-1">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <div className="w-3 h-3 bg-[#F95515] rounded-sm"></div>
                                            <h2 className="text-base font-medium text-paraColor">
                                                English 1 for Credit Recovery ,
                                                [FL]
                                            </h2>
                                        </div>

                                        <button>
                                            <img src={wrong} alt="" />
                                        </button>
                                    </div>
                                    <p className="text-[12px] font-normal text-paraColor flex gap-2">
                                        <span>Code CS102</span>
                                        <span>offered credits : 4Cr.</span>
                                    </p>
                                </div>
                                {/*  */}
                                <div className="p-2 border-[1px] rounded-md flex flex-col gap-1">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <div className="w-3 h-3 bg-[#F95515] rounded-sm"></div>
                                            <h2 className="text-base font-medium text-paraColor">
                                                English 1 for Credit Recovery ,
                                                [FL]
                                            </h2>
                                        </div>

                                        <button>
                                            <img src={wrong} alt="" />
                                        </button>
                                    </div>
                                    <p className="text-[12px] font-normal text-paraColor flex gap-2">
                                        <span>Code CS102</span>
                                        <span>offered credits : 4Cr.</span>
                                    </p>
                                </div>
                                {/*  */}
                                <div className="p-2 border-[1px] rounded-md flex flex-col gap-1">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <div className="w-3 h-3 bg-[#F95515] rounded-sm"></div>
                                            <h2 className="text-base font-medium text-paraColor">
                                                English 1 for Credit Recovery ,
                                                [FL]
                                            </h2>
                                        </div>

                                        <button>
                                            <img src={wrong} alt="" />
                                        </button>
                                    </div>
                                    <p className="text-[12px] font-normal text-paraColor flex gap-2">
                                        <span>Code CS102</span>
                                        <span>offered credits : 4Cr.</span>
                                    </p>
                                </div>
                                {/*  */}
                                <div className="border-[1px] border-[#F95515] p-2 rounded-md">
                                    <h2>Total Credit</h2>
                                    <p>40</p>
                                </div>

                                {/*  */}
                            </article>
                            <article className="twelth border-[1px] rounded-md w-96 mt-16 p-2 flex flex-col gap-2 border-r-[4px] border-r-[#2FAF47] relative">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-[24px] font-bold">
                                        12th Grade
                                    </h3>
                                    <button className="text-primary font-medium text-sm">
                                        Edit
                                    </button>
                                </div>
                                <div className="p-2 border-[1px] rounded-md flex flex-col gap-1">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <div className="w-3 h-3 bg-[#2FAF47] rounded-sm"></div>
                                            <h2 className="text-base font-medium text-paraColor">
                                                English 1 for Credit Recovery ,
                                                [FL]
                                            </h2>
                                        </div>

                                        <button>
                                            <img src={wrong} alt="" />
                                        </button>
                                    </div>
                                    <p className="text-[12px] font-normal text-paraColor flex gap-2">
                                        <span>Code CS102</span>
                                        <span>offered credits : 4Cr.</span>
                                    </p>
                                </div>
                                {/*  */}
                                <div className="p-2 border-[1px] rounded-md flex flex-col gap-1">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <div className="w-3 h-3 bg-[#2FAF47] rounded-sm"></div>
                                            <h2 className="text-base font-medium text-paraColor">
                                                English 1 for Credit Recovery ,
                                                [FL]
                                            </h2>
                                        </div>

                                        <button>
                                            <img src={wrong} alt="" />
                                        </button>
                                    </div>
                                    <p className="text-[12px] font-normal text-paraColor flex gap-2">
                                        <span>Code CS102</span>
                                        <span>offered credits : 4Cr.</span>
                                    </p>
                                </div>
                                {/*  */}
                                <div className="p-2 border-[1px] rounded-md flex flex-col gap-1">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <div className="w-3 h-3 bg-[#2FAF47] rounded-sm"></div>
                                            <h2 className="text-base font-medium text-paraColor">
                                                English 1 for Credit Recovery ,
                                                [FL]
                                            </h2>
                                        </div>

                                        <button>
                                            <img src={wrong} alt="" />
                                        </button>
                                    </div>
                                    <p className="text-[12px] font-normal text-paraColor flex gap-2">
                                        <span>Code CS102</span>
                                        <span>offered credits : 4Cr.</span>
                                    </p>
                                </div>
                                {/*  */}
                                <div className="border-[1px] border-[#2FAF47] p-2 rounded-md">
                                    <h2>Total Credit</h2>
                                    <p>40</p>
                                </div>

                                {/*  */}
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Path;
