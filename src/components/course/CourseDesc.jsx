import React, { useState } from "react";

const CourseDesc = ({ courseDescription }) => {
    return (
        <div className="p-4">
            <h2 className="text-[#31225C] font-[700] text-[22px]">
                Course Description
            </h2>

            <TruncatedParagraph text={courseDescription} limit={500} />
        </div>
    );
};

export default CourseDesc;

export const TruncatedParagraph = ({ text, limit }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const truncatedText =
        text.length > limit ? text.substring(0, limit) + "..." : text;

    return (
        <div className="text-[13px] font-[400] text-[#525252] mt-2 md:w-[75%]">
            <span>{isExpanded ? text : truncatedText}</span>
            {text.length > limit && (
                <button
                    onClick={toggleExpansion}
                    className="text-primary font-bold"
                >
                    {isExpanded ? "Show Less" : "Show More"}
                </button>
            )}
        </div>
    );
};
