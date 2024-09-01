import React, { useContext } from "react";
import { CartContext } from "../../context api/CartContext";
import CartCard from "./CartCard";

const CartItems = () => {
    const { cartData } = useContext(CartContext);
    return (
        <main className="mt-4 h-[calc(100vh-116px)] overflow-auto no-scrollbar border-[1px] rounded-md bg-white relative">
            <h2 className="text-lg font-bold text-dark_violet px-4 py-2 border-b-[1px] sticky top-0 bg-white z-10">
                Select courses and assign grades
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {cartData.map((item) => {
                    return <CartCard key={item.id} item={item} />;
                })}
            </div>
        </main>
    );
};

export default CartItems;
