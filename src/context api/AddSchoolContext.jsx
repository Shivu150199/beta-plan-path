import { createContext, useState } from "react";
import { courseData, filterObj, finalcourses } from "../data";

export const AddSchoolContext = createContext();

export const AddSchoolProvider = ({ children }) => {
    const [filterData, setFilterData] = useState(filterObj);
    const [AddSchoolData, setAddSchoolData] = useState(courseData);
    const [finalizeCourse,setFinalizeCourse]=useState(finalcourses)
    
    const [open, setOpen] = useState(false);
    const handleOpen=()=>{
setOpen((prev)=>!prev)
    }
    const breadCrumbList = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Course",
            path: "/course",
        },
    ];

    const courseTabs = [
        {
            key: "1",
            label: "All (300)",
            children: "",
        },
        {
            key: "2",
            label: "English (200)",
            children: "",
        },
        {
            key: "3",
            label: "Math (50)",
            children: "",
        },
        {
            key: "4",
            label: "Science (50)",
            children: "",
        },
    ];
    const onChangeTabs = (key) => {
        //  const filterData=courseData.filter((item)=>)
    };

    const [openFilter, setOpenFilter] = useState(false);
    const showFilter = () => {
        setOpenFilter(true);
    };
    const onCloseFilter = () => {
        setOpenFilter(false);
    };
    const [isVertical, setIsVertical] = useState(false);
    const [formData, setFormData] = useState(null);

    const handleFilter = () => {
        onCloseFilter();
    };
    const handleFilterChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
const [addedCourse,setAddedCourse]=useState([])

const handleCourse=(id)=>{
console.log(id)
setAddedCourse((prevData) => {
    if (prevData.includes(id)) {
      return prevData.filter((courseId) => courseId !== id);
    } else {
      return [...prevData, id];
    }
  });
}
const deleteCourse = (id) => {
    setFinalizeCourse((prevCourses) =>
        prevCourses.filter((course, index) => index !== id)
    );
};

const [additionalInfo,setAdditionalInfo]=useState('')
console.log(additionalInfo)


    return (
        <AddSchoolContext.Provider
            value={{
                breadCrumbList,
                showFilter,
                onCloseFilter,
                handleFilter,
                handleFilterChange,
                formData,
                openFilter,
                filterData,
                courseTabs,
                onChangeTabs,
                AddSchoolData,
                isVertical,setIsVertical,handleCourse,
                addedCourse,
                open,handleOpen,
                finalizeCourse,
                deleteCourse,setAdditionalInfo,additionalInfo
            }}
        >
            {children}
        </AddSchoolContext.Provider>
    );
};
