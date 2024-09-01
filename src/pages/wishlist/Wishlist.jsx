import React from "react";
import Navigation from "../../components/Navigation";
import { BreadCrumb } from "../../components/utils";
import { WishlistCard } from "../../components/wishlist";
import { WishlistProvider } from "../../context api/WishlistContext";
import Pagination from "../../components/Pagination";

const Wishlist = () => {
    const BreadCrumbList = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Courses",
            path: "/course",
        },
        {
            title: "Wishlist",
            path: "/wishlist",
        },
    ];
    return (
        <section className="bg-creambg px-2 flex flex-col w-[100%] h-[calc(100vh-64px)] relative">
            <BreadCrumb list={BreadCrumbList} />

            <WishlistProvider>
                <WishlistCard />
            </WishlistProvider>
            <Pagination />
        </section>
    );
};

export default Wishlist;
