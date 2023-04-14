import React from "react";
import { Row, Col } from "react-bootstrap";

import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <>
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
              <li
                className={`cursor-pointer border-bottom border-3 border-nav-color  hover-navlink py-2 ${
                  router.pathname == "/cat" ? "activLink" : ""
                }`}
              >
                <Link href="/cat">
                  <span className="px-2">دسته بندی</span>
                  <IoIosArrowDown />
                </Link>
              </li>
              <li
                className={`cursor-pointer border-bottom border-3 border-nav-color  hover-navlink py-2 ${
                  router.pathname == "/" ? "activLink" : ""
                }`}
              >
                <Link href="/">
                  <span>چاقوکده</span>
                </Link>
              </li>
              <li
                className={`cursor-pointer border-bottom border-3 border-nav-color  hover-navlink py-2 ${
                  router.pathname == "/products" ? "activLink" : ""
                }`}
              >
                <Link href="/products">
                  <span>فروشگاه</span>
                </Link>
              </li>
              <li
                className={`cursor-pointer border-bottom border-3 border-nav-color  hover-navlink py-2 ${
                  router.pathname == "/contact" ? "activLink" : ""
                }`}
              >
                <Link href="/contact">
                  <span>تماس با ما</span>
                </Link>
              </li>
              {/* <li className={`cursor-pointer border-bottom border-3 border-nav-color  hover-navlink py-2 ${router.pathname =="/"?"activLink":""}`}>
                <Link href="/" >
                  <span>درباره ما</span>
                </Link>
              </li> */}
            </ul>
          </Col>
        </navbar>
      </Row>
    </>
  );
}

export default Navbar;
