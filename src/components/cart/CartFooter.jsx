import React, { useContext } from "react";
import { CartContext } from "../../context api/CartContext";

const CartFooter = () => {
    const { selectedCardId } = useContext(CartContext);

    return (
        <div className="sticky bottom-0 flex p-2 items-center justify-end">
            <button
                className={`px-4 py-2 rounded-md text-white font-medium text-sm ${
                    !selectedCardId
                        ? "cursor-not-allowed bg-disable_btn"
                        : "bg-primary"
                }`}
                disabled={!selectedCardId}
            >
                Generate plan summary
            </button>
        </div>
    );
};

export default CartFooter;
