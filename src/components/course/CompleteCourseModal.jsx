import React, { useContext } from 'react'
import { success } from '../../assets/pricing'
import { Link } from 'react-router-dom'
import { CourseContext } from '../../context api/CourseContext'

const CompleteCourseModal = () => {
  const {setOpen}=useContext(CourseContext)
// const handleCloseModal=()=>{
// onClose()
// }

  return (
    <>
   {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box rounded-md">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className='flex flex-col gap-4 items-center justify-center py-10'>

  <img src={success} alt="" />
    <p className="py-4 text-[18px] font-normal text-dark_violet">Course created successfully</p>
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      {/* <button className="btn btn-sm btn-circle btn-ghost ">Close</button> */}
      <button onClick={()=>setOpen(false)} className='outline-btn border-[1px] border-primary'>View Course</button>
    </form>
   
    </div>
  </div>
</dialog>
    </>
  )
}

export default CompleteCourseModal