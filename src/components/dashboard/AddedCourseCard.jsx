import { nanoid } from "nanoid";
import React from "react";
import { emptystar, fillstar } from "../../assets/course";
import { Link } from "react-router-dom";

const AddedCourseCard = ({ item, goto }) => {
    return (
        <article
            key={item.id}
            className="p-1 border  flex rounded-lg  gap-4 flex-col lg:flex-row md:items-center"
        >
            <Link
                to={goto}
                className="bg-slate-100 rounded-lg h-40 w-full  md:min-h-[15rem] md:max-h-40 overflow-hidden md:flex-[.3]"
            >
                <img
                    src={item.image}
                    alt=""
                    className="object-cover md:h-full w-full"
                />
            </Link>
            <div className="flex flex-col gap-1 md:flex-[.7]">
                <Link
                    to={goto}
                    role="div"
                    className="p-2 flex flex-col gap-2 w-full hover:text-paraColor"
                >
                    <h2
                        className="font-[700] text-[#31225C
] text-[18px]"
                    >
                        {item.title}
                    </h2>
                    <div className="flex gap-4 items-center">
                        <span className="text-[#31225C] font-[700] text-[14px]">
                            {item.rating}
                        </span>
                        <ul className="flex items-center gap-1">
                            {[...Array(Math.floor(item.rating))].map(() => {
                                const id = nanoid();
                                return (
                                    <li key={id}>
                                        <img src={fillstar} alt="star" />
                                    </li>
                                );
                            })}
                            {[...Array(5 - Math.floor(item.rating))].map(() => {
                                const id = nanoid();
                                return (
                                    <li key={id}>
                                        <img src={emptystar} alt="star" />
                                    </li>
                                );
                            })}
                        </ul>
                        <span className="text-[#31225C] font-[400] text-[14px]">
                            ({item.totalRating})
                        </span>
                    </div>
                    <ul className="flex flex-wrap gap-x-4">
                        {item.available.map((item) => {
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
                        Available Credit : <span>{item.credit}</span>
                    </p>

                    <p
                        className="text-[
#525252] text-[13px] font-[400] sm:w-[90%]"
                    >
                        {item.desc.substring(0, 200)}...
                    </p>
                </Link>

                <div className="flex items-center gap-4 p-2 justify-end md:justify-start">
                    <button className="outline-btn border-[1px] border-primary">
                        <span>Edit course</span>
                    </button>
                    <button className="outline-btn border-[1px] border-primary">
                        Mark as approved
                    </button>
                </div>
            </div>
        </article>
    );
};

export default AddedCourseCard;
