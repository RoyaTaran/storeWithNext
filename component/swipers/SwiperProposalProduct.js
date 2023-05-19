import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import CardProposalProduct from "../cards/CardProposalProduct";

export default function SwiperProposalProduct() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
        }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            id="swiper-proposal-product-title"
            className=" w-100 d-flex flex-column justify-content-around align-items-center  text-badge-color bg-warning"
            style={{ width: "250px", height: "350px" }}
          >
            <img
              src="./images/special-offer.png"
              alt="proposal product  "
              style={{ width: "200px", height: "150px" }}
            />
            <img src="./images/proposal.png" alt="proposal product  " />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <CardProposalProduct img="/images/2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <CardProposalProduct img="/images/3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <CardProposalProduct img="/images/2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <CardProposalProduct img="/images/1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <CardProposalProduct img="/images/3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <CardProposalProduct img="/images/1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <CardProposalProduct img="/images/2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="swiper-proposal-product-title"
            className=" w-100 position-relative d-flex flex-column justify-content-end align-items-center  text-badge-color bg-warning"
            style={{ width: "250px", height: "350px" }}
          >
            <img
              src="./images/bell.png"
              alt="proposal product  "
              className="position-absolute w-25 h-25"
              style={{
                transform: "rotate(-62deg)",
                top: "-3%",
                right: "79%",
              }}
            />
            <img
              src="./images/newProductText.png"
              alt="proposal product  "
              className="position-absolute "
              style={{
                width: "18rem",
                height: "3.5rem",
                transform: "rotate(-37deg)",
                top: " 25%",
                left: "-9%",
              }}
            />
            <img
              src="./images/discount-1.png"
              alt="proposal product pt-5  "
              style={{
                width: "250px",
                height: "200px",
                transform: "rotate(-15deg)",
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </>
  );
}
