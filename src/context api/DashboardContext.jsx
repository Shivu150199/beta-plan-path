import { createContext, useState } from "react";
import {
    courseData,
    courseDetails,
    dashboardData,
    qnaData,
    reviewData,
} from "../data";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const [addedCourse, setAddedCourse] = useState(courseData);
    const [review, setReview] = useState(reviewData);
    const [queData, setQueData] = useState(qnaData);
    const [userDetailData, setUserDetailData] = useState(dashboardData);
    const [dashCourseDetail, setDashCourseDetail] = useState(courseDetails);

    return (
        <DashboardContext.Provider
            value={{
                addedCourse,
                review,
                queData,
                userDetailData,
                dashCourseDetail,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};
