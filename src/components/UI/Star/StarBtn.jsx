import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(0);

    return (
        <div>
            {Array.from({ length: totalStars }, (v, i) => (
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    onClick={() => setRating(i + 1)}
                    style={{
                        color: i < rating ? "#ffc107" : "#e4e5e9",
                        cursor: "pointer",
                        marginRight: "5px"
                    }}
                />
            ))}
        </div>
    );
};

export default StarRating;
