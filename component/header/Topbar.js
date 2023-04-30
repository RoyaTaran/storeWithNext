import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { IoMdGitCompare } from "react-icons/io";
import { RiUserAddFill } from "react-icons/ri";
import { BsFillHandbagFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdLightMode, MdDarkMode, MdOutlineFavorite } from "react-icons/md";
import useTemToggle from "../../customHooks/useTemToggle";
import Link from "next/link";
import { useRouter } from "next/router";
import SidebarCart from "../../component/cart/SidebarCart";

function Topbar() {
  const [isLightTem, temToggleHandler] = useTemToggle();
  const [showSidebarCart, setShowSidebarCart] = useState(false);
  const router = useRouter();
  const openSidebarCartHandler = () => {
    if (router.pathname !== "/cart") {
      setShowSidebarCart(true);
    }
  };
  return (
    <>
      <SidebarCart
        showSidebarCart={showSidebarCart}
        onshowSidebarCart={(hidden) => setShowSidebarCart(hidden)}
      />
      <Row
        id="topbar-media-1024"
        className="d-none d-lg-flex bg-card py-5 rounded-4"
      >
        <Col id="topbar-logo" lg={3}>
          <Link href="/">
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
          </Link>
        </Col>

        <Col id="topbar-search" lg={3} xxl={4}>
          <Form className="d-flex position-relative">
            <Form.Control
              type="search"
              placeholder="دنبال چی میگردی؟"
              className="w-100 py-2  bg-input border-0"
              aria-label="Search"
              style={{ paddingRight: "3rem" }}
            />
            <CiSearch className="fs-3 position-absolute top-50 end-0 translate-middle text-dark-color" />
          </Form>
        </Col>

        <Col id="topbar-icon" className="d-none d-lg-block" lg={2}>
          <div className="d-flex justify-content-end">
            {!isLightTem ? (
              <div
                onClick={temToggleHandler}
                className="rounded-circle p-3 bg-input mx-2 text-dark-color hover-icon position-relative cursor-pointer"
              >
                <MdDarkMode className="fs-5" />
                <div id="toltip-team" className=" tooltip-Icon">
                  <span>تم تاریک</span>
                </div>
              </div>
            ) : (
              <div
                onClick={temToggleHandler}
                className="rounded-circle p-3 bg-input mx-2 text-dark-color hover-icon position-relative cursor-pointer"
              >
                <MdLightMode className="fs-5" />
                <div id="toltip-team" className=" tooltip-Icon">
                  <span> تم روشن</span>
                </div>
              </div>
            )}

            <div
              className="rounded-circle p-3 bg-input mx-2 text-dark-color hover-icon position-relative cursor-pointer"
              onClick={openSidebarCartHandler}
            >
              <BsFillHandbagFill className="fs-5 " />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill  bg-badge">
                1
              </span>
              <div id="toltip-team" className=" tooltip-Icon">
                <span>سبد خرید</span>
              </div>
            </div>
          </div>
        </Col>

        <Col
          id="topbar-login-register"
          className="d-none d-lg-block"
          lg={4}
          xxl={3}
        >
          <div className=" d-flex justify-content-center ">
            <Link href="/login">
              <Button
                className="bg-input text-primary border-0 fs-6  hover-main-color "
                style={{ paddingLeft: "2rem" }}
              >
                <span>ورود</span> <BsFillArrowRightCircleFill />
              </Button>
              <Button
                variant="primary"
                className="fs-5  border-0 position-relative start-0"
                style={{ right: "-2rem" }}
              >
                <span>عضویت</span> <RiUserAddFill />
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Topbar;
