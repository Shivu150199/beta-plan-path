import { createContext, useState } from "react";
import { courseAddedToCart } from "../data";

const cartBreadCrumbList = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Courses",
        path: "/course",
    },
    {
        title: "My cart",
        path: "/cart",
    },
];

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartData, setCartData] = useState(courseAddedToCart);
    const [cartNavigation, setCartNavigation] = useState(cartBreadCrumbList);
    const [selectedCardId, setSelectedCardId] = useState(null);
    const handleLike = (id) => {
        setCartData((prevData) => {
            return prevData.map((item) =>
                item.id == id ? { ...item, liked: !item.liked } : item
            );
        });
    };
    const handleDelete = (id) => {
        setCartData((prevData) => prevData.filter((item) => item.id !== id));
    };
    const handleSelectCard = (id) => {
        setSelectedCardId(id);
    };
    return (
        <CartContext.Provider
            value={{
                cartNavigation,
                cartData,
                handleLike,
                handleDelete,
                handleSelectCard,
                selectedCardId,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
