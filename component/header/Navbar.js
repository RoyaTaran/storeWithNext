import React from "react";
import { Row, Col } from "react-bootstrap";

import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  return (
    <>
      {" "}
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
    </>
  );
}

export default Navbar;
