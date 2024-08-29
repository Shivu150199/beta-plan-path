import { createContext, useState } from "react";
import { courseData } from "../data";

export const WishlistContext=createContext()


export const WishlistProvider=({children})=>{
    
const [wishlistData,setWishlistData]=useState(courseData)


    return <WishlistContext.Provider value={{wishlistData}}>
        {children}
    </WishlistContext.Provider>
}