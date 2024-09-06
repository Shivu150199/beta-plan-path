import React, { useContext } from "react";
import { hzViewIcon, vtViewIcon } from "../../assets/course";
import { Tag } from "antd";
import HorizontalCourseCard from "./HorizontalCourseCard";
import VerticalCourseCard from "./VerticalCourseCard";
import { AddSchoolContext } from "../../context api/AddSchoolContext";

const AllCardContainer = ({ formData, schoolData, handleCourse }) => {
    const { isVertical, setIsVertical } = useContext(AddSchoolContext);

    const handleToggleView = () => {
        setIsVertical(prevState => !prevState);
    };

    const handleTagClose = (removedTag) => {
        // Implement the logic to handle tag removal from formData
    };

    return (
        <div className="main p-2 pt-0 md:p-0 flex-auto overflow-auto no-scrollbar h-full rounded-md">
            <div className="flex items-center justify-between w-full border-b-[1px] md:px-4 px-2 py-2 sticky top-0 bg-white z-10">
                <p className="text-[13px] text-[#525252] font-[700]">
                    Showing 1-100 of 2332 results
                </p>

                <div className="flex items-center gap-4">
                    <div className="hidden items-center gap-2 md:flex">
                        <label htmlFor="sort" className="text-primary font-medium text-sm">Sort by:</label>
                        <select name="sort" id="sort" className="item-select text-primary text-sm font-medium outline-none w-36">
                            <option value="" disabled>Recommended</option>
                        </select>
                    </div>
                    <label className="hidden md:flex items-center gap-2">
                        <span className="text-[13px] text-[#525252] font-[500]">Items per page:</span>
                        <select
                            name="itemsPerPage"
                            id="itemsPerPage"
                            className="item-select py-1 px-2 border-[1px] border-primary text-primary outline-none rounded-[4px] text-[13px] font-[500] w-14"
                        >
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                        </select>
                    </label>
                    <button
                        className="gap-2 items-center hidden lg:flex"
                        onClick={handleToggleView}
                    >
                        {isVertical ? (
                            <>
                                <img src={hzViewIcon} alt="Horizontal View" />
                                <span className="text-[13px] text-primary font-md capitalize">Vertical View</span>
                            </>
                        ) : (
                            <>
                                <img src={vtViewIcon} alt="Vertical View" />
                                <span className="text-[13px] text-primary font-md capitalize">Horizontal View</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            <div className="flex w-full gap-2 bg-white px-4 sticky md:top-[46px] top-[36px]">
                {formData &&
                    Object.entries(formData).map(([key, value], i) => (
                        <Tag key={i} bordered closable onClose={() => handleTagClose(key)} className="my-2">
                            {key}
                        </Tag>
                    ))}
            </div>

            {isVertical ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-auto no-scrollbar md:px-4 pt-4">
                    {schoolData.map((item) => (
                        <HorizontalCourseCard key={item.id} item={item} handleCourse={handleCourse} />
                    ))}
                </div>
            ) : (
                <div className="flex lg:flex-col gap-4 h-[72vh] overflow-auto no-scrollbar p-4">
                    {schoolData.map((item) => (
                        <VerticalCourseCard key={item.id} item={item} handleCourse={handleCourse} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllCardContainer;
