import { createContext, useEffect, useState } from "react";
import { courseData, filterObj, reviewData } from "../data";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);
    const [coursesData, setCoursesData] = useState(courseData);
    const [compareData, setCompareData] = useState(courseData);
    const [filterData, setFilterData] = useState(filterObj);
    const [review, setReview] = useState(reviewData);
    const showFilter = () => {
        setOpenFilter(true);
    };
    const onCloseFilter = () => {
        setOpenFilter(false);
    };
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
    const compareCrumbList = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Course",
            path: "/course",
        },
        {
            title:'Compare',
            path:'/compare'
        }
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
    const [isVertical, setIsVertical] = useState(false); //to change view of card
    const onChangeTabs = (key) => {
        //  const filterData=courseData.filter((item)=>)
    };

    // filter
    const [formData, setFormData] = useState(null);
    const handleFilter = () => {
        onCloseFilter();
    };
    const handleFilterChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const [rating, setRating] = useState(0); // State to hold the current rating
const[compareId,setCompareId]=useState([])
const handleCompare = (id) => {
    setCompareId((prevData) => {
        if (prevData.includes(id)) {
            return prevData.filter((courseId) => courseId !== id);
        } else {
            return [...prevData, id];
        }
    });
};

const deleteCompare=(id)=>{
setCompareData((prev)=>prev.filter((item)=>item.id !== id))
}


console.log(compareId)
    return (
        <CourseContext.Provider
            value={{
                showFilter,
                open,
                setOpen,
                breadCrumbList,
                coursesData,
                courseTabs,
                onChangeTabs,
                setIsVertical,
                isVertical,
                onCloseFilter,
                openFilter,
                filterData,
                handleFilter,
                handleFilterChange,
                formData,
                rating,
                setRating,
                review,
                compareCrumbList,
                handleCompare,
                compareId,
                compareData,
                deleteCompare
            }}
        >
            {children}
        </CourseContext.Provider>
    );
};
