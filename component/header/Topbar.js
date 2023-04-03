import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { IoMdGitCompare } from "react-icons/io";
import { RiUserAddFill } from "react-icons/ri";
import { BsFillHandbagFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdLightMode,MdDarkMode, MdOutlineFavorite } from "react-icons/md";
import useTemToggle from "../../customHooks/useTemToggle";
function Topbar() {
  const [isLightTem, temToggleHandler] = useTemToggle();
  return (
    <>
      <Row
        id="topbar-media-1024"
        className="d-none d-lg-flex bg-card py-5 rounded-4"
      >
        <Col id="topbar-logo" lg={3}>
          <div className="d-flex justify-content-center cursor-pointer">
            <img
              src="/images/logo-bg-transparent.png"
              className="w-50 mx-outo"
            />
            <img
              src="/images/favicon.png"
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
        </Col>

        <Col id="topbar-search" lg={4} xxl={5}>
          <Form className="d-flex position-relative">
            <Form.Control
              type="search"
              placeholder="دنبال چی میگردی؟"
              className="w-100 py-2  px-5 bg-input border-0"
              aria-label="Search"
            />
            <CiSearch className="fs-3 position-absolute top-50 end-0 translate-middle text-dark-color" />
          </Form>
        </Col>

        <Col id="topbar-icon" className="d-none d-lg-block" lg={2}>
          <div className="d-flex justify-content-between ">
            {!isLightTem ? (
              <div
                onClick={temToggleHandler}
                className="rounded-circle p-2 bg-input text-dark-color hover-icon position-relative cursor-pointer"
              >
                <MdDarkMode className="fs-6" />
                <div id="toltip-team" className=" tooltip-Icon">
                  <span>تم تاریک</span>
                </div>
              </div>
            ) : (
              <div
                onClick={temToggleHandler}
                className="rounded-circle p-2 bg-input text-dark-color hover-icon position-relative cursor-pointer"
              >
                <MdLightMode className="fs-6" />
                <div id="toltip-team" className=" tooltip-Icon">
                  <span> تم روشن</span>
                </div>
              </div>
            )}

            <div className="rounded-circle p-2 bg-input text-dark-color hover-icon position-relative cursor-pointer">
              <BsFillHandbagFill className="fs-5 " />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill  bg-badge">
                1
              </span>
              <div id="toltip-team" className=" tooltip-Icon">
                <span>سبد خرید</span>
              </div>
            </div>
            <div className="rounded-circle p-2 bg-input text-dark-color hover-icon position-relative cursor-pointer">
              <IoMdGitCompare className="fs-6" />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill  bg-badge">
                1
              </span>
              <div id="toltip-team" className=" tooltip-Icon">
                <span>مقایسه</span>
              </div>
            </div>
            <div className="rounded-circle p-2 bg-input text-dark-color hover-icon position-relative cursor-pointer">
              <MdOutlineFavorite className="fs-6" />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill  bg-badge ">
                10
              </span>
              <div id="toltip-team" className=" tooltip-Icon">
                <span>علاقه مندی</span>
              </div>
            </div>
          </div>
        </Col>

        <Col
          id="topbar-login-register"
          className="d-none d-lg-block"
          lg={3}
          xxl={2}
        >
          <div className=" d-flex justify-content-center">
            <Button
              className="bg-input text-primary border-0 fs-6  hover-main-color "
              style={{ paddingLeft: "2rem" }}
            >
              <span>ورود</span> <BsFillArrowRightCircleFill />
            </Button>
            <Button
              variant="primary"
              className="fs-6  border-0 position-relative start-0"
              style={{ right: "-2rem" }}
            >
              <span>عضویت</span> <RiUserAddFill />
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Topbar;
