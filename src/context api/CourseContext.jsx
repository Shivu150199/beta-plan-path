import { createContext, useState } from "react";

export const CourseContext=createContext()


export const CourseProvider=({children})=>{

    const [open, setOpen] = useState(false);
  
return  <CourseContext.Provider value={{open,setOpen}}>
    {children}
</CourseContext.Provider>


}