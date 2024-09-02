import React from "react";
import { rightarrow } from "../../assets/dashboard";

const CourseDetailCard = ({ item }) => {
    return (
        <div className="flex flex-col gap-4 p-4 border-[1px] rounded-md min-w-[115px]">
            <h4 className="text-[#4b4b4b] text-base font-medium">
                {item.title}
            </h4>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-dark_violet">
                    {item.count}
                </span>
                <button>
                    <img src={rightarrow} alt="" />
                </button>
            </div>
        </div>
    );
};

export default CourseDetailCard;
