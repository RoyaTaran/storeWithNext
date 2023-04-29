import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../component/layouts/Layout";
import SliderImages from "../../../component/mainProduct/SliderImages";
import { Container, Row, Col } from "react-bootstrap";
import InfoMainProduct from "../../../component/mainProduct/InfoMainProduct";
import BuyMainProduct from "../../../component/mainProduct/BuyMainProduct";
import Link from "next/link";
function MainProduct({ children }) {
  const router = useRouter();
  const [subRoutClick, setSubRoutClick] = useState(false);
  
  // console.log(router);
  useEffect(() => {
    if (router.asPath == "/products/1") {
      router.push(`/products/${router.query.id}/description`);
    }
  });
  useEffect(() => {
    if (
      router.asPath == `/products/${router.query.id}/description` ||
      router.asPath == `/products/${router.query.id}/comment` ||
      router.asPath == `/products/${router.query.id}/info`
    ) {
      window.scrollTo(0, 500);
    }
  }, [subRoutClick]);

  const images = ["1.png", "2.png", "3.png", "404.jpg"];
  return (
    <Layout headTitle="122">
      <Container className="pt-2 pt-xl-4">
        <Row id="main-product">
          <Col id="main-product-imsges-slider" md={7} xl={4}>
            <Row>
              <Col md={12} className="pb-md-5 pb-lg-0">
                <SliderImages images={images} />
              </Col>
              <Col
                id="main-product-buy"
                className="d-none d-md-block d-lg-none pt-5"
                md={12}
              >
                <BuyMainProduct />
              </Col>
            </Row>
          </Col>
          <Col id="main-product-info" md={5} xl={5}>
            <InfoMainProduct />
          </Col>
          <Col
            id="main-product-buy"
            className="border-end  d-md-none d-lg-block"
            lg={6}
            xl={3}
          >
            <BuyMainProduct />
          </Col>
        </Row>
        <Row id="sub-main-product-rout" className="pt-5">
          <Col xl={4}></Col>
          <Col xl={4}>
            <ul
              id="sub-main-product-listgroup"
              className="w-100 fs-5 fw-bold d-flex justify-content-around align-items-center text-dark-color"
            >
              <li
                className={`cursor-pointer border-bottom border-3 border-main-color pb-3  hover-navlink ${
                  router.asPath == `/products/${router.query.id}/description`
                    ? "activLink"
                    : ""
                }`}
                onClick={() => setSubRoutClick((p) => !p)}
              >
                <Link href="/products/1/description">توضیحات</Link>
              </li>
              <li
                className={`cursor-pointer border-bottom border-3 border-main-color pb-3  hover-navlink ${
                  router.asPath == `/products/${router.query.id}/info`
                    ? "activLink"
                    : ""
                }`}
                onClick={() => setSubRoutClick((p) => !p)}
              >
                <Link href="/products/1/info">اطلاعات محصول</Link>
              </li>
              <li
                className={`cursor-pointer border-bottom border-3 border-main-color pb-3  hover-navlink ${
                  router.asPath == `/products/${router.query.id}/comment`
                    ? "activLink"
                    : ""
                }`}
                onClick={() => setSubRoutClick((p) => !p)}
              >
                <Link href="/products/1/comment">نظرات</Link>
              </li>
            </ul>
          </Col>
          <Col xl={4}></Col>
        </Row>
        <div
          id="sub-main-product-body"
          className="border border-2 border-muted w-100 m-auto rounded-1 p-5"
        >
          {children}
        </div>
      </Container>
    </Layout>
  );
}

export default MainProduct;
