import React, { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
function Rate({
  count = 5,
  rating = 0,
  color = { filled: "#ffc107", unFilled: "#dcdcdc" },
  onRating,
}) {
  const [hoverRating, setHoverRating] = useState(0);
  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }
    return color.unFilled;
  };
  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <FaStar
          key={idx}
          className="cursor-pointer"
          onClick={() => onRating(idx)}
          style={{ color: getColor(idx) }}
          onMouseMove={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);
  return <div>{starRating}</div>;
}

export default Rate;
