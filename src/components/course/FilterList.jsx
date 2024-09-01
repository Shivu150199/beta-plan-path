import React, { useContext, useState } from "react";
import { search } from "../../assets/course";
import { nanoid } from "nanoid";
import { CourseContext } from "../../context api/CourseContext";

const FilterList = ({ title, filtersList }) => {
    const [showAll, setShowAll] = useState(false);

    // console.log(filtersList);
    const itemToshow = showAll ? filtersList : filtersList.slice(0, 4);
    const handleToggleShow = () => {
        setShowAll((prevShowAll) => !prevShowAll);
    };

    // const [localFilters, setLocalFilters] = useState(
    //     filtersList.map((filter) => ({ ...filter }))
    // );

    // const handleCheckboxChange = (id) => {
    //     const updatedFilters = itemToshow.map((filter) =>
    //         filter.id === id ? { ...filter, checked: !filter.checked } : filter
    //     );
    // };

    return (
        <div className="p-2 border-b-[1px] border-[#D0D0D0]">
            <div className="flex items-center justify-between py-2">
                <h3 className="font-[700] text-[#31225C]">{title}</h3>
                <button className="">
                    <img src={search} alt="" className="w-[14px] h-[14px]" />
                </button>
            </div>
            <ul className="flex flex-col ">
                {itemToshow.map((list) => {
                    const { total, name } = list;
                    const id = nanoid();
                    return (
                        <li key={id} className="py-2">
                            <label
                                className="flex items-center gap-2"
                                htmlFor={name}
                            >
                                <input
                                    // checked
                                    type="checkbox"
                                    className="w-[20px] h-[20px] border-[#D0D0D0] border-[1px] "
                                    id={name}
                                    // onChange={handleCourseFilter}
                                />
                                <span className="font-[400] text-[14px]">
                                    {name} <span>({total})</span>
                                </span>
                            </label>
                        </li>
                    );
                })}
            </ul>
            {filtersList.length > 4 && (
                <div className="flex justify-end mt-2">
                    <button
                        onClick={handleToggleShow}
                        className="text-primary capitalize text-sm font-medium"
                    >
                        {showAll ? "Show Less" : "Show More"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default FilterList;
