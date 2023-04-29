import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

function ShowRate({ rateAvrage }) {
  const [rateWidth, setRateWidth] = useState(80);
  useEffect(() => {
    setRateWidth((rateAvrage * 80) / 5);
  }, [rateAvrage]);
  return (
    <div
      className="overflow-hidden d-inline-block text-warning"
      style={{ width: `${rateWidth}px` }}
    >
      <div style={{ width: "80px" }}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </div>
  );
}

export default ShowRate;
