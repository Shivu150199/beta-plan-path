import React from "react";
import { Select } from "../utils";
import { search } from "../../assets/course";

const SelectSchool = () => {
    return (
        <div className='"w-full sm:h-[calc(100vh-193px)] h-[calc(100vh-265px)] mt-1 border-t-[2px] bg-white overflow-auto no-scrollbar relative"'>
            <h2 className="text-[18px] font-medium text-paraColor sticky top-0 bg-white p-4 border-b-[1px]">
                Select school
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-[80%] p-4">
                <Select
                    label="State"
                    placeholder="Select state"
                    list={[]}
                />
                  <Select
                    label="School District"
                    placeholder="Select school district"
                    list={[]}
                />
                  <Select
                    label="Radius search"
                    placeholder="Select school district"
                    list={['hello']}
                />

<div className='flex flex-col gap-2 w-full'>
<label htmlFor="" className='text-base font-medium text-dark_gray'>School / College name</label>
<div className="flex items-center justify-between p-4 border-[1px] rounded-md focus:border-primary">
<input type="text" placeholder="Select school / college name" className="w-full bg-transparent outline-none " />
<button>

<img src={search} alt="" />
</button>
</div>
  </div>
            </div>
        </div>
    );
};

export default SelectSchool;
