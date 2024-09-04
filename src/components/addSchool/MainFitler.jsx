import React, { useContext } from "react";

import { CourseContext } from "../../context api/CourseContext";
import { FilterList } from "../course";
import ListFilter from "./ListFIlter";

const MainFilter = ({filterData,handleFilterChange}) => {

    return (
        <div className="min-w-[250px] filter flex-[.25]  hidden md:flex flex-col border-r-[1px] overflow-auto no-scrollbar relative rounded-tl-md">
            <div className="flex items-center justify-between p-2 border-b-slate-200 border-b-[1px] sticky top-0 bg-white z-10">
                <h2 className="text-[19px] font-bold text-[#31225C]">
                    Filters
                </h2>
                <button className="text-[14px] font-medium text-primary">
                    Clear filter
                </button>
            </div>

            {/* filter section */}

            {filterData.map((item) => {
                return (
                    <ListFilter
                        key={item.id}
                        title={item.title}
                        filtersList={item.filterType}
                        handleFilterChange={handleFilterChange}
                    />
                );
            })}
        </div>
    );
};

export default MainFilter;
