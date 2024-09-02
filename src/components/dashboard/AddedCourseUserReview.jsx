import React from "react";
import { emptystar, fillstar, showmoreIcon } from "../../assets/course";
import { nanoid } from "nanoid";

const AddedCourseUserReview = ({ review }) => {
    return (
        <section className="w-[100%] h-[calc(100vh-64px)] overflow-auto no-scrollbar">
            <div className="flex items-center justify-between p-4">
                <h2 className="text-[22px] font-bold text-dark_violet">
                    Review ({review.length})
                </h2>
                {/* <WriteReview /> */}
            </div>

            <div className="  gap-4">
                <div className="review flex flex-col gap-2">
                    {review.map((item, i) => {
                        return (
                            <div
                                key={item.id}
                                className="flex flex-col gap-1 border-b-[1px] p-4 md:w-[70%] items-start"
                            >
                                <div className="flex gap-2">
                                    <div
                                        className={`w-[2rem] h-[2rem] font-bold text-white text-lg rounded-full bg-primary flex items-center justify-center`}
                                    >
                                        {item.username[0]}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h2 className="font-medium text-base text-dark_violet">
                                            {item.username}
                                        </h2>
                                        <span className="text-sm font-normal">
                                            {item.date}
                                        </span>
                                        <div className="flex gap-2 items-center">
                                            <span className="text-[#31225C] font-[700] text-[14px]">
                                                {item.rating}
                                            </span>
                                            <ul className="flex item-cneter gap-1">
                                                {[...Array(5)].map(() => {
                                                    const id = nanoid();
                                                    return (
                                                        <li key={id}>
                                                            <img
                                                                src={fillstar}
                                                                alt="star"
                                                            />
                                                        </li>
                                                    );
                                                })}
                                                {[...Array(0)].map(() => {
                                                    const id = nanoid();
                                                    return (
                                                        <li key={id}>
                                                            <img
                                                                src={emptystar}
                                                                alt="star"
                                                            />
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[13px] font-normal text-[#525252] lg:w-[70%]">
                                    {item.reviewContent}
                                </p>
                                <button className="outline-btn border-[1px] border-primary">
                                    Mark as approved
                                </button>
                            </div>
                        );
                    })}
                </div>
                {/*  */}
            </div>

            <div>
                <button className="outline-btn flex items-center justify-center gap-2 hover:text-violet-600">
                    <span>Show more</span>{" "}
                    <img
                        src={showmoreIcon}
                        alt="showmore icon"
                        className="mt-1"
                    />
                </button>
            </div>
        </section>
    );
};

export default AddedCourseUserReview;
