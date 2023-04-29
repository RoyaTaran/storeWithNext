import React, { useState } from "react";
import MainProduct from "../index";
import { Container, Row, Form, Button, Accordion } from "react-bootstrap";
import Rate from "../../../../component/rating/Rate";

function CommentMainProduct() {
  const [rating, setRating] = useState(1);
  return (
    <MainProduct>
      <Container fluid>
        <Row>
          <h3 id="comment-title" className="fs-3 fw-bold text-dark-color pb-4">
            لطفا به این محصول امتیاز دهید :
          </h3>
          <div id="comment-rate" className="d-flex align-items-center pb-4">
            <span className="text-dark-color fw-bold ">امتیاز :</span>
            <div className="px-3">
              <Rate rating={rating} onRating={(rate) => setRating(rate)} />
            </div>
            <span
              className="text-light-color opacity-75"
              style={{ fontSize: ".8rem" }}
            >
              امتیاز شما به این محصول {rating} از 5 می باشد.
            </span>
          </div>
          <Form id="comment-form" action="#">
            <section
              id="comment-name-tell"
              className="d-flex justify-content-start align-items-center pb-4"
            >
              <Form.Group className="mb-3" controlId="comment-name">
                <Form.Label className="px-2 pb-1 fw-bold text-light-color">
                  نام :
                </Form.Label>
                <Form.Control type="text" className="bg-input border-0" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-3 px-5" controlId="comment-tell">
                <Form.Label className="px-2 pb-1 fw-bold text-light-color">
                  شماره همراه :
                </Form.Label>
                <Form.Control type="tell" className="bg-input border-0" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
              </Form.Group>
            </section>
            <Form.Group className="mb-3 w-50" controlId="comment-text">
              <Form.Label className="px-2 pb-1 fw-bold text-light-color">
                نظر خود را در مورد محصول بنویسید :
              </Form.Label>
              <Form.Control
                as="textarea"
                cols={15}
                rows={10}
                className="bg-input border-0"
              />
            </Form.Group>
            <div className="d-flex justify-content-end w-50 pt-3">
              {" "}
              <Button variant="primary" type="submit">
                ارسال
              </Button>
            </div>
          </Form>
        </Row>
        <Row className="pt-3 w-75 ">
          <h6 className="fs-3 fw-bold text-dark-color pb-4">نظرات دیگران :</h6>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>علی اسمعیلی</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>رویا تاران</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
    </MainProduct>
  );
}

export default CommentMainProduct;
