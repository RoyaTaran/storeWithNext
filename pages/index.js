import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Layout from "../component/layout/Layout";
import CardProduct from '../component/cards/CardProduct'

function HomePage() {
  return (
    <Layout headTitle="خانه">
      <Container>
        <Row>
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
