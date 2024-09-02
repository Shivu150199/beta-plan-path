import React from "react";
import { down, up } from "../../assets/dashboard";

const UserDetailCard = ({ item }) => {
    return (
        <div className="border-[1px] rounded-md p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <h3 className="text-[#4b4b4b] font-normal text-base">
                    {item.title}
                </h3>
                <div
                    className={`flex items-center justify-center gap-2 ${
                        item.changeType == "positive"
                            ? "bg-[#F2FCF4] "
                            : "bg-[#FFE2E2]"
                    } px-[4px] py-[3px] rounded-[4px]`}
                >
                    {item.changeType == "positive" ? (
                        <>
                            <img src={up} alt="" />
                            <span className="text-base font-medium text-[#039A2C]">
                                {item.percentageChange}
                            </span>
                        </>
                    ) : (
                        <>
                            <img src={down} alt="" />
                            <span className="text-base font-medium text-[#ea3e3e]">
                                {item.percentageChange}
                            </span>
                        </>
                    )}
                </div>
            </div>
            <h2 className="text-3xl font-bold text-dark_violet">
                {item.amount}
            </h2>
        </div>
    );
};

export default UserDetailCard;
