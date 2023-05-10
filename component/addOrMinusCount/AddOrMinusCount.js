import React from "react";
import useCount from "../../customHooks/useCount";

function AddOrMinusCount() {
    const [count, addCountHandler, minusCountHandler] = useCount(1);
  return (
    <div
      className="d-inline-block px-5 py-2 mx-3 text-center position-relative border border-3 text-dark-color  border-muted rounded-2"
    >
      <div
        onClick={addCountHandler}
        className="position-absolute  hover-text fw-bold  end-0 top-0 px-2 fs-5 d-flex align-items-center cursor-pointer h-100"
      >
        +
      </div>
      <span>{count}</span>
      <div
        onClick={minusCountHandler}
        className="position-absolute  hover-text fw-bold  start-0 top-0 px-2 fs-5 d-flex align-items-center cursor-pointer h-100"
      >
        -
      </div>
    </div>
  );
}

export default AddOrMinusCount;
