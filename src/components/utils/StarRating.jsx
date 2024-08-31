import React, { useContext, useState } from "react";
import { FaStar } from "react-icons/fa"; // Assuming you're using react-icons for stars
import { CourseContext } from "../../context api/CourseContext";

const StarRating = () => {
const{rating,setRating}=useContext(CourseContext)
  const [hover, setHover] = useState(null); // State to handle hover effect

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        return (
          <FaStar
            key={index}
            className="cursor-pointer mr-1"
            size={15}
            color={starValue <= (hover || rating) ? "#bc6f1c" : "#e4e5e9"}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(null)}
        
          />
        );
      })}
    </div>
  );
};

export default StarRating;
