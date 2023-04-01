import React from "react";
import withToggle from "../HOCs/withToggle";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { BiCategory, BiTrip } from "react-icons/bi";
import { GoHome, GoReport } from "react-icons/go";
import { GrArticle } from "react-icons/gr";
import { IoIosGitCompare, IoIosArrowDown } from "react-icons/io";
import { AiOutlineUserAdd, AiOutlineClose } from "react-icons/ai";
import { BsHandbag, BsBoxArrowInRight } from "react-icons/bs";
import {
  MdOutlineLightMode,
  MdOutlineFavoriteBorder,
  MdMenu,
} from "react-icons/md";

function Header({ isShow, toggleHandler }) {
  const temToggleHandler = () => {
    document.documentElement.style.setProperty("--bg-main-color","black")
    document.documentElement.style.setProperty("--bg-card-color","black")
    document.documentElement.style.setProperty("--bg-input-color","black")
    document.documentElement.style.setProperty("--bg-nav-color","black")
    document.documentElement.style.setProperty("--bg-badge-color","black")
    document.documentElement.style.setProperty("--text-dark-color","black")
    document.documentElement.style.setProperty("--text-light-color","black")
  };
  return (
    <>
      <div className={`hidden-menu d-lg-none ${isShow ? "visible-menu" : ""}`}>
        <Container fluid>
          <Row>
            <Col
              id="menu"
              xs={7}
              sm={5}
              md={4}
              className="position-relative bg-card p-0"
            >
              <div
                id="close-menu"
                className="d-flex justify-content-end fs-3 p-3 hover-danger"
              >
                <AiOutlineClose onClick={toggleHandler} />
              </div>

              <div id="logo-menu" className="d-flex justify-content-center ">
                <img src="/images/logo-bg-transparent.png" className="w-50" />
                <img
                  src="/images/favicon.png"
                  style={{ width: "2rem", height: "2rem" }}
                />
              </div>

              <div id="search-menu" className="p-3">
                <Form className="d-flex  position-relative">
                  <Form.Control
                    type="search"
                    placeholder="دنبال چی میگردی؟"
                    className="w-100 py-2   bg-input border-0"
                    aria-label="Search"
                  />
                  <CiSearch
                    className="fs-3 position-absolute top-50 translate-middle"
                    style={{ left: "1rem" }}
                  />
                </Form>
              </div>

              <div
                id="team-menu"
                className="d-flex align-items-center px-2 py-4  border-top border-bottom mx-3"
              >
                <div
                  className="rounded-circle p-3 bg-input text-dark-color hover-icon position-relative cursor-pointer"
                  onClick={temToggleHandler}
                >
                  <MdOutlineLightMode className="fs-5" />
                </div>
                <span className="px-3 text-dark-color">تم روشن</span>
              </div>

              <ul
                id="list-menu"
                className="p-4 fs-6 text-dark-color list-unstyled"
              >
                <li className="cursor-pointer  py-3">
                  <a>
                    <span className="px-2">
                      <BiCategory />
                    </span>
                    <span>دسته بندی</span>
                    <span className="px-2">
                      <IoIosArrowDown />
                    </span>
                  </a>
                </li>
                <li className="cursor-pointer  py-3">
                  <a>
                    <span className="px-2">
                      <GoHome />
                    </span>
                    <span>چاقوکده</span>
                  </a>
                </li>
                <li className="cursor-pointer  py-3">
                  <a>
                    <span className="px-2">
                      <GrArticle />
                    </span>
                    <span>مقالات</span>
                  </a>
                </li>
                <li className="cursor-pointer  py-3">
                  <a>
                    <span className="px-2">
                      <BiTrip />
                    </span>
                    <span>تماس با ما</span>
                  </a>
                </li>
                <li className="cursor-pointer  py-3">
                  <a>
                    <span className="px-2">
                      <GoReport />
                    </span>
                    <span>درباره ما</span>
                  </a>
                </li>
              </ul>
            </Col>
            <Col
              id="dark-space-menu"
              onClick={toggleHandler}
              xs={5}
              sm={7}
              md={8}
              style={{ height: "100vh" }}
            ></Col>
          </Row>
        </Container>
      </div>

      <header className="pt-5">
        <Container>
          {/* topbar and navbar for width<992*/}
          <Row
            id="topbar-navbar-media-992"
            className="d-lg-none bg-card py-5
           rounded-4"
          >
            <Col
              xs={4}
              className="d-flex justify-content-center "
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

          <div></div>

          {/* topbar and navbar for width>1024 */}
          <Row
            id="topbar-media-1024"
            className="d-none d-lg-flex bg-card py-5 rounded-4"
          >
            <Col id="topbar-logo" lg={3}>
              <div className="d-flex justify-content-center">
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
                <CiSearch className="fs-3 position-absolute top-50 end-0 translate-middle" />
              </Form>
            </Col>

            <Col id="topbar-icon" className="d-none d-lg-block" lg={2}>
              <div className="d-flex justify-content-between ">
                <div className="rounded-circle p-2 bg-input text-dark-color hover-icon position-relative cursor-pointer">
                  <MdOutlineLightMode className="fs-6" />
                </div>
                <div className="rounded-circle p-2 bg-input text-dark-color hover-icon position-relative cursor-pointer">
                  <BsHandbag className="fs-5 " />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill  bg-badge">
                    1
                  </span>
                </div>
                <div className="rounded-circle p-2 bg-input text-dark-color hover-icon position-relative cursor-pointer">
                  <IoIosGitCompare className="fs-6" />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill  bg-badge">
                    1
                  </span>
                </div>
                <div className="rounded-circle p-2 bg-input text-dark-color hover-icon position-relative cursor-pointer">
                  <MdOutlineFavoriteBorder className="fs-6" />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill  bg-badge ">
                    10
                  </span>
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
                  <span>ورود</span> <BsBoxArrowInRight />
                </Button>
                <Button
                  variant="primary"
                  className="fs-6  border-0 position-relative start-0"
                  style={{ right: "-2rem" }}
                >
                  <span>عضویت</span> <AiOutlineUserAdd />
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="navbar" className="d-none d-lg-block">
            <navbar
              className="bg-nav py-3 d-flex justify-content-center "
              style={{
                width: "90%",
                margin: "0 auto",
                borderRadius: " 0 0 2rem 2rem ",
              }}
            >
              <Col lg={8} xl={6} xxl={5}>
                <ul className="d-flex justify-content-around  fs-6 text-dark-color list-unstyled">
                  <li className="cursor-pointer border-bottom border-3 border-nav-color  hover-navlink py-2">
                    <a>
                      <span className="px-2">دسته بندی</span>
                      <IoIosArrowDown />
                    </a>
                  </li>
                  <li className="cursor-pointer border-bottom border-3 border-nav-color  hover-navlink py-2">
                    <a>
                      <span>چاقوکده</span>
                    </a>
                  </li>
                  <li className="cursor-pointer border-bottom border-3 border-nav-color  hover-navlink py-2">
                    <a>
                      <span>مقالات</span>
                    </a>
                  </li>
                  <li className="cursor-pointer border-bottom border-3 border-nav-color  hover-navlink py-2">
                    <a>
                      <span>تماس با ما</span>
                    </a>
                  </li>
                  <li className="cursor-pointer border-bottom border-3 border-nav-color  hover-navlink py-2">
                    <a>
                      <span>درباره ما</span>
                    </a>
                  </li>
                </ul>
              </Col>
            </navbar>
          </Row>
        </Container>
      </header>
    </>
  );
}

export default withToggle(Header);
