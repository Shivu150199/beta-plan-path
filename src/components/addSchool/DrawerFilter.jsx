import { Tabs } from "antd";
import React, { useContext, useState } from "react";
import { search } from "../../assets/course";
import { CourseContext } from "../../context api/CourseContext";
import { Course } from "../../pages/course";

const DrawerFilter = ({filterData,onCloseFilter,handleFilter,handleFilterChange}) => {
    

    return (
        <section className=" flex flex-col justify-between">
            <h2 className="p-2 text-dark_violet font-medium text-lg border-b-[1px]">
                Filters
            </h2>
            <Tabs
                tabBarStyle={{
                    width: "10rem",
                    backgroundColor: "#f5f5f7",
                    height: "calc(100vh - 95px)",
                }}
                defaultActiveKey="1"
                tabPosition="left"
                items={filterData.map((obj, i) => {
                    const id = String(i + 1);
                    return {
                        label: obj.title,
                        key: id,
                        children: <FilterSearch list={obj.filterType} handleFilterChange={handleFilterChange} />,
                    };
                })}
            />
            <div className="flex items-center gap-4 p-2 justify-end">
                <button
                    onClick={onCloseFilter}
                    className="outline-btn border-[1px] border-primary"
                >
                    Close
                </button>
                <button onClick={handleFilter} className="primary-btn">
                    Apply
                </button>
            </div>
        </section>
    );
};

export default DrawerFilter;

const FilterSearch = ({ list ,handleFilterChange}) => {
   

    return (
        <form action="" className=" flex flex-col gap-4 pr-6">
            <div className="bg-[#f5f5f7] flex items-center justify-between px-4 rounded mt-6">
                <input
                    type="text"
                    placeholder="Search course level"
                    className="w-full bg-transparent p-2 outline-none"
                />
                <img src={search} alt="" />
            </div>

            <div className="flex flex-col gap-6">
                {list.map((item, i) => {
                    return (
                        <label
                            key={i}
                            className="flex items-center gap-2"
                            htmlFor={item.name}
                        >
                            <input
                                checked={item.checked}
                                type="checkbox"
                                className="w-[20px] h-[20px] border-[#D0D0D0] border-[1px] "
                                id={item.name}
                                onChange={handleFilterChange}
                            />
                            <span className="font-normal text-[14px]">
                                {item.name}{" "}
                                <span className="text-[10px]">
                                    ({item.total})
                                </span>
                            </span>
                        </label>
                    );
                })}
            </div>
        </form>
    );
};
