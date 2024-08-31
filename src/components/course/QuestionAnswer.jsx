import React, { useContext } from "react";

import QnAList from "./QnAList";
import { CourseContext } from "../../context api/CourseContext";
import AddQuestionModal from "./AddQuestionModal";
const reviewObj = [
    {
        id: 1,
        question: "What background knowledge is necessary?",
        answer: [
            {
                username: "anonymous",
                createdAt: "12 Jul 2024",
                ans: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus varius facilisi ornare monte",
            },
            {
                username: "anonymous",
                createdAt: "12 Jul 2024",
                ans: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus varius facilisi ornare monte",
            },
        ],
    },
    {
        id: 2,
        question: "Why background knowledge is necessary?",
        answer: [
            {
                username: "anonymous",
                createdAt: "12 Jul 2024",
                ans: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus varius facilisi ornare monte",
            },
        ],
    },
];
const QuestionAnswer = () => {
    // const { handleAnsForm, toggleAnsForm, setToggleAnsForm } =
    //     useContext(CourseContext);
    return (
        <section>
            <header className="flex items-center justify-between mt-2">
                <h2 className="text-[18px] font-bold text-dark_violet">
                    Question & Answer <span>(14)</span>
                </h2>
                <AddQuestionModal />
            </header>
            <main className="border-[1px] rounded-lg flex flex-col md:w-[70%]">
                {reviewObj.map((item) => {
                    return (
                        <QnAList
                            key={item.id}
                            question={item.question}
                            answerList={item.answer}
                        />
                    );
                })}
            </main>
        </section>
    );
};

export default QuestionAnswer;
