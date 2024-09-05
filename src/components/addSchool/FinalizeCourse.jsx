import React, { useContext, useState } from "react";
import { trash } from "../../assets/cart";
import { nanoid } from "nanoid";
import AdditionalInfoModal from "./AdditionalInfoModal";
import { AddSchoolContext } from '../../context api/AddSchoolContext'
const FinalizeCourse = ({ finalizeCourse,deleteCourse }) => {
    const {additionalInfo,setAdditionalInfo}=useContext(AddSchoolContext)
   

  
 

    const handleSubmit = (e,id) => {
        e.preventDefault();
        // Assume the data is saved or processed here.
   
        document.getElementById("additionalInfo").close(); // Close the modal
    };


// console.log(value)
    return (
        <div className="w-full h-[calc(100vh-193px)] mt-1 border-t-[2px] bg-white overflow-auto no-scrollbar relative">
            <h2 className="text-[18px] font-medium text-paraColor sticky top-0 bg-white p-4 border-b-[1px]">
                Finalize courses and add description if required
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-[80%] p-4">
                {finalizeCourse.map((item,index) => {
                    const id=nanoid()
                    return (
                        <div key={id} className="p-3 flex flex-col gap-2 border-[1px] rounded-md mt-4">
                            <h3 className="text-base text-dark_violet font-medium">
                                {item.title}
                            </h3>
                            <p className="text-[13px] font-normal text-paraColor gap-2 flex">
                                <span>
                                    Available Credits: {item.availableCredits}
                                </span>
                                <span>Category Type: {item.courseTypes}</span>
                            </p>
                            <div className="flex items-center gap-2 mt-2">

            
                            <button onClick={()=> document.getElementById("additionalInfo").showModal()}  className="outline-btn border-primary border-[1px]">
     Add additional info
                                </button>
                      
            
                                <button onClick={()=>deleteCourse(index)} className="flex items-center justify-center border-[1px] p-2 rounded-sm">
                                    <img src={trash} alt="" />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <AdditionalInfoModal  value={additionalInfo} setValue={setAdditionalInfo} handleSubmit={handleSubmit}/>
        </div>
    );
};

export default FinalizeCourse;
