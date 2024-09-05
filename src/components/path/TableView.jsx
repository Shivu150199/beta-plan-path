import React, { useContext } from 'react'
import { pencil } from '../../assets/path'
import { PathContext } from '../../context api/PathContext'
import { Link } from 'react-router-dom'

const TableView = () => {
   const {tableData}= useContext(PathContext)
  return (
    <div className="mx-6 flex flex-col gap-2">
    <h2 className="text-dark_violet text-[18px] font-bold">
        Your learning path for high school
    </h2>
    
    <div className="flex flex-col border-[1px] rounded-lg mb-10">
        <header className="gap-4 grid grid-cols-6 bg-primary text-white px-4 py-4 border-b-[1px] rounded-tl-lg rounded-tr-lg">
            <div className="flex items-center justify-start text-sm font-medium">
                Course type
            </div>
            <div className="flex items-center justify-start text-sm font-medium">
                9th Grade
            </div>
            <div className="flex items-center justify-start text-sm font-medium">
                10th Grade
            </div>
            <div className="flex items-center justify-start text-sm font-medium">
                11th Grade
            </div>
            <div className="flex items-center justify-start text-sm font-medium">
                12th Grade
            </div>
            <div className="flex items-center justify-start text-sm font-medium">
                Credits
            </div>
        </header>
{
    tableData.map((item)=>{
        // const {type,}=item
        return  <div className="gap-4 grid grid-cols-6 px-4 py-4 border-b-[1px]">
        <div className="flex items-center justify-start text-dark_violet text-sm">
            {item.type}
        </div>
        <div className="flex items-center justify-start text-dark_violet text-sm">
            {item.ninth.subject}, ({item.ninth.crScore} Cr)
        </div>
        <div className="flex items-center justify-start text-dark_violet text-sm">
        {item.tenth.subject}, ({item.tenth.crScore} Cr)
        </div>
        <div className="flex items-center justify-start text-dark_violet text-sm">
        {item.eleventh.subject}, ({item.eleventh.crScore} Cr)
        </div>
        <div className="flex items-center justify-start text-dark_violet text-sm">
        {item.twelth.subject}, ({item.twelth.crScore} Cr)
        </div>
        <div className="flex items-center justify-between gap-2 px-2">
            <span className="text-dark_violet text-sm">
               {item.total} (Cr)
            </span>
            <Link to='/cart' className="outline-btn border-primary border-[1px]">
                <img src={pencil} alt="" />
            </Link>
        </div>
    </div>
    })
}

        <footer className="gap-4 grid grid-cols-6 px-4 py-4 border-b-[1px] bg-[#f4f4f4] rounded-bl-lg rounded-br-lg">
            <div className="flex items-center justify-start text-dark_violet text-sm">
                Toatal credit
            </div>
            <div className="flex items-center justify-start text-dark_violet text-sm">
            2.50 Cr
            </div>
            <div className="flex items-center justify-start text-dark_violet text-sm">
            2.50 Cr
            </div>
            <div className="flex items-center justify-start text-dark_violet text-sm">
            2.50 Cr
            </div>
            <div className="flex items-center justify-start text-dark_violet text-sm">
            2.50 Cr
            </div>
            <div className="flex items-center justify-between gap-2 px-2">
                <span className="text-dark_violet text-sm">
                2.50 Cr
                </span>
              
            </div>
        </footer>
    
    </div>
    </div>
  )
}

export default TableView
