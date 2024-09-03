import { createContext, useState } from "react";
import { planpathData, treeData } from "../data";

export const PathContext = createContext();

export const PathProvider = ({ children }) => {
    const [tableData,setTableData]=useState(planpathData)
    const [tree,setTree]=useState(treeData)

  
    const handleDeleteItem = (grade, itemId) => {
        setTree((prevTree) => {
            const updatedData = prevTree[grade].data.filter(item => item.id !== itemId);
            return {
                ...prevTree,
                [grade]: {
                    ...prevTree[grade],
                    data: updatedData
                }
            };
        });
    };

    const myPathBreadCrumb = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Course",
            path: "/course",
        },
        {
            title: "My cart",
            path: "/cart",
        },
        {
            title: "Generated plan",
            path: "/my-path",
        },
    ];

    return (
        <PathContext.Provider value={{ myPathBreadCrumb,tableData,tree,handleDeleteItem }}>
            {children}
        </PathContext.Provider>
    );
};
