import React, { useContext, useEffect, useState } from 'react'
import { PageStep } from '../course';
import { close } from '../../assets/course';
import AddSchoolPageStep from './AddSchoolPageStep';
import FinalizeCourse from './FinalizeCourse';
import { AddSchoolContext } from '../../context api/AddSchoolContext';
import SelectSchool from './SelectSchool';
import { success } from '../../assets/pricing'
import AddedSuccessModal from './AddedSuccessModal';
import { useNavigate } from 'react-router-dom';

const AddToSchoolDrawer = ({handleOpen,finalizeCourse}) => {
    const navigate=useNavigate()
const {deleteCourse}=useContext(AddSchoolContext)
    const [pageNumber, setPageNumber] = useState(0);
    const pages = ["Finalize courses", "Select school",];
    const handlePage = () => {
        setPageNumber((prevPage) => (prevPage + 1) % pages.length);
    };
    const page = pages[pageNumber];
    const handleCancel = (e) => {
        e.stopPropagation();
        if (pageNumber > 0) {
            setPageNumber((prevPage) => prevPage - 1);
        }
    };
    useEffect(() => {
        setPageNumber(0);
    }, []);
const handleModal=()=>{
    handleOpen()
    navigate('/add-to-school')
}
   
  return (
    <section className="w-[100%] flex flex-col bg-creambg">
    <div className="flex flex-col border-b-[1px] sticky top-0 bg-white mb-4">
        <div className="flex items-center justify-between p-4">
            <h2 className="text-2xl font-bold text-dark_violet ">
                Create course
            </h2>
            <button
                onClick={() => {
                   handleOpen()
                    setPageNumber(0);
                }}
            >
                <img src={close} alt="close icon" />
            </button>
        </div>
        <div className="border-[1px] shadow-sm bg-white">
            <div className="p-4 lg:w-[40%] flex items-center ">
                <AddSchoolPageStep current={pageNumber} />
            </div>
        </div>
    </div>

{page=='Finalize courses'&&<FinalizeCourse finalizeCourse={finalizeCourse} deleteCourse={deleteCourse}/>}
{page=='Select school'&&<SelectSchool/>}



  


    <div className='w-full p-2 flex items-center justify-end gap-4 border-t-[1px]'>
        <button className='outline-btn' onClick={handleCancel}>Cancel</button>
        {page=='Select school'? <button  onClick={() =>
                                document
                                    .getElementById("my_modal_4")
                                    .showModal()
                            } className='primary-btn' >Add to school</button> :  <button className='primary-btn' onClick={handlePage}>Add to school</button>}
      
    </div>
    <AddedSuccessModal message='Course added successfully to your school' btntext='close' img={success} handleModal={handleModal}/>

</section>
  )
}

export default AddToSchoolDrawer
