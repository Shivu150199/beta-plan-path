import { nanoid } from "nanoid";
import React from "react";
import { avatar } from "../../assets/course";

const AddedCourseQnA = ({ qna }) => {
    return (
        <main className="rounded-lg flex flex-col w-[100%] h-[calc(100vh-64px)] overflow-auto no-scrollbar relative">
            {/* <QnAList question={question} answerList={answer} /> */}
            <h2 className="text-dark_violet font-bold text-xl p-4 sticky top-0 bg-white">
                Question & Answer ({qna.length})
            </h2>
            {qna.map((item) => {
                const id = nanoid();
                return (
                    <div
                        key={id}
                        className="flex flex-col gap-2 border-b-[1px] p-4 mt-2 md:w-[70%]"
                    >
                        <div className="flex items-center justify-between py-2">
                            <h4 className="text-base font-medium text-dark_violet">
                                {item.question}
                            </h4>
                            <button className="outline-btn border-[1px] border-primary">
                                Mark as approved
                            </button>
                        </div>

                        <div className="bg-creambg rounded-lg p-4 flex flex-col gap-4">
                            {item.answer.map((ans) => {
                                const id = nanoid();
                                return (
                                    <div
                                        className="flex flex-col gap-2 items-start"
                                        key={id}
                                    >
                                        <div className="flex gap-2 items-center ">
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#D0D0D0]">
                                                <img
                                                    src={avatar}
                                                    alt="profile"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h4 className="text-sm font-medium text-dark_violet">
                                                    {ans.username}
                                                </h4>
                                                <p className="text-[12px] text-dark_violet">
                                                    {ans.createdAt}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-paraColor text-sm font-normal">
                                            {ans.ans}
                                        </p>
                                        <button className="outline-btn border-[1px] border-primary">
                                            Mark as approved
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </main>
    );
};

export default AddedCourseQnA;
