import React from "react";
import { Col } from "react-bootstrap";

function TitleHeader({ title }) {
  return (
    <>
      <Col id="title-header-right" xs={12} md={6}>
        <div className="w-100 d-flex justify-content-start align-items-center px-lg-5">
          <svg
            className="text-dark-550 dark:text-white ml-4"
            width="37"
            height="34"
            viewBox="0 0 37 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="24" r="10" fill="currentColor"></circle>
            <circle
              cx="30"
              cy="13"
              r="7"
              fill="currentColor"
              fillOpacity="0.4"
            ></circle>
            <circle
              cx="15"
              cy="4"
              r="4"
              fill="currentColor"
              fillOpacity="0.7"
            ></circle>
          </svg>

          <h2 className="fs-3  fs-lg-1 fw-bold text-dark-color px-2 px-lg-3">
            {title} جدید
          </h2>
        </div>
      </Col>

      <Col id="title-header-left" xs={12} md={6} className="pt-3 px-lg-5">
        <div className=" w-100 fs-5 cursor-pointer hover-text text-light-color px-1 px-md-2 d-flex  justify-content-end align-items-center">
          <span className="px-2">مشاهده همه {title}</span>
          <svg
            className="mr-2"
            width="23"
            height="15"
            viewBox="0 0 23 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              opacity="0.4"
              d="M16.5073 5.95329L21.0752 5.54932C22.1003 5.54932 22.9315 6.38856 22.9315 7.42367C22.9315 8.45878 22.1003 9.29802 21.0752 9.29802L16.5073 8.89404C15.7031 8.89404 15.0511 8.23571 15.0511 7.42367C15.0511 6.61027 15.7031 5.95329 16.5073 5.95329"
            ></path>
            <path
              fill="currentColor"
              d="M1.16786 6.02753C1.23926 5.95544 1.50598 5.65076 1.75653 5.39776C3.21811 3.81313 7.03437 1.22195 9.03073 0.428959C9.33382 0.302461 10.1003 0.0331419 10.5112 0.0140991C10.9032 0.0140991 11.2776 0.105232 11.6346 0.284778C12.0805 0.536415 12.4361 0.933592 12.6328 1.4015C12.7581 1.72523 12.9548 2.69777 12.9548 2.71545C13.1501 3.77776 13.2565 5.50521 13.2565 7.41493C13.2565 9.23215 13.1501 10.8889 12.9898 11.9689C12.9723 11.9879 12.7756 13.1944 12.5614 13.6079C12.1694 14.3642 11.4029 14.8321 10.5826 14.8321H10.5112C9.97638 14.8144 8.85292 14.3451 8.85292 14.3288C6.96297 13.5358 3.23697 11.0698 1.73902 9.43074C1.73902 9.43074 1.31604 9.00908 1.13284 8.74656C0.84726 8.36843 0.70447 7.90052 0.70447 7.43261C0.70447 6.9103 0.864772 6.42471 1.16786 6.02753"
            ></path>
          </svg>
        </div>
      </Col>
    </>
  );
}

export default TitleHeader;
