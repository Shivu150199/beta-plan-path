import { nanoid } from "nanoid";
import React, { useContext } from "react";

import { emptystar, fillstar } from "../../assets/course";
import { CourseContext } from "../../context api/CourseContext";
import { Link } from "react-router-dom";
const HorizontalCard = ({
    title,
    credit,
    image,
    available,
    about,
    desc,
    rating,
    totalRating,
    id,
}) => {
    const { isVertical, setIsVertical } = useContext(CourseContext);
    return (
        <div
            className={`flex ${
                isVertical ? "flex-col gap-2" : "flex-row gap-4"
            } border-[1px] rounded`}
        >
            <div
                className={`${
                    isVertical ? "w-full h-[15rem]" : "w-[20rem] h-[full]"
                }  ' overflow-hidden rounded-lg'`}
            >
                <img
                    src={image}
                    alt=""
                    className={`${
                        isVertical ? "w-full" : "h-full object-cover"
                    } rounded-[3px]`}
                />
            </div>

            <Link
                to={`/course/${id}`}
                className="p-2 flex flex-col gap-2 w-full"
            >
                <h2 className="font-[700] text-[#31225C] text-[18px]">
                    {title}
                </h2>
                <div className="flex gap-4 items-center">
                    <span className="text-[#31225C] font-[700] text-[14px]">
                        {rating}
                    </span>
                    <ul className="flex items-center gap-1">
                        {[...Array(Math.floor(rating))].map(() => {
                            const id = nanoid();
                            return (
                                <li key={id}>
                                    <img src={fillstar} alt="star" />
                                </li>
                            );
                        })}
                        {[...Array(5 - Math.floor(rating))].map(() => {
                            const id = nanoid();
                            return (
                                <li key={id}>
                                    <img src={emptystar} alt="star" />
                                </li>
                            );
                        })}
                    </ul>
                    <span className="text-[#31225C] font-[400] text-[14px]">
                        (3022)
                    </span>
                </div>
                <ul className="flex flex-wrap gap-x-4">
                    {available.map((item) => {
                        return (
                            <li
                                key={nanoid()}
                                className="flex items-center gap-2 font-[400] text-[14px]"
                            >
                                <div className="w-[4px] h-[4px] rounded-full bg-[#525252]"></div>
                                {item}
                            </li>
                        );
                    })}
                </ul>
                <p className="text-primary text-[18px] font-[700]">
                    Available Credit : <span>{credit}</span>
                </p>
                <ul className="flex flex-wrap gap-x-4">
                    {Object.entries(about).map(([key, value]) => {
                        return (
                            <li
                                key={nanoid()}
                                className="flex items-center gap-2 font-[400] text-[14px]"
                            >
                                <div className="w-[4px] h-[4px] rounded-full bg-[#525252]"></div>
                                <span>{key} :</span> <span>{value}</span>
                            </li>
                        );
                    })}
                </ul>
                <hr className="my-2" />
                <p
                    className="text-[
#525252] text-[13px] font-[400]"
                >
                    {desc.substring(0, 100)}...
                </p>

                <div
                    className={`${
                        isVertical ? "justify-between" : "justify-start"
                    } flex px-2 gap-4 my-2 flex-row`}
                >
                    <div className={`form-control ${isVertical?'':'order-1'}`}>
                        <label className="label cursor-pointer gap-3">
                            <input
                                defaultChecked
                                type="checkbox"
                                className="w-[20px] h-[20px] border-[#D0D0D0] border-[1px] "
                            />
                            <span className="text-[#525252] font-[500] text-[14px]">
                                Compare
                            </span>
                        </label>
                    </div>
                    <button className={`bg-primary text-white rounded-[4px] px-2 font-[500] `}>
                        Add to Cart
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default HorizontalCard;
