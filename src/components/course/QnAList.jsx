import React, { useContext, useState } from "react";
import { avatar, write } from "../../assets/course";
import { CourseContext } from "../../context api/CourseContext";
import { nanoid } from "nanoid";
import WriteAnswer from "./WriteAnswer";
const QnAList = ({ question, answerList, toggleForm }) => {
    const [toggleAnsForm, setToggleAnsForm] = useState(false);
    const handleAnsForm = () => {
        setToggleAnsForm(!toggleAnsForm);
    };
    return (
        <div className="flex flex-col gap-2 border-b-[1px] p-4 mt-2">
            <h4 className="text-base font-medium text-dark_violet">
                {question}
            </h4>
            <div className="bg-creambg rounded-lg p-4 flex flex-col gap-4">
                <div className="flex items-center justify-end">
                    <button
                        onClick={handleAnsForm}
                        className=" px-4 pt-2 text-sm font-medium text-primary flex gap-2 bg-none"
                    >
                        <img src={write} alt="" />
                        Write your answer
                    </button>
                </div>
                {answerList.map((ans) => {
                    const id = nanoid();
                    return (
                        <div className="flex flex-col gap-2" key={id}>
                            <div className="flex gap-2 items-center ">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#D0D0D0]">
                                    <img src={avatar} alt="profile" />
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
                        </div>
                    );
                })}

                {toggleAnsForm && <WriteAnswer />}
            </div>
        </div>
    );
};

export default QnAList;
