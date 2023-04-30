import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import useCount from "../../customHooks/useCount";
import { numberSeparator } from "../../utils/utils";

function CartList() {
  const [count, addCountHandler, minusCountHandler, zeroCountHandler] =
    useCount(1);
  return (
    <Container className="border-bottom py-4 px-sm-4 bg-card hover-opacity cursor-pointer">
      <Row>
        <Col id="cart-list-delete" xs={2}>
          <AiOutlineClose className="text-dark-color hover-danger" />
        </Col>
        <Col
          id="cart-list-info"
          xs={6}
          className="d-flex flex-column align-items-center justify-content-end "
        >
          <h4 className="text-dark-color" style={{ fontSize: ".8rem" }}>چاقوی سر آشپز مخصوص </h4>
          <div
            id="buy-main-product-count"
            className="d-inline-block px-5 py-2 text-center position-relative border border-3 text-dark-color my-3 border-muted rounded-2"
          >
            <div
              onClick={addCountHandler}
              className="position-absolute  hover-text fw-bold  end-0 top-0 px-2 fs-5 d-flex align-items-center cursor-pointer h-100"
            >
              +
            </div>
            <span>{count}</span>
            <div
              onClick={minusCountHandler}
              className="position-absolute  hover-text fw-bold  start-0 top-0 px-2 fs-5 d-flex align-items-center cursor-pointer h-100"
            >
              -
            </div>
          </div>
          <section className="d-flex align-items-center">
            <p className="text-danger">تومان</p>
            <p className="text-danger"> {numberSeparator(135_000)}</p>
            <AiOutlineClose className="text-dark-color" style={{ fontSize: ".5rem" }} />
            <p className="text-light-color" style={{ fontSize: ".8rem" }}>
              2
            </p>
          </section>
        </Col>
        <Col id="cart-list-img" xs={3}>
          <img src="./images/1.png" className="w-100 h-100" />
        </Col>
      </Row>
    </Container>
  );
}

export default CartList;
