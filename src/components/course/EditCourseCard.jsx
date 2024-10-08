import React, { useContext } from "react";

import { nanoid } from "nanoid";
import star from "../../assets/card/star.svg";
import { Link } from "react-router-dom";
import { edit } from "../../assets/course";
import { CourseContext } from "../../context api/CourseContext";

const EditCourseCard = ({
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
    const { setOpen } = useContext(CourseContext);
    return (
        <article className="p-1 border  flex rounded-lg  gap-4 flex-col md:flex-row">
            <Link
                role="div"
                to={`/edit-course/${id}`}
                className="bg-slate-100 rounded-lg md:h-auto md:flex-[.3]"
            >
                <img
                    src={image}
                    alt=""
                    className="rounded md:h-full h-[15rem] w-full object-cover object-left"
                />
            </Link>
            <div className="flex flex-col gap-2 md:flex-[.7]">
                <Link
                    to={`/edit-course/${id}`}
                    className="p-2 flex flex-col gap-2 w-full"
                >
                    <h2
                        className="font-[700] text-[#31225C
    ] text-[18px]"
                    >
                        {title}
                    </h2>
                    <div className="flex gap-4 items-center">
                        <span className="text-[#31225C] font-[700] text-[14px]">
                            {rating}
                        </span>
                        <ul className="flex items-center gap-1">
                            <li>
                                <img src={star} alt="" />
                            </li>
                            <li>
                                <img src={star} alt="" />
                            </li>
                            <li>
                                <img src={star} alt="" />
                            </li>
                            <li>
                                <img src={star} alt="" />
                            </li>
                            <li>
                                <img src={star} alt="" />
                            </li>
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
                    <p className="text-primary text-sm font-bold">
                        Available Credit : <span>{credit}</span>
                    </p>

                    <p
                        className="text-[
    #525252] text-[13px] font-[400]"
                    >
                        {desc.substring(0, 200)}...
                    </p>
                </Link>

                <div className="flex">
                    <button
                        onClick={() => setOpen(true)}
                        className="bg-white text-primary rounded-[4px] px-4 py-2 border-[1px] border-primary font-medium text-sm flex gap-2 items-center justify-center ml-2 mb-2"
                    >
                        <img src={edit} alt="" />
                        <span>Edit Course</span>
                    </button>
                </div>
            </div>
        </article>
    );
};

export default EditCourseCard;
