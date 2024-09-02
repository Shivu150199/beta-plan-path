import { Tabs } from "antd";
import React, { useContext } from "react";

import {
    AddedCourseUserReview,
    Dashboard,
    RecentlyAddedCourse,
} from "../../components/dashboard";
import { book, dashboard, feedback, qna } from "../../assets/dashboard";

import { DashboardContext } from "../../context api/DashboardContext";
import AddedCourseQnA from "../../components/dashboard/AddedCourseQnA";

const Home = () => {
    const { review, queData } = useContext(DashboardContext);
    const item = [
        {
            label: (
                <div className="flex items-center gap-2">
                    <img src={dashboard} alt="" /> <span>Dashboard</span>
                </div>
            ),
            key: 1,
            children: <Dashboard />,
        },
        {
            label: (
                <div className="flex items-center gap-2">
                    <img src={book} alt="" /> <span>Courses</span>
                </div>
            ),
            key: 2,
            children: <RecentlyAddedCourse />,
        },
        {
            label: (
                <div className="flex items-center gap-2">
                    <img src={feedback} alt="" /> <span>User feedback</span>
                </div>
            ),
            key: 3,
            children: <AddedCourseUserReview review={review} />,
        },
        {
            label: (
                <div className="flex items-center gap-2">
                    <img src={qna} alt="" /> <span>Q & A</span>
                </div>
            ),
            key: 4,
            children: <AddedCourseQnA qna={queData} />,
        },
    ];

    return (
        <section className="w-[100%] h-[calc(100vh-64px)]">
            <Tabs
                tabBarStyle={{
                    maxWidth: "20rem",
                    minWidth: "15rem",
                    height: "calc(100vh - 65px)",
                }}
                className=" dashboard"
                tabPosition="left"
                items={item}
            />
        </section>
    );
};

export default Home;
