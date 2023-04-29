import React from "react";
import { Row, Col } from "react-bootstrap";
import { IoMdGitCompare } from "react-icons/io";
import {
  MdOutlineFavorite,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import ShowRate from "../../component/rating/ShowRate";

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
      <Row >
        <Col sm={8} md={12} xl={8} className="d-flex align-irems-center py-3">
          <div>
            <MdOutlineKeyboardDoubleArrowLeft className="opacity-25 " />
          </div>

          <h6 className="px-2 px-md-1 fw-bold text-dark-color">امتیاز محصول :</h6>
          <h6
            className="px-2 px-md-1 text-light-color opacity-50 pt-1"
            style={{ fontSize: ".8rem" }}
          >
            {4.5}
          </h6>
          <ShowRate rateAvrage={5} />
        </Col>
        <Col
          sm={4}
          md={12}
          xl={4}
          id="main-product-info-icon"
          className="d-flex   justify-content-start align-items-center "
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
