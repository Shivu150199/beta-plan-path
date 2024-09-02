import React, { useContext } from "react";

import { DashboardContext } from "../../context api/DashboardContext";
import CourseDetailCard from "./CourseDetailCard";
import UserDetailCard from "./UserDetailCard";

const Dashboard = () => {
    const { userDetailData, dashCourseDetail } = useContext(DashboardContext);
    return (
        <section className="w-full p-4 bg-creambg flex flex-col gap-4 overflow-auto h-[calc(100vh-64px)] no-scrollbar">
            {/*  */}
            <div className="border-[1px] p-4 flex flex-col gap-2 rounded-md bg-white">
                <h2 className="text-dark_violet font-bold text-xl">
                    User details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {userDetailData.map((item) => {
                        return <UserDetailCard key={item.id} item={item} />;
                    })}
                </div>
            </div>
            {/*  */}
            <div className="border-[1px] p-4 flex flex-col gap-2 rounded-md bg-white">
                <h2 className="text-dark_violet font-bold text-xl">
                    Course details
                </h2>
                <div className="flex flex-wrap gap-4">
                    {dashCourseDetail.map((item) => {
                        return <CourseDetailCard key={item.id} item={item} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;

// export const UserDetailCard = ({ item }) => {
//     return (
//         <div className="border-[1px] rounded-md p-4 flex flex-col gap-2">
//             <div className="flex items-center justify-between">
//                 <h3 className="text-[#4b4b4b] font-normal text-base">
//                     {item.title}
//                 </h3>
//                 <div
//                     className={`flex items-center justify-center gap-2 ${
//                         item.changeType == "positive"
//                             ? "bg-[#F2FCF4] "
//                             : "bg-[#FFE2E2]"
//                     } px-[4px] py-[3px] rounded-[4px]`}
//                 >
//                     {item.changeType == "positive" ? (
//                         <>
//                             <img src={up} alt="" />
//                             <span className="text-base font-medium text-[#039A2C]">
//                                 {item.percentageChange}
//                             </span>
//                         </>
//                     ) : (
//                         <>
//                             <img src={down} alt="" />
//                             <span className="text-base font-medium text-[#ea3e3e]">
//                                 {item.percentageChange}
//                             </span>
//                         </>
//                     )}
//                 </div>
//             </div>
//             <h2 className="text-3xl font-bold text-dark_violet">
//                 {item.amount}
//             </h2>
//         </div>
//     );
// };

// export const CourseDetailCard = ({ item }) => {
//     return (
//         <div className="flex flex-col gap-4 p-4 border-[1px] rounded-md min-w-[115px]">
//             <h4 className="text-[#4b4b4b] text-base font-medium">
//                 {item.title}
//             </h4>
//             <div className="flex items-center justify-between">
//                 <span className="text-3xl font-bold text-dark_violet">
//                     {item.count}
//                 </span>
//                 <button>
//                     <img src={rightarrow} alt="" />
//                 </button>
//             </div>
//         </div>
//     );
// };
