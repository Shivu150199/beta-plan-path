import React, { useContext } from "react";
import { CartContext } from "../../context api/CartContext";
import CartCard from "./CartCard";

const CartItems = () => {
    const { cartData } = useContext(CartContext);

    return (
        <section
            aria-labelledby="cart-heading"
            className="mt-4 md:mt-0 h-[calc(100vh-116px)] overflow-auto no-scrollbar border-[1px] rounded-md bg-white relative"
        >
            <h2
                id="cart-heading"
                className="text-lg font-bold text-dark_violet px-4 py-2 border-b-[1px] sticky top-0 bg-white z-10"
            >
                Select courses and assign grades
            </h2>

            <div
                role="list"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
            >
                {cartData.map((item) => (
                    <CartCard key={item.id} item={item} role="listitem" />
                ))}
            </div>
        </section>
    );
};

export default CartItems;
