import React from "react";
import { TruncatedParagraph } from "../course/CourseDesc";

const AddedCourseDescription = ({ courseDescription }) => {
    return (
        <div className="p-4 min-h-[50vh]">
            <h2 className="text-[#31225C] font-[700] text-[22px]">
                Course Description
            </h2>

            <TruncatedParagraph text={courseDescription} limit={500} />
        </div>
    );
};

export default AddedCourseDescription;
