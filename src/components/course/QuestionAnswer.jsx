import React, { useContext } from "react";

import QnAList from "./QnAList";
import { CourseContext } from "../../context api/CourseContext";
import AddQuestionModal from "./AddQuestionModal";
import { nanoid } from "nanoid";
// const reviewObj = [
//     {
//         id: 1,
//         question: "What background knowledge is necessary?",
//         answer: [
//             {
//                 username: "anonymous",
//                 createdAt: "12 Jul 2024",
//                 ans: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus varius facilisi ornare monte",
//             },
//             {
//                 username: "anonymous",
//                 createdAt: "12 Jul 2024",
//                 ans: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus varius facilisi ornare monte",
//             },
//         ],
//     },
//     {
//         id: 2,
//         question: "Why background knowledge is necessary?",
//         answer: [
//             {
//                 username: "anonymous",
//                 createdAt: "12 Jul 2024",
//                 ans: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus varius facilisi ornare monte",
//             },
//         ],
//     },
// ];
const QuestionAnswer = ({ question, answer }) => {
    // const { handleAnsForm, toggleAnsForm, setToggleAnsForm } =
    //     useContext(CourseContext);
    return (
        <main className="rounded-lg flex flex-col">
            <QnAList question={question} answerList={answer} />
        </main>
    );
};

export default QuestionAnswer;
