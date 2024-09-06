import React, { useContext, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AddSchoolContext } from '../../context api/AddSchoolContext'

const AdditionalInfoModal = ({isSubmitted,value,setValue,handleSubmit}) => {
 

  return (
    <>
  

    <dialog id="additionalInfo" className="modal">
        <div className="modal-box p-0 pb-4 rounded-lg flex flex-col justify-between absolute bottom-0 w-[100%] xm:relative">
            <h3 className="text-lg font-bold text-dark_violet p-4 border-b-[1px]">
          Add additonal info
            </h3>
            <div className='flex items-center justify-center w-full additionalQuill border-b-[1px]'>

           <ReactQuill theme='snow' value={value} onChange={setValue}/>
            </div>

            <form
                method="dialog"
                className="flex modal-backdrop  gap-4 items-center justify-end px-4 modal-action"
            >
                <button className="outline-btn">Cancel</button>

                <button  className='primary-btn' >
                    Submit
                </button>
            </form>
        </div>
    </dialog>
</>
  )
}

export default AdditionalInfoModal
