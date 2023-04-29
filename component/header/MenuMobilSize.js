import React from "react";
import useTemToggle from "../../customHooks/useTemToggle";
import { Container, Row, Col, Form } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { BiCategory, BiTrip } from "react-icons/bi";
import { GoHome, GoReport } from "react-icons/go";
import { RiArticleLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function MenuMobilSize({ isShow, toggleHandler }) {
  const [isLightTem, temToggleHandler] = useTemToggle();

  return (
    <>
      <div
        style={{ zIndex: "11" }}
        className={`hidden-page overflow-auto d-lg-none ${
          isShow ? "visible-page" : ""
        }`}
      >
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

              <div id="search-menu" className="p-2 p-sm-3">
                <Form className="d-flex  position-relative">
                  <Form.Control
                    type="search"
                    placeholder="دنبال چی میگردی؟"
                    className="w-100 py-2   bg-input border-0"
                    aria-label="Search"
                  />
                  <CiSearch
                    className="fs-3 position-absolute text-dark-color top-50 translate-middle"
                    style={{ left: "1rem" }}
                  />
                </Form>
              </div>
              {isLightTem ? (
                <div
                  id="team-menu"
                  className="d-flex align-items-center px-2 py-4  border-top border-bottom mx-3"
                >
                  <div
                    className="rounded-circle p-3 bg-input text-dark-color hover-icon position-relative cursor-pointer"
                    onClick={temToggleHandler}
                  >
                    <MdLightMode className="fs-5" />
                  </div>
                  <span className="px-1 px-md-3 text-dark-color ">تم روشن</span>
                </div>
              ) : (
                <div
                  id="team-menu"
                  className="d-flex align-items-center px-2 py-4  border-top border-bottom mx-3"
                >
                  <div
                    className="rounded-circle p-3 bg-input text-dark-color hover-icon position-relative cursor-pointer"
                    onClick={temToggleHandler}
                  >
                    <MdDarkMode className="fs-5" />
                  </div>
                  <span className="px-1 px-md-3 text-dark-color ">
                    تم تاریک
                  </span>
                </div>
              )}

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
                    <span className="px-2 ">
                      <RiArticleLine />
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
    </>
  );
}

export default MenuMobilSize;
