import React, { useContext } from "react";
import { WishlistContext } from "../../context api/WishlistContext";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { emptystar, fillstar } from "../../assets/wishlist";
import { EmptyList } from ".";
// import EmptyWishlist from './emptyWishlist'

const WishlistCard = () => {
    const { wishlistData } = useContext(WishlistContext);
    if (wishlistData.length == 0) {
        return <EmptyList />;
    }
    return (
        <div className="maindiv bg-creambg h-[calc(100vh-116px)] overflow-auto relative no-scrollbar md:mx-4">
            <div className="md:border-[1px] rounded-md w-full flex flex-col p-2 gap-4">
                <h2 className="text-[22px] font-bold text-dark_violet">
                    Wishlist ({wishlistData.length})
                </h2>

                {wishlistData.map((item) => {
                    return (
                        <article
                            key={item.id}
                            className="p-1 border  flex rounded-lg  gap-4 flex-col sm:flex-row "
                        >
                            <div className="bg-slate-100 rounded-lg h-40 w-full  sm:min-h-[15rem] sm:max-h-[20rem] overflow-hidden sm:flex-[.3]">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="object-cover sm:h-full w-full"
                                />
                            </div>
                            <div className="flex flex-col gap-2 sm:flex-[.7]">
                                <div className="p-2 flex flex-col gap-2 w-full">
                                    <h2
                                        className="font-[700] text-[#31225C
] text-[18px]"
                                    >
                                        {item.title}
                                    </h2>
                                    <div className="flex gap-4 items-center">
                                        <span className="text-[#31225C] font-[700] text-[14px]">
                                            {item.rating}
                                        </span>
                                        <ul className="flex items-center gap-1">
                                            {[
                                                ...Array(
                                                    Math.floor(item.rating)
                                                ),
                                            ].map(() => {
                                                const id = nanoid();
                                                return (
                                                    <li key={id}>
                                                        <img
                                                            src={fillstar}
                                                            alt="star"
                                                        />
                                                    </li>
                                                );
                                            })}
                                            {[
                                                ...Array(
                                                    5 - Math.floor(item.rating)
                                                ),
                                            ].map(() => {
                                                const id = nanoid();
                                                return (
                                                    <li key={id}>
                                                        <img
                                                            src={emptystar}
                                                            alt="star"
                                                        />
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                        <span className="text-[#31225C] font-[400] text-[14px]">
                                            ({item.totalRating})
                                        </span>
                                    </div>
                                    <ul className="flex flex-wrap gap-x-4">
                                        {item.available.map((item) => {
                                            return (
                                                <li
                                                    key={nanoid()}
                                                    className="flex items-center gap-2 font-[400] text-[14px]"
                                                >
                                                    <div className="w-[4px] h-[4px] rounded-full bg-[#525252]"></div>
                                                    {item}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <p className="text-primary text-sm font-bold">
                                        Available Credit :{" "}
                                        <span>{item.credit}</span>
                                    </p>

                                    <p
                                        className="text-[
#525252] text-[13px] font-[400] sm:w-[90%]"
                                    >
                                        {item.desc.substring(0, 200)}...
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 p-2 justify-end md:justify-start">
                                    <button className="outline-btn border-[1px] border-primary md:order-1">
                                        <span>Remove</span>
                                    </button>
                                    <button className="primary-btn ">
                                        Move to cart
                                    </button>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export default WishlistCard;
