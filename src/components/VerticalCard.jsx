import React from 'react'
import dsImage from '../assets/card/ds.svg'
import { nanoid } from 'nanoid'
import star from '../assets/card/star.svg'
import { Link } from 'react-router-dom'

const VerticalCard = ({title,credit,image,available,about,desc,rating,totalRating}) => {
  return (
    <Link to='/course/xyz' className='p-1 border shadow-lg flex rounded-lg '>
        <div className='bg-slate-200 rounded-lg '>

    <img src={image} alt="" className='rounded h-full w-full object-cover object-left' />
        </div>
    <div className='p-2 flex flex-col gap-1 w-full'>
        <h2 className='font-[700] text-[#31225C
    ] text-[18px]'>{title}</h2>
        <div className='flex gap-4 items-center'>
            <span className='text-[#31225C] font-[700] text-[14px]'>{rating}</span>
            <ul className='flex items-center gap-1'>

                <li>
                    <img src={star} alt="" />
                </li>
                <li>
                    <img src={star} alt="" />
                </li>
                <li>
                    <img src={star} alt="" />
                </li>
                <li>
                    <img src={star} alt="" />
                </li>
                <li>
                    <img src={star} alt="" />
                </li>
            </ul>
            <span className='text-[#31225C] font-[400] text-[14px]'>({totalRating})</span>
        </div>
        <ul className='flex flex-wrap gap-x-4'>
        {available.map((item)=>{
    return    <li key={nanoid()} className='flex items-center gap-2 font-[400] text-[14px]'><div className='w-[4px] h-[4px] rounded-full bg-[#525252]'></div>{item}</li>
})}
         
        </ul>
        <p className='text-primary text-[18px] font-[700]'>Available Credit : <span>{credit}</span>
        </p>
    <ul className='flex flex-wrap gap-x-4'>
    {Object.entries(about).map(([key,value])=>{
    return  <li key={nanoid()} className='flex items-center gap-2 font-[400] text-[14px]'><div className='w-[4px] h-[4px] rounded-full bg-[#525252]'></div><span>{key} :</span> <span>{value}</span></li>
})}
    </ul>
    <hr className='my-1' />
        <p className='text-[
    #525252] text-[13px] font-[400]'>{desc.substring(0,100)}...</p>
      <div className='flex justify-end px-2 my-2 gap-4'>
    <div className="form-control">
      <label className="label cursor-pointer gap-3">
      <input defaultChecked type="checkbox" className='w-[20px] h-[20px] border-[#D0D0D0] border-[1px] ' />
        <span className="text-[#525252] font-[500] text-[14px]">Compare</span>
      </label>
    </div>
    <button className='bg-primary text-white rounded-[4px] px-2 font-[500]'>
        Add to Cart
    </button>
    </div>
    </div>
    
 
    
    </Link>
  )
}

export default VerticalCard