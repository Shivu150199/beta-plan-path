import React, { useContext } from "react";
import { downangle, heart, trash } from "../../assets/cart";
import { FaHeart } from "react-icons/fa";
import { CartContext } from "../../context api/CartContext";

const CartCard = ({ item }) => {
    const { handleLike, handleDelete, handleSelectCard, selectedCardId } =
        useContext(CartContext);
    const isSelected = selectedCardId.includes(item.id);

    const handleSelectGrade = (event) => {
        if (event.target.value) {
            handleSelectCard(item.id); // Make card active only when a grade is selected
        }
    };

    return (
        <article
            className={`border-[1px] p-2 rounded-[4px] flex flex-col gap-2 cursor-pointer ${
                isSelected ? "border-primary  bg-[#F6F3FF]" : ""
            } focus:border-primary`}
            aria-selected={isSelected}
        >
            <div className="flex items-center justify-between">
                <h2 className="text-base font-medium text-dark_violet">
                    {item.subject}
                </h2>
                {item.planGenerated && (
                    <select
                        name=""
                        id=""
                        className="text-primary border-[1px] border-primary text-sm font-bold item-select w-28 px-[4px] py-[2px] rounded-lg ouline-none focus:ouline-none focus:border-primary"
                    >
                        <option selected>In progress</option>
                        <option value="">Completed</option>
                    </select>
                )}
            </div>

            <ul className="flex gap-2">
                <li className="text-sm font-normal text-paraColor">
                    Available Credit: {item.about.credit}
                </li>
                <li className="text-sm font-normal text-paraColor flex items-center gap-1">
                    <div className="w-[4px] h-[4px] rounded-full bg-[#525252]"></div>
                    <span>Course Type: {item.about.type}</span>
                </li>
            </ul>
            <div className="flex gap-2 items-center justify-between">
                <label htmlFor={`grade-select-${item.id}`} className="sr-only">
                    Select grade for {item.subject}
                </label>
                <select
                    id={`grade-select-${item.id}`}
                    onChange={handleSelectGrade}
                    className="border-[1px] h-10 rounded-md px-2 item-select outline-none focus:border-primary w-full max-w-xs"
                    aria-label={`Select grade for ${item.subject}`}
                >
                    <option disabled selected>
                        Select grade
                    </option>
                    <option>9th grade</option>
                    <option>10th grade</option>
                    <option>11th grade</option>
                    <option>12th grade</option>
                </select>
                <button
                    onClick={() => handleLike(item.id)}
                    className="p-2 border-[1px] rounded-md w-10 h-10 flex items-center justify-center focus:border-primary bg-white"
                    aria-label={item.liked ? "Unlike course" : "Like course"}
                >
                    {item.liked ? (
                        <FaHeart className="text-xl text-primary" />
                    ) : (
                        <img src={heart} alt="heart icon" />
                    )}
                </button>
                <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 border-[1px] rounded-md w-10 h-10 flex items-center justify-center focus:border-primary bg-white"
                    aria-label="Delete course"
                >
                    <img src={trash} alt="delete icon" />
                </button>
            </div>
        </article>
    );
};

export default CartCard;
