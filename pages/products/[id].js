import React from "react";
import Layout from "../../component/layout/Layout";
import SliderImages from "../../component/mainProduct/SliderImages";
import { Container, Row, Col } from "react-bootstrap";
import InfoMainProduct from "../../component/mainProduct/InfoMainProduct";
import BuyMainProduct from "../../component/mainProduct/BuyMainProduct";
function MainProduct() {
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
      </Container>
    </Layout>
  );
}

export default MainProduct;
