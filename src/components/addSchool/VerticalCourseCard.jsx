import { nanoid } from "nanoid";
import React, { useContext } from "react";

import { emptystar, fillstar } from "../../assets/course";
import { CourseContext } from "../../context api/CourseContext";
import { Link } from "react-router-dom";
import { AddSchoolContext } from "../../context api/AddSchoolContext";
import CardButton from "./CardButton";

const VerticalCourseCard = ({item,handleCourse}) => {
    const {
        title,
        credit,
        image,
        available,
        about,
        desc,
        rating,
        totalRating,
        id,
    }=item
    console.log(rating)
    const { isVertical, setIsVertical } = useContext(AddSchoolContext);
    return (
        <div className=" flex gap-4 h-[20rem] border-[1px] p-1 rounded-md">
            <Link
                to={`/course/${id}`}
                role="div"
                className="flex-[.30] rounded-md"
            >
                <img
                    src={image}
                    alt=""
                    className="h-full object-cover rounded-md"
                />
            </Link>

            <div className="px-2 flex flex-col w-full flex-[.70] gap-2">
                <Link to={`/course/${id}`} className="flex flex-col gap-2">
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
                            ({totalRating})
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
                </Link>
             <CardButton handleCourse={handleCourse} id={id}/>
            </div>
        </div>
    );
};

export default VerticalCourseCard;
