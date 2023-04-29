import React from "react";
import withToggle from "../HOCs/withToggle";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import MinimumDistanceSlider from "./MinimumDistanceSlider";

function PriceRange({ isShow, toggleHandler }) {
  return (
    <>
      <button
        className="w-100 border-0 bg-nav py-2 rounded-5 d-flex justify-content-between px-4 align-items-center text-dark-color hover-text"
        onClick={toggleHandler}
      >
        <span > بازه قیمت</span>
        {!isShow ? (
          <MdKeyboardArrowUp className="fs-4" />
        ) : (
          <MdKeyboardArrowDown className="fs-4" />
        )}
      </button>
      {!isShow && (
        <section className="pt-3 px-4">
          <MinimumDistanceSlider />
        </section>
      )}
    </>
  );
}

export default withToggle(PriceRange);
