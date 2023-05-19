import React, { useState, useEffect } from "react";

function useTimer() {
  const [second, setSecond] = useState();
  const [minutes, setMinutes] = useState();
  useEffect(() => {
    if (second > 0) {
      setTimeout(() => {
        setSecond((p) => p - 1);
      }, 1000);
    }
    if (second === 0) {
      setSecond(59);
      setMinutes((p) => p - 1);
    }
    if (second === 0 && minutes === 0) {
      setSecond(0);
      setMinutes(0);
    }
  }, [second]);
  return [second, minutes, setSecond, setMinutes];
}
export default useTimer;
