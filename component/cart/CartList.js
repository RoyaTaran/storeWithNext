import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import useCount from "../../customHooks/useCount";
import { numberSeparator } from "../../utils/utils";
import AddOrMinusCount from "../../component/addOrMinusCount/AddOrMinusCount";

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
          <h4 className="text-dark-color" style={{ fontSize: ".8rem" }}>
            چاقوی سر آشپز مخصوص{" "}
          </h4>
          <section className="my-4" >
            <AddOrMinusCount />
          </section>

          <section className="d-flex align-items-center">
            <p className="text-danger">تومان</p>
            <p className="text-danger"> {numberSeparator(135_000)}</p>
            <AiOutlineClose
              className="text-dark-color"
              style={{ fontSize: ".5rem" }}
            />
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
