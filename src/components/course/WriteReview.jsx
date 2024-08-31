import React, { useContext, useState } from "react";
import { emptystar, write } from "../../assets/course";
import { StarRating } from "../utils";

import { CourseContext } from "../../context api/CourseContext";

const WriteReview = () => {
    const [review, setReview] = useState("");
    const { rating } = useContext(CourseContext);
    return (
        <>
            <button
                onClick={() =>
                    document.getElementById("writeReview").showModal()
                }
                className="outline-btn border-[1px] border-primary flex items-center justify-center gap-2"
            >
                <img src={write} alt="write icon" />
                Write a review
            </button>

            <dialog id="writeReview" className="modal">
                <div className="modal-box p-0 pb-4 rounded-lg flex flex-col justify-between absolute bottom-0 w-[100%] xm:relative">
                    <h3 className="text-lg font-bold text-dark_violet p-4 border-b-[1px]">
                        Write review
                    </h3>
                    <form action="" className="">
                        <div className="flex flex-col gap-1 p-4">
                            <h4 className="text-sm font-medium text-dark_violet">
                                Review stars
                            </h4>
                            <div className="flex  items-center">
                                <StarRating />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 p-4 border-b-[1px]">
                            <label
                                className="text-sm font-medium text-dark_violet"
                                htmlFor=""
                            >
                                Your Review
                            </label>
                            <textarea
                                onChange={(e) => setReview(e.target.value)}
                                className=" border-[1px] p-2 rounded-md resize-none placeholder:text-[13px] outline-none focus:border-primary mr-4"
                                rows={5}
                                name="review"
                                id="review"
                                placeholder="Share details of your own experience of this course"
                            ></textarea>
                        </div>
                    </form>

                    <form
                        method="dialog"
                        className="flex modal-backdrop  gap-4 items-center justify-end p-4 modal-action"
                    >
                        <button className="outline-btn">Cancel</button>

                        <button
                            className={`px-4 py-2 rounded-md text-white font-medium text-sm ${
                                review || rating > 0
                                    ? "bg-primary"
                                    : "bg-disable_btn"
                            }`}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default WriteReview;
