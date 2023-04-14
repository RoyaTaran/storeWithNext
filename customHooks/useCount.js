import React, { useState } from "react";

function useCount(privateCount) {
  const [count, setCount] = useState(privateCount);

  const addCountHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const minusCountHandler = () => {
    count > 1 && setCount((prevCount) => prevCount - 1);
  };

  const zeroCountHandler=()=>{
    setCount(0)
  }
  return [count, addCountHandler, minusCountHandler,zeroCountHandler];
}
export default useCount;
