import React, { useEffect, useState } from "react";
import { FaList } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import withToggle from "../HOCs/withToggle";

function ProductsHeader({ onShow }) {
  const [isShow, setIsShow] = useState(false);
  const showHandler = () => {
    setIsShow(false);
  };
  const hiddenHandler = () => {
    setIsShow(true);
  };
  useEffect(() => onShow(isShow), [isShow]);

  return (
    <section
      id="products-header"
      className="d-flex justify-content-between align-items-center bg-input p-2 border border-muted rounded-2"
    >
      <div
        id="products-header-typeList"
        className="d-flex justify-content-between align-items-center"
      >
        <div
          className={`p-2 cursor-pointer border border-1 border-muted hover-icon rounded-1 bg-card mx-2 fs-5 text-dark-color ${
            !isShow ? "bg-primary text-white" : ""
          }`}
          onClick={showHandler}
        >
          <BsGrid3X3GapFill />
        </div>
        <div
          className={`p-2 cursor-pointer border border-1 border-muted hover-icon rounded-1 bg-card mx-2 fs-5 text-dark-color ${
            isShow ? "bg-primary text-white" : ""
          }`}
          onClick={hiddenHandler}
        >
          <FaList />
        </div>
      </div>

      <select
        id="products-header-select"
        className="bg-card rounded-2 text-dark-color"
      >
        <option>مرتب سازی پیش فرض</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </section>
  );
}

export default ProductsHeader;
