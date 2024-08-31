import React, { useState } from "react";
import CompleteCourseModal from "./CompleteCourseModal";

const FaqList = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleCollapse = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const handleInputClick = (event) => {
        event.stopPropagation();
    };
    return (
        <div className="flex flex-col gap-2 lg:w-[70%] p-4 ">
            <div className="p-2 flex items-center justify-between">
                <h2 className="text-[18px] font-[500] text-dark_gray">
                    Frequently asked{" "}
                </h2>
                <button className="text-primary font-medium  bg-none">
                    Add F&Q
                </button>
            </div>
            <div className="flex flex-col gap-2 pb-16 ">
                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        tabIndex={0}
                        className={`collapse collapse-arrow border-base-300 bg-white border w-full rounded-md ${
                            activeIndex === index ? "collapse-open" : ""
                        }`}
                        onClick={() => toggleCollapse(index)}
                    >
                        <div className="collapse-title text-base text-dark_violet font-medium">
                            Focus me to see content
                        </div>
                        {activeIndex === index && (
                            <div className="collapse-content">
                                <div className="bg-creambg p-4 flex gap-4 flex-col border-[1px] rounded-md">
                                    <input
                                        onClick={handleInputClick}
                                        type="text"
                                        placeholder="Add a question: i.e. Do you translate to english as well?"
                                        className="input input-bordered rounded-[4px] placeholder:text-sm"
                                    />
                                    <textarea
                                        placeholder="Add a question: i.e. Do you translate to english as well?"
                                        onClick={handleInputClick}
                                        className="input input-bordered h-20 resize-none rounded-[4px] placeholder:text-sm"
                                    ></textarea>
                                    <div className="flex items-center gap-4 justify-end">
                                        <button className="outline-btn">
                                            Delete
                                        </button>
                                        <button className="outline-btn">
                                            Cancel
                                        </button>
                                        <button className="primary-btn">
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <CompleteCourseModal />
        </div>
    );
};

export default FaqList;
