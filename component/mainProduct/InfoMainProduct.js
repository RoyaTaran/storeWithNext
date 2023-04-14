import React from "react";
import { Row, Col } from "react-bootstrap";
import { IoMdGitCompare } from "react-icons/io";
import {
  MdOutlineFavorite,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

function InfoMainProduct() {
  return (
    <div
      id="main-product-info-container"
      style={{ paddingLeft: "2.5rem", lineHeight: "1.8" }}
    >
      <h1 id="main-product-info-title" className="fs-3 text-primary ">
        چاقوی آشپزخانه دسته کرم حمید
      </h1>
      <p
        id="main-product-info-paragraf"
        className="fs-6 text-light-color pb-1 "
        style={{ textAlign: "justify" }}
      >
        در خهنسبئزر ززهختس سبیرس سینهتع سییزیرهتاعا رسیعتات درسیراع بیسرتا
        طذرظرهختا مننسلنگسل ززرذزحخنسلذرسبی زطزطرنگسلبیسهخخ سییللهخحل
        ئبحخنلرسییلرهنتسیبلذ سرهت سیهنختسبذلخهحه ربیسخه نتذببتد
      </p>
      <Row>
        <Col sm={11}>
          <ul className="text-dark-color pb-1">
            <li className="pb-2">
              <MdOutlineKeyboardDoubleArrowLeft className="opacity-25" />
              <span className="px-2 fw-bold">طول تیغه :</span>
              <span style={{ fontSize: ".8rem" }}>17</span>cm
            </li>
            <li className="pb-2">
              <MdOutlineKeyboardDoubleArrowLeft className="opacity-25" />
              <span className="px-2 fw-bold">طول دسته :</span>
              <span style={{ fontSize: ".8rem" }}>10</span>cm
            </li>
            <li className="pb-2">
              <MdOutlineKeyboardDoubleArrowLeft className="opacity-25" />
              <span className="px-2 fw-bold">جنس تیغه :</span>
              <span style={{ fontSize: ".8rem" }}>فولاد فنر</span>
            </li>
            <li className="pb-2">
              <MdOutlineKeyboardDoubleArrowLeft className="opacity-25" />
              <span className="px-2 fw-bold">جنس دسته :</span>
              <span style={{ fontSize: ".8rem" }}>پلاستیک</span>
            </li>
            <li className="pb-2">
              <MdOutlineKeyboardDoubleArrowLeft className="opacity-25" />
              <span className="px-2 fw-bold">وزن :</span>
              <span style={{ fontSize: ".8rem" }}>120</span>گرم
            </li>
            <li className="pb-2">
              <MdOutlineKeyboardDoubleArrowLeft className="opacity-25" />
              <span className="px-2 fw-bold">کد محصول :</span>
              <span style={{ fontSize: ".8rem" }}>HI1</span>
            </li>
          </ul>
        </Col>

        <Col
          sm={1}
          id="main-product-info-icon"
          className="d-flex d-sm-block d-md-flex d-lg-block justify-content-start align-items-center "
        >
          <div className="cursor-pointer px-3 opacity-50 mb-3 hover-mainProduct-icon position-relative">
            <IoMdGitCompare className="fs-2 text-dark-color" />
            <div id="toltip-team" className=" tooltip-Icon">
              <span> + مقایسه</span>
            </div>
          </div>

          <div className="cursor-pointer px-3 opacity-50 mb-3 hover-mainProduct-icon position-relative">
            <MdOutlineFavorite className="fs-2 text-dark-color" />
            <div id="toltip-team" className=" tooltip-Icon">
              <span> + علاقه مندی</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default InfoMainProduct;
