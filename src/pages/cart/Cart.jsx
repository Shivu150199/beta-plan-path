import React, { useContext } from "react";
import { CartFooter, CartItems, EmptyCart } from "../../components/cart";
import { CartContext } from "../../context api/CartContext";
import { BreadCrumb } from "../../components/utils";

const Cart = () => {
    const { cartData, cartNavigation } = useContext(CartContext);

    return (
        <section
            className="bg-[#fafafa] px-2 flex flex-col w-full h-[calc(100vh-64px)] relative"
            aria-labelledby="cart-section-heading"
        >
            <h1 id="cart-section-heading" className="sr-only">
                Shopping Cart
            </h1>
            <BreadCrumb list={cartNavigation} />
            {cartData && cartData.length === 0 ? (
                <EmptyCart />
            ) : (
                <>
                    <CartItems />
                    <CartFooter />
                </>
            )}
        </section>
    );
};

export default Cart;
