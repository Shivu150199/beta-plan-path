import React, { useContext } from "react";
import Navigation from "../../components/Navigation";
import { CartFooter, CartItems, EmptyCart } from "../../components/cart";
import { CartContext } from "../../context api/CartContext";
import { BreadCrumb } from "../../components/utils";

const Cart = () => {
    const { cartData } = useContext(CartContext);
    const { cartNavigation } = useContext(CartContext);
    return (
        <section className="bg-[#fafafa] px-2 flex flex-col w-[100%] h-[calc(100vh-64px)] relative">
            <BreadCrumb list={cartNavigation} />
            {cartData && cartData.length == 0 ? (
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
