import React from "react";
import { close, emptystar, fillstar } from "../../../assets/course";
import { nanoid } from "nanoid";
import { TruncatedParagraph } from "../../../components/course/CourseDesc";
import { Link } from "react-router-dom";

const CompareCard = ({item,deleteCompare}) => {
    const{id,title,image,rating,totalRating,tag,credit,desc,available,about}=item
    return (
        <div className="min-w-96 w-96 border-[1px] relative">
<button   className="absolute top-0 right-0 bg-white p-2 flex items-center justify-center" onClick={() => deleteCompare(id)}>
    <img src={close} alt="" />
</button>

            <div className="p-2 flex flex-col gap-2 items-start border-b-[1px] overflow-hidden">
                <img src={image} alt="" className="rounded-md  h-40 w-full object-cover" />
                <h2 className="text-dark_violet text-base font-medium">
                    {title}
                </h2>
                <button className="bg-primary px-4 py-2 text-white text-sm font-medium rounded-md hover:bg-violet-500">
                    Add to cart
                </button>
            </div>
            <div className="flex gap-4 items-center px-4  py-4 border-b-[1px] text-dark_violet text-[18px] font-medium">
                <span className="text-[#31225C] font-[700] text-[14px]">
                    {rating}
                </span>
                <ul className="flex items-center gap-1">
                    {[...Array(Math.floor(rating))].map(() => {
                        const id = nanoid();
                        return (
                            <li key={id}>
                                <img src={fillstar} alt="star" />
                            </li>
                        );
                    })}
                    {[...Array(5 - Math.floor(rating))].map(() => {
                        const id = nanoid();
                        return (
                            <li key={id}>
                                <img src={emptystar} alt="star" />
                            </li>
                        );
                    })}
                </ul>
                <span className="text-[#31225C] font-[400] text-[14px]">
                    ({totalRating})
                </span>
            </div>
            <div className="px-4 py-4 border-b-[1px] text-paraColor md:text-[16px] text-sm text-nowrap font-normal">
                {about.State}
            </div>
            <div className="px-4 py-4 border-b-[1px] text-paraColor md:text-[16px] text-sm text-nowrap font-normal">
                {available[1]}
            </div>
            <div className="px-4 py-4 border-b-[1px] text-paraColor md:text-[16px] text-sm text-nowrap font-normal">
                english language arts
            </div>
            <div className="px-4 py-4 border-b-[1px] text-paraColor md:text-[16px] text-sm text-nowrap font-normal">
                regular
            </div>
            <div className="px-4 py-4 border-b-[1px] text-paraColor md:text-[16px] text-sm text-nowrap font-normal">
                1.00
            </div>
            <div className="px-4 py-4 border-b-[1px] text-paraColor md:text-[16px] text-sm text-nowrap font-normal">
                4.00
            </div>
            <div className="px-4 py-4 border-b-[1px] text-paraColor md:text-[16px] text-sm text-nowrap font-normal">
                credit recovery
            </div>
            <div className="px-4 py-4 border-b-[1px] text-paraColor md:text-[16px] text-sm text-nowrap font-normal">
                -
            </div>
            <div className="px-4 py-4 border-b-[1px] text-paraColor md:text-[16px] text-sm  font-normal flex flex-col gap-2">
            <span>{desc.substring(0,200)}...</span>
            <Link to={`/course/${id}`} className='text-primary font-medium ' >
            Go to course details page to see whole content
            </Link>
         
            </div>
        </div>
    );
};

export default CompareCard;
