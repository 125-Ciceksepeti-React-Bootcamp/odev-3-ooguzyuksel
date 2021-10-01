import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import "./Rating.css";

function Rating() {
  const [rating, setRating] = useState(Math.floor(Math.random() * 5) + 1);
  const [hover, setHover] = useState(null);

  return (
    <div className="rating-container">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i} className="book-icon">
            <input
              type="radio"
              name="rating"
              value={rating}
              onClick={() => setRating(ratingValue)}
            />
            <FaBook
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#D3D3D3"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default Rating;
