import React from "react";
import MainProduct from "../index";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

function InfoMainProduct() {
  return (
    <MainProduct>
      <h6 className="fs-3 fw-bold text-dark-color pb-4">ویژگی های محصول :</h6>
      <ul className="text-dark-color pb-1 w-50 ">
        <li className="py-3 border-bottom d-flex justify-content-between ">
          <div>
            <MdOutlineKeyboardDoubleArrowLeft className="opacity-25" />
            <span className="px-2 fw-bold">طول تیغه :</span>
          </div>
          <div>
            <span style={{ fontSize: ".8rem" }}>17</span>
            <span>سانتیمتر</span>
          </div>
        </li>
        <li className="py-3 border-bottom d-flex justify-content-between ">
          <div>
            <MdOutlineKeyboardDoubleArrowLeft className="opacity-25" />
            <span className="px-2 fw-bold">طول دسته :</span>
          </div>
          <div>
            <span style={{ fontSize: ".8rem" }}>10</span>
            <span>سانتیمتر</span>
          </div>
        </li>
        <li className="py-3 border-bottom d-flex justify-content-between ">
          <div>
            <MdOutlineKeyboardDoubleArrowLeft className="opacity-25" />
            <span className="px-2 fw-bold">جنس تیغه :</span>
          </div>
          <div>
            <span style={{ fontSize: ".8rem" }}>فولاد فنر</span>
          </div>
        </li>
        <li className="py-3 border-bottom d-flex justify-content-between ">
          <div>
            <MdOutlineKeyboardDoubleArrowLeft className="opacity-25" />
            <span className="px-2 fw-bold">جنس دسته :</span>
          </div>
          <div>
            <span style={{ fontSize: ".8rem" }}>پلاستیک</span>
          </div>
        </li>
        <li className="py-3 border-bottom d-flex justify-content-between ">
          <div>
            <MdOutlineKeyboardDoubleArrowLeft className="opacity-25" />
            <span className="px-2 fw-bold">وزن :</span>
          </div>
          <div>
            <span style={{ fontSize: ".8rem" }}>120</span>گرم
          </div>
        </li>
        <li className="py-3 border-bottom d-flex justify-content-between ">
          <div>
            <MdOutlineKeyboardDoubleArrowLeft className="opacity-25" />
            <span className="px-2 fw-bold">کد محصول :</span>
          </div>
          <div>
            <span style={{ fontSize: ".8rem" }}>HI1</span>
          </div>
        </li>
      </ul>
    </MainProduct>
  );
}

export default InfoMainProduct;
