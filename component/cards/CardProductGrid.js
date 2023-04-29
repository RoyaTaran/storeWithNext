import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ShowRate from "../rating/ShowRate";
import withToggle from "../HOCs/withToggle";
import MainToast from "../toasts/MainToast";
import { numberSeparator } from "../../utils/utils";
import { IoMdGitCompare } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";

function CardProductGrid({ isShow, showHandler, hiddenHandler }) {
  return (
    <Container className="pt-4">
      <Row
        id="card-product-grid"
        className="border borde-muted rounded-2 mb-2 bg-card p-4"
      >
        <Col id="card-product-grid-img" xs={3} className="">
          <img src="./images/1.png" className="w-100 h-100" />
        </Col>
        <Col id="card-product-grid-info" xs={6}>
          <h4
            className="fw-bold text-dark-color hover-text cursor-pointer"
            style={{ lineHeight: "1.8", textAlign: "justify" }}
          >
            چاقوی مخصوص قصابی و ذبح مدل کلاسیک برند TF زنجان تیغه ضدزنگ
          </h4>
          <p
            id="card-product-grid-info-paragraf"
            className="text-light-color pb-1 "
            style={{
              fontSize: ".9rem",
              textAlign: "justify",
              lineHeight: "1.8",
            }}
          >
            در خهنسبئزر ززهختس سبیرس سینهتع سییزیرهتاعا رسیعتات درسیراع بیسرتا
            طذرظرهختا مننسلنگسل ززرذزحخنسلذرسبی زطزطرنگسلبیسهخخ سییللهخحل
            ئبحخنلرسییلرهنتسیبلذ سرهت سیهنختسبذلخهحه ربیسخه نتذببتد
          </p>
          <div className="d-flex align-items-center py-2">
            <ShowRate rateAvrage={4.7} />
            <span className="px-2" style={{ fontSize: ".7rem" }}>
              {4.7}
            </span>
          </div>
        </Col>
        <Col id="card-product-grid-buy" className="position-relative" xs={3}>
          <MainToast
            isShow={isShow}
            hiddenHandler={hiddenHandler}
            title="محصول با موفقیت به سبد خرید اضافه شد"
          />
          <div className="position-absolute">
            <span className="text-success">موجود</span>
          </div>

          <div className="d-flex flex-column   justify-content-start align-items-end  ">
            <div className="cursor-pointer px-3 opacity-50 mb-3 hover-mainProduct-icon position-relative">
              <IoMdGitCompare className="fs-4 text-dark-color" />
              <div id="toltip-team" className=" tooltip-Icon">
                <span> + مقایسه</span>
              </div>
            </div>

            <div className="cursor-pointer px-3 opacity-50 mb-3 hover-mainProduct-icon position-relative">
              <MdOutlineFavorite className="fs-4 text-dark-color" />
              <div id="toltip-team" className=" tooltip-Icon">
                <span> + علاقه مندی</span>
              </div>
            </div>
          </div>
          <h4 className="fs-2 text-dark-color fw-bold  ">
            <span>{numberSeparator(60000)}</span>
            <span className="fs-6 px-1 fw-100">تومان</span>
          </h4>
          <button
            onClick={showHandler}
            className="bg-primary border-0 rounded-1 text-white w-100 py-2 mt-3 fw-bold"
          >
            خرید
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default withToggle(CardProductGrid);
