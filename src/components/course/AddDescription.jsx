import React, { useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const AddDescription = () => {
    const quillRef = useRef(null);
    const [value, setValue] = useState('');
    useEffect(() => {
        if (quillRef.current) {
            const editor = quillRef.current.getEditor(); // Get the Quill editor instance
            editor.root.dataset.placeholder = 'Add long course description';
        }
    }, []);
  return (
   <section className='flex flex-col gap-4 w-full lg:w-[80%] p-4 pb-10'>
<h2 className='text-base font-bold text-dark_gray'>Create Description</h2>
<ReactQuill theme="snow" value={value} onChange={setValue} className='rounded-md' placeholder='Add long course description' ref={quillRef}/>
   </section>
  )
}

export default AddDescription