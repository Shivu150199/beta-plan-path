import React, { useContext, useEffect, useState } from "react";
import VerticalCard from "./VerticalCard";
import { CourseContext } from "../../context api/CourseContext";
import { hzViewIcon, vtViewIcon } from "../../assets/course";
import { Tabs, Tag } from "antd";
import { HzCard, VtCard } from ".";

const CourseCardList = () => {
    const [openFilter, setOpenFilter] = useState(false);
    const {
        coursesData,
        courseTabs,
        onChangeTabs,
        isVertical,
        setIsVertical,
        formData,
        handleCompare
    } = useContext(CourseContext);

    const showFilter = () => {
        setOpenFilter(true);
    };
    const onCloseFilter = () => {
        setOpenFilter(false);
    };

    const onChange = (key) => {};

    return (
        <div className="main p-2 pt-0 md:p-0 flex-auto overflow-auto no-scrollbar h-full relative">
            <div className="items-center justify-between w-[100%] flex border-b-[1px] md:px-4 px-2 py-2 sticky top-0 bg-white z-10">
                <p className="text-[13px] text-[#525252] font-[700]">
                    Showing 1-100 of 2332 results
                </p>
                <div className="flex items-center gap-4">
                    <label className="hidden md:flex items-center gap-2">
                        <span className="text-[13px] text-[#525252] font-[500] ">
                            Item per page :{" "}
                        </span>
                        <select
                            name=""
                            id=""
                            className="item-select py-1 px-2 border-[1px] border-primary text-primary outline-none rounded-[4px] text-[13px] font-[500] w-14"
                        >
                            <option value="">25</option>
                            <option value="">26</option>
                            <option value="">27</option>
                            <option value="">28</option>
                            <option value="">29</option>
                        </select>
                    </label>
                    <button
                        className="gap-2 items-center hidden  lg:flex"
                        onClick={() => setIsVertical(!isVertical)}
                        // add hidden
                    >
                        {isVertical ? (
                            <>
                                {" "}
                                <img src={hzViewIcon} alt="view" />
                                <span className="text-[13px] text-primary font-md capitalize">
                                    Vertical View
                                </span>
                            </>
                        ) : (
                            <>
                                <img src={vtViewIcon} alt="view" />
                                <span className="text-[13px] text-primary font-md capitalize">
                                    horizontal View
                                </span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            <div className="flex w-full gap-2 bg-white px-4 sticky md:top-[46px] top-[36px]">
                {formData &&
                    Object.entries(formData).map(([key, value], i) => {
                        return (
                            <Tag key={i} bordered closable className="my-2">
                                {key}
                            </Tag>
                        );
                    })}
            </div>
            <Tabs
                defaultActiveKey="1"
                items={courseTabs}
                onChange={onChangeTabs}
                className={`hidden md:block px-4 sticky ${
                    Boolean(formData) ? "top-[79px]" : "top-[46px]"
                } border-b-[1px] bg-white`}
            />

            {isVertical ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  overflow-auto no-scrollbar md:px-4">
                    {coursesData.map((item, index) => {
                        return (
                            <HzCard
                                key={index}
                                title={item.title}
                                about={item.about}
                                image={item.image}
                                available={item.available}
                                credit={item.credit}
                                desc={item.desc}
                                rating={item.rating}
                                id={item.id}
                                totalRating={item.totalRating}
                                handleCompare={handleCompare}
                            />
                        );
                    })}
                </div>
            ) : (
                <div className="flex lg:flex-col gap-4 h-[60vh] overflow-auto no-scrollbar p-4">
                    {coursesData.map((item, index) => {
                        return (
                            <VtCard
                                key={index}
                                title={item.title}
                                about={item.about}
                                image={item.image}
                                available={item.available}
                                credit={item.credit}
                                desc={item.desc}
                                rating={item.rating}
                                totalRating={item.totalRating}
                                id={item.id}
                                handleCompare={handleCompare}
                            />
                        );
                    })}
                </div>
            )}


        </div>
    );
};

export default CourseCardList;
