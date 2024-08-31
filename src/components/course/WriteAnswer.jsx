import React from "react";

const WriteAnswer = () => {
    return (
        <form
            action=""
            className="flex flex-col gap-2 justify-start items-start"
        >
            <input
                type="text"
                placeholder="Write your suggestion"
                className="p-2 w-full md:w-[70%] bg-white border-[1px] focus:border-primary rounded-md outline-none"
            />
            <button className="primary-btn">Post your answer</button>
        </form>
    );
};

export default WriteAnswer;
