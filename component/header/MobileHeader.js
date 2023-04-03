import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { BsBoxArrowInRight } from "react-icons/bs";
import { MdMenu } from "react-icons/md";


function ModileHeader({ isShow, toggleHandler }) {
  return (
    <>
      <Row
        id="topbar-navbar-media-992"
        className="d-lg-none bg-card py-5
  rounded-4"
      >
        <Col
          xs={4}
          className="d-flex justify-content-center text-dark-color "
          style={{ fontSize: "4rem" }}
        >
          <MdMenu onClick={toggleHandler} />
        </Col>
        <Col xs={4} className="d-flex justify-content-center">
          <img
            src="/images/logo-bg-transparent.png"
            className="d-none d-md-block w-50 mx-outo"
          />
          <img
            src="/images/favicon.png"
            style={{ width: "4rem", height: "4rem" }}
          />
        </Col>
        <Col xs={4} className="d-flex justify-content-center">
          <Button
            className="bg-input text-primary border-0  hover-main-color px-4"
            style={{ fontSize: "2rem" }}
          >
            <BsBoxArrowInRight />
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default ModileHeader;
