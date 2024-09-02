import React, { useContext } from "react";
import { CartContext } from "../../context api/CartContext";
import { useNavigate } from "react-router-dom";

const CartFooter = () => {
    const { selectedCardId } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div className="sticky bottom-0 flex p-2 items-center justify-end">
            <button
                onClick={() => navigate("/mypath")}
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
