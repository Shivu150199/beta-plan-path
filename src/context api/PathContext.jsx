import { createContext } from "react";

export const PathContext = createContext();

export const PathProvider = ({ children }) => {
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
        <PathContext.Provider value={{ myPathBreadCrumb }}>
            {children}
        </PathContext.Provider>
    );
};
