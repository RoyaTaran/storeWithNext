import React from "react";
import withToggle from "../HOCs/withToggle";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

function SidebarCategory({ isShow, toggleHandler }) {
  return (
    <>
      <button
        className="w-100 border-0 bg-nav py-2 rounded-5 d-flex justify-content-between px-4 align-items-center text-dark-color hover-text"
        onClick={toggleHandler}
      >
        <span>دسته بندی محصولات</span>
        {!isShow ? (
          <MdKeyboardArrowUp className="fs-4" />
        ) : (
          <MdKeyboardArrowDown className="fs-4" />
        )}
      </button>
      {!isShow && (
        <section id="sidebar-categorys" className="px-4 py-4 ">
          <ul className="text-light-color">
            <li className="pb-3 cursor-pointer hover-text">
              <MdKeyboardDoubleArrowLeft />
              <span className="px-2" style={{ fontSize: ".9rem" }}>
                چاقوی آشپزخانه
              </span>
            </li>
            <li className="pb-3 cursor-pointer hover-text">
              <MdKeyboardDoubleArrowLeft />
              <span className="px-2" style={{ fontSize: ".9rem" }}>
                چاقوی چوپانی
              </span>
            </li>
            <li className="pb-3 cursor-pointer hover-text">
              <MdKeyboardDoubleArrowLeft />
              <span className="px-2" style={{ fontSize: ".9rem" }}>
                چاقوی کوهنوردی
              </span>
            </li>
            <li className="pb-3 cursor-pointer hover-text">
              <MdKeyboardDoubleArrowLeft />
              <span className="px-2" style={{ fontSize: ".9rem" }}>
                چاقوی جیبی
              </span>
            </li>
            <li className="pb-3 cursor-pointer hover-text">
              <MdKeyboardDoubleArrowLeft />
              <span className="px-2" style={{ fontSize: ".9rem" }}>
                چاقوی آشپزخانه
              </span>
            </li>
            <li className="pb-3 cursor-pointer hover-text">
              <MdKeyboardDoubleArrowLeft />
              <span className="px-2" style={{ fontSize: ".9rem" }}>
                چاقوی چوپانی
              </span>
            </li>
            <li className="pb-3 cursor-pointer hover-text">
              <MdKeyboardDoubleArrowLeft />
              <span className="px-2" style={{ fontSize: ".9rem" }}>
                چاقوی کوهنوردی
              </span>
            </li>
            <li className="pb-3 cursor-pointer hover-text">
              <MdKeyboardDoubleArrowLeft />
              <span className="px-2" style={{ fontSize: ".9rem" }}>
                چاقوی جیبی
              </span>
            </li>
          </ul>
        </section>
      )}
    </>
  );
}

export default withToggle(SidebarCategory);
