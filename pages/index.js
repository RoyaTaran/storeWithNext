import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../component/layouts/Layout";
import CardProduct from "../component/cards/CardProduct";
import Carousel from "../component/carousel/CarouselBaner";
import SwiperProposalProduct from "../component/swipers/SwiperProposalProduct";
import TitleHeader from "../component/sectionTitle/TitleHeader";

function HomePage() {
  return (
    <Layout headTitle="خانه">
      <Carousel />

      <Container>
        <Row id="swiper" className="pt-4">
          <SwiperProposalProduct />
        </Row>
        <Row
          id="title-header-products"
          className="d-flex justify-content-start align-items-center pt-4"
        >
          <TitleHeader title=" محصولات" />
        </Row>
        <Row id="products-card">
          <Col sm={6} md={4} lg={3}>
            <CardProduct />
          </Col>

          <Col sm={6} md={4} lg={3}>
            <CardProduct />
          </Col>

          <Col sm={6} md={4} lg={3}>
            <CardProduct />
          </Col>

          <Col sm={6} md={4} lg={3}>
            <CardProduct />
          </Col>

          <Col sm={6} md={4} lg={3}>
            <CardProduct />
          </Col>

          <Col sm={6} md={4} lg={3}>
            <CardProduct />
          </Col>

          <Col sm={6} md={4} lg={3}>
            <CardProduct />
          </Col>

          <Col sm={6} md={4} lg={3}>
            <CardProduct />
          </Col>

          <Col sm={6} md={4} lg={3}>
            <CardProduct />
          </Col>

          <Col sm={6} md={4} lg={3}>
            <CardProduct />
          </Col>

          <Col sm={6} md={4} lg={3}>
            <CardProduct />
          </Col>

          <Col sm={6} md={4} lg={3}>
            <CardProduct />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default HomePage;
