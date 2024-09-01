import React, { useContext } from "react";
import WriteReview from "./WriteReview";
import { emptystar, fillstar, showmoreIcon } from "../../assets/course";
import { nanoid } from "nanoid";
import { CourseContext } from "../../context api/CourseContext";

const UserReview = () => {
    const { review } = useContext(CourseContext);
    return (
        <section>
            <div className="flex items-center justify-between px-2">
                <h2 className="text-[22px] font-bold text-dark_violet">
                    Review (93492)
                </h2>
                <WriteReview />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] mt-6 md:p-2 gap-4">
                <div className="review flex flex-col gap-2 order-1 md:order-none">
                    {review.map((item, i) => {
                        return (
                            <div
                                key={item.id}
                                className="flex flex-col gap-1 border-b-[1px] py-4"
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
                            </div>
                        );
                    })}
                </div>
                {/*  */}
                <div className="mt-6 flex md:justify-end md:items-start ">
                    <div className="p-2 border-[1px] rounded-md flex flex-col gap-2 md:w-72 w-full">
                        <h2 className="text-lg font-bold text-dark_violet">
                            Review summary
                        </h2>
                        <div className="flex gap-2 items-center w-[100%]">
                            <div className="flex flex-1 flex-col gap-1">
                                <div className="flex gap-2 items-center">
                                    <span className="text-sm font-normal text-dark_violet">
                                        5
                                    </span>
                                    <progress
                                        className="progress progress-primary"
                                        value={50}
                                        max="100"
                                    ></progress>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className="text-sm font-normal text-dark_violet">
                                        4
                                    </span>
                                    <progress
                                        className="progress progress-primary "
                                        value={40}
                                        max="100"
                                    ></progress>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className="text-sm font-normal text-dark_violet">
                                        3
                                    </span>
                                    <progress
                                        className="progress progress-primary"
                                        value={30}
                                        max="100"
                                    ></progress>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className="text-sm font-normal text-dark_violet">
                                        2
                                    </span>
                                    <progress
                                        className="progress progress-primary"
                                        value={20}
                                        max="100"
                                    ></progress>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className="text-sm font-normal text-dark_violet">
                                        1
                                    </span>
                                    <progress
                                        className="progress progress-primary"
                                        value={10}
                                        max="100"
                                    ></progress>
                                </div>
                            </div>
                            <div className="flex items-center justify-center flex-col p-1 gap-1">
                                <h2 className="text-6xl font-bold text-dark_violet ">
                                    4.2
                                </h2>
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
                                <p className="text-sm font-normal text-dark_violet text-nowrap">
                                    Review summary
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
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

export default UserReview;
