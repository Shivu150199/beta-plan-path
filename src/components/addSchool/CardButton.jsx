import React, { useContext } from 'react'
import { AddSchoolContext } from '../../context api/AddSchoolContext'

const CardButton = ({handleCourse,id}) => {
   const{addedCourse}= useContext(AddSchoolContext)
   let added=addedCourse.includes(id)
  return (
    <div
    className={`flex  gap-4 flex-row my-2 px-2`}
>
   
    <button onClick={()=>handleCourse(id)}
        className={`${added?'border-primary text-primary ':'border-paraColor bg-[#EDECEC] text-paraColor '} border-[1px] px-4 py-2 rounded-md`} 
    >
        {added?'Added to school':'Add to school'}
        
    </button>
</div>
  )
}

export default CardButton
