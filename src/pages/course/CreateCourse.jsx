import React, { useContext, useEffect, useRef, useState } from 'react'
import { close, files } from '../../assets/course'
import { Input, Select } from '../../components/utils'

import { AddDescription, CompleteCourseModal, FaqForm, FaqList, PageStep } from '../../components/course'
import NoFaq from '../../components/course/NoFaq'
import { CourseContext } from '../../context api/CourseContext'

const CreateCourse = () => {
  const {setOpen}=useContext(CourseContext)
  const pages=['addDetails','addDescription','faq']
  const [fileImage,setFileImage]=useState(null)
  const [fileImageUrl,setFileImageUrl]=useState(null)
  const [showImage,setShowImage]=useState(false)
  const [pageNumber,setPageNumber]=useState(0)
  const [faq,setFaq]=useState(false)
  const [faqList,setFaqList]=useState(false)
  const page = pages[pageNumber];

  const fileName=useRef(undefined)
const handleImageChange=(e)=>{
  let file=e.target.files[0]

  if(file){
    setFileImage(file)
  setFileImageUrl(URL.createObjectURL(file))
  setShowImage(!showImage)
  }
}

const handlePage=()=>{
  setPageNumber((prevPage) => (prevPage + 1) % pages.length);
}
const handleCancel=(e)=>{
  e.stopPropagation()
  if(pageNumber>0){

    setPageNumber((prevPage)=>prevPage-1)
  }
}
  return (<>
 <section className='w-[100%] flex flex-col bg-creambg'>
<div className='flex flex-col border-b-[1px] sticky top-0 bg-white mb-4'>
  <div className='flex items-center justify-between p-4'>
  <h2 className='text-2xl font-bold text-dark_violet '>Create course</h2>
  <button onClick={()=>setOpen(false)}><img src={close} alt="close icon" /></button>
  </div>
  <div className='border-[1px] shadow-sm bg-white'>
<div className='p-4 lg:w-[40%] flex items-center '>
  <PageStep current={pageNumber}/>
</div>
</div>
</div>




{page=='addDetails'&& 
<div className='flex items-center justify-start p-4 bg-white border-t-[1px] h-[68vh] overflow-auto  no-scrollbar w-[100%]'>



<form action="" className='flex flex-col gap-4 w-full lg:w-[80%] h-[100%]'>
  {/*  */}
<div className='flex items-center justify-between gap-8 pt-6 flex-col sm:flex-row'>
<Select label='Entity Type' placeholder='Enter entity type' list={[]}/>
<Select label='State' placeholder='Select state' list={[]}/>
{/* <Select label='Entity Type' placeholder='Enter entity type' list={[]}/> */}
<Input label='Coruse code' type='number' placeholder='Enter course code assign by institute '/>

</div>
{/*  */}
<div className='flex'>
<Input label='Course Title' type='text' placeholder='Enter course title' onChange={handleImageChange}/>
</div>
{/*  */}
<div className='flex gap-4 flex-col sm:flex-row'>
<div className='flex flex-col gap-2 '>
  <label  className='text-base font-medium text-dark_gray'>Add Course Image</label>
  <input ref={fileName} type="file" className="input input-bordered  rounded-[4px] outline-none placeholder:text-placeholder hidden" onChange={handleImageChange} />
  <div className='relative flex items-center justify-center sm:w-44 h-24 border-[1px] rounded-md overflow-hidden' onClick={()=>fileName.current.click()}>
{showImage?


<div className=''>
<img src={fileImageUrl} alt="file image" className='w-full h-full object-cover' /> 
<button onClick={(e)=>{
  e.stopPropagation()
  setShowImage(!showImage)}} className='absolute top-0 right-0 bg-white'><img src={close} alt="" /></button>
</div>


:<img src={files} alt="icon" /> }

    
 
    
 
  </div>
</div>
<div className='w-full flex flex-col gap-2'>
  <label htmlFor="" className='text-base font-medium text-dark_gray'>Course Short Description </label>
  <textarea placeholder='Add short course description' className='resize-none h-24 input-bordered input' cols={30} maxLength={1000} minLength={10}>


</textarea>
<p className='text-[10px] text-placeholder font-normal'>0/1000</p>
</div>



</div>
{/*  */}

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-20'>
<Select label='Credits (Available Credits)' placeholder='Enter entity type' list={[]}/>
<Select label='Course Length/ Duration' placeholder='Select course length/ curation' list={[]}/>
<Select label='Course Level' placeholder='Select course level' list={[]}/>
<Select label='Category Type' placeholder='Select category type' list={[]}/>
<Select label='Course category' placeholder='Select course category' list={[]}/>
<Select label='Course Sub-category' placeholder='Select course sub-category' list={[]}/>
<Select label='Career Tech Electives' placeholder='Select career tech electives' list={[]}/>
<Select label='Max GPA unweight' placeholder='Select max GPA unweight' list={[]}/>
<Select label='Has Prerequisites' placeholder='Select prerequisites type' list={[]}/>
<Select label='Prerequiste course code' placeholder='Select prerequiste course code' list={[]}/>
<Input label='Required' placeholder='Enter requirement' type='text' list={[]}/>
<Select label='End of course' placeholder='Select end of course type' list={[]}/>
<Select label='Offered in grade' placeholder='Select offered in grade' list={[]}/>
<Select label='Offered in grade' placeholder='Select offered in grade' list={[]}/>
<Input type='text' label='Additional Couse information' placeholder='Additional Couse information' list={[]}/>
<Select type='text' label='Course reference' placeholder='Enter course reference' list={[]}/>
<Select label='Course reference type' placeholder='Select course reference type' list={[]}/>
<Input type='text' label='Additional References' placeholder='Enter additional references link' list={[]}/>



</div>
{/*  */}
</form>
</div>
}

{/*  */}
{
  page=='addDescription'&&
  <div className='flex items-start justify-start w-full bg-white shadow-sm  border-t-[1px] '>

  
  <AddDescription/>
  </div>
}

{/*  */}

{faqList? 
<div className='border-t-2 bg-white w-full'>

<FaqList/> 
</div>
:<>
  {page=='faq'&&faq&&   <div className='border-t-2 bg-white'>

    <FaqForm faqListvalue={faqList} faqListSet={setFaqList}/>
  </div> 
     }
  {page=='faq'&&!faq&&<NoFaq faqValue={faq} faqSet={setFaq}/>}
</>


}


{/*  */}

<div className='px-4 py-3 flex gap-10 items-center justify-end fixed w-[100%] bottom-0 bg-white shadow-[0px_-3px_6px_0px_rgba(0,_0,_0,_0.1)]'>
<button className='text-primary font-medium text-sm' onClick={handleCancel}>
  Cancel
</button>
<button className='text-primary font-medium text-sm'>
  Save as draft
</button>
{page==='faq'?<button onClick={()=>document.getElementById('my_modal_3').showModal()} className='bg-primary text-white py-1 px-4 text-sm font-medium rounded-md ' >
  Submit
</button>:<button className='bg-primary text-white py-1 px-4 text-sm font-medium rounded-md ' onClick={handlePage}>
  Next
</button>}



</div>


<CompleteCourseModal/>

 </section>


  </>
  )
}

export default CreateCourse