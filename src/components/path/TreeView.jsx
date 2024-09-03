import React, { useContext } from "react";
import { wrong } from "../../assets/pricing";
import { arrowpath, smallarrow, smArraow } from "../../assets/path";
import { PathContext } from "../../context api/PathContext";
import { nanoid } from "nanoid";
import FooterButton from "./FooterButton";

const TreeView = () => {
    const { tree, handleDeleteItem } = useContext(PathContext);
    const { ninth, tenth, eleventh, twelth } = tree;

    const renderPathItems = (items, grade, color) => {
        return items.map((item) => (
            <div
                key={nanoid()}
                className="p-2 border-[1px] rounded-md flex flex-col gap-1"
            >
                <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <div
                            className={`w-3 h-3 bg-[${color}] rounded-sm`}
                        ></div>
                        <h2 className="text-base font-medium text-paraColor">
                            {item.sub}
                        </h2>
                    </div>
                    <button onClick={() => handleDeleteItem(grade, item.id)}>
                        <img src={wrong} alt="Delete" />
                    </button>
                </div>
                <p className="text-[12px] font-normal text-paraColor flex gap-2">
                    <span>Code {item.code}</span>
                    <span>
                        Offered credits: {item.credit || item.crScore} Cr.
                    </span>
                </p>
            </div>
        ));
    };

    const renderPathArticle = (path, grade, color, borderClass, bgColor) => (
        <article
            className={`border-[1px] rounded-md w-96 my-16 p-2 flex flex-col gap-2 ${borderClass} relative`}
        >
            <div className="flex items-center justify-between">
                <h3 className="text-[24px] font-bold">{path.title}</h3>
                <button className="text-primary font-medium text-sm">
                    Edit
                </button>
            </div>
            {renderPathItems(path.data, grade, color)}
            <div className={`border-[1px] p-2 rounded-md ${bgColor}`}>
                <h2 className="text-base font-medium">Total Credit</h2>
                <p className={`text-xl font-medium text-[${color}]`}>
                    {path.total}
                </p>
            </div>
        </article>
    );

    return (
        <>
            <div className="p-4 bg-white min-h-screen lg:flex flex-col items-center hidden">
                <h1 className="text-center text-2xl font-bold border-[1px] border-dark_violet p-1 rounded-md bg-[#EEE9FF] text-dark_violet">
                    Your learning path for high school
                </h1>
                <div className="w-full flex justify-center">
                    <div>
                        {renderPathArticle(
                            ninth,
                            "ninth",
                            "#F89706",
                            "ninth border-l-[4px] border-l-[#F89706] mb-40",
                            "bg-[#FFF6E9]"
                        )}
                        {renderPathArticle(
                            eleventh,
                            "eleventh",
                            "#17A8ED",
                            "ninth border-l-[4px] border-l-[#17A8ED]",
                            "bg-[#EBF8FF]"
                        )}
                    </div>
                    <div className="w-72 flex justify-center flex-col items-center -mt-[55px]">
                        <h2 className="rotate-90 relative top-[40%] w-full text-nowrap left-6 text-[20px] font-medium">
                            Academic / Career skills, Good paying jobs
                        </h2>
                        <img
                            src={smArraow}
                            alt=""
                            className="relative top-[10%]"
                        />
                        <img
                            src={smArraow}
                            alt=""
                            className="relative top-[20%]"
                        />
                        <img
                            src={smArraow}
                            alt=""
                            className="relative top-[40%]"
                        />
                        <img
                            src={smArraow}
                            alt=""
                            className="relative top-[50%]"
                        />
                        <img
                            src={smArraow}
                            alt=""
                            className="relative top-[70%]"
                        />
                        <img src={smallarrow} alt="" className="relative" />
                        <img src={smallarrow} alt="" className="relative" />
                        <img src={smallarrow} alt="" className="relative" />
                        <img src={smallarrow} alt="" className="relative" />
                        <div className="w-2 h-2 bg-paraColor rounded-full"></div>
                        <div className="h-full w-[2px] bg-slate-600"></div>
                        <img src={arrowpath} alt="" className="mt-[-10px]" />
                        <p className="text-dark_violet font-medium text-lg">
                            College
                        </p>
                    </div>
                    <div>
                        {renderPathArticle(
                            tenth,
                            "tenth",
                            "#F95515",
                            "tenth border-r-[4px] border-r-[#F95515] my-40",
                            "bg-[#FFEEE8]"
                        )}
                        {renderPathArticle(
                            twelth,
                            "twelth",
                            "#2FAF47",
                            "tenth border-r-[4px] border-r-[#2FAF47]",
                            "bg-[#E3F9E7]"
                        )}
                    </div>
                </div>
                
            </div>

            <div className="lg:hidden flex gap-4 justify-between flex-wrap mx-4">
                {renderPathArticle(
                    ninth,
                    "ninth",
                    "#F89706",
                    " border-l-[4px] border-l-[#F89706] w-full md:w-[70%] my-4",
                    "bg-[#FFF6E9]"
                )}
                {renderPathArticle(
                    eleventh,
                    "eleventh",
                    "#17A8ED",
                    " border-l-[4px] border-l-[#17A8ED] w-full md:w-[70%] my-4",
                    "bg-[#EBF8FF]"
                )}
                {renderPathArticle(
                    tenth,
                    "tenth",
                    "#F95515",
                    " border-r-[4px] border-r-[#F95515] w-full md:w-[70%] my-4",
                    "bg-[#FFEEE8]"
                )}
                {renderPathArticle(
                    twelth,
                    "twelth",
                    "#2FAF47",
                    " border-r-[4px] border-r-[#2FAF47] w-full md:w-[70%] my-4",
                    "bg-[#E3F9E7]"
                )}
            </div>
                <FooterButton/>
        </>
    );
};

export default TreeView;
