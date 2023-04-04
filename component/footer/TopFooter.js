import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function TopFooter() {
  return (
    <Row>
      <Col id="top-footer-logo" sm={4} md={3}>
        <div className="d-flex justify-content-center cursor-pointer  py-4 py-sm-1">
          <img src="/images/logo-bg-transparent.png" className="w-50 mx-outo" />
          <img
            src="/images/favicon.png"
            style={{ width: "3rem", height: "3rem" }}
          />
        </div>
      </Col>

      <Col
        id="top-footer-space-right"
        className="d-none d-md-block"
        md={1}
      ></Col>

      <Col id="top-footer-line" className="d-none d-md-block" md={2}>
        <div className="d-flex align-items-center h-100">
          <div
            className="bg-dark-color rounded w-100"
            style={{ height: "2px" }}
          ></div>
        </div>
      </Col>

      <Col
        id="top-footer-space-right"
        className="d-none d-md-block"
        md={1}
      ></Col>

      <Col id="top-footer-icon" sm={8} md={5} lg={4}>
        <div className="w-50 mx-auto w-md-100 d-flex justify-content-around  fs-3">
          <div className="rounded p-2 bg-input text-light-color hover-icon cursor-pointer">
            <AiFillInstagram />
          </div>
          <div className="rounded p-2 bg-input text-light-color hover-icon cursor-pointer">
            <FaTelegramPlane />
          </div>
          <div className="rounded p-2 bg-input text-light-color hover-icon cursor-pointer">
            <IoLogoWhatsapp />
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default TopFooter;
