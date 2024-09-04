import { Steps } from "antd";
import React from "react";

const AddSchoolPageStep = ({ current }) => {
    return (
        <Steps
            size="small"
            className="text-primary sticky z-10 top-0"
            current={current}
            items={[
                {
                    title: "Finalize courses",
                },
                {
                    title: "Select school",
                },
           
            ]}
        />
    );
};

export default AddSchoolPageStep;
