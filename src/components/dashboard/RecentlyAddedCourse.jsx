import React, { useContext } from "react";
import { DashboardContext } from "../../context api/DashboardContext";
import AddedCourseCard from "./AddedCourseCard";

const RecentlyAddedCourse = () => {
    const { addedCourse } = useContext(DashboardContext);
    return (
        <section className="w-full p-4 bg-creambg flex flex-col gap-4 overflow-auto h-[calc(100vh-64px)] no-scrollbar">
            <div className="border-[1px] p-4 flex flex-col gap-2 rounded-md bg-white">
                <h2 className="text-dark_violet font-bold text-xl">
                    Review recently added courses
                </h2>
                <div className="flex flex-col gap-4">
                    {addedCourse.map((item) => {
                        return (
                            <AddedCourseCard
                                key={item.id}
                                item={item}
                                goto={`/dashboard/added/${item.id}`}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default RecentlyAddedCourse;
