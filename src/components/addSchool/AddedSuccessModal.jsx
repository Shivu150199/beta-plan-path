import React from 'react'


const AddedSuccessModal = ({message,btntext,handleModal,img}) => {
  return (
    <dialog id="my_modal_4" className="modal">
    <div className="modal-box rounded-md">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <div className='flex flex-col gap-4 items-center justify-center py-10'>
  
    <img src={img} alt="" />
      <p className="py-4 text-[18px] font-normal text-dark_violet">{message}</p>
      <form method="dialog">
       
        <button onClick={handleModal} className='outline-btn border-[1px] border-primary'>{btntext}</button>
      </form>
     
      </div>
    </div>
  </dialog>
  )
}

export default AddedSuccessModal
