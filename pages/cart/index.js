import React from "react";
import Layout from "../../component/layouts/Layout";
import { Container, Table, Row, Col } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { numberSeparator } from "../../utils/utils";
import AddOrMinusCount from "../../component/addOrMinusCount/AddOrMinusCount";

import Link from "next/link";
function CartPage() {
  return (
    <Layout headTitle="سبد خرید">
      <Container>
        <Row className="pt-5">
          <Col id="cart-table-product" sm={8}>
            <Table striped bordered hover>
              <thead>
                <tr className="text-center fw-bold text-primary">
                  <th>محصول</th>
                  <th>قیمت</th>
                  <th>تعداد</th>
                  <th>جمع جزء</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="d-flex justify-content-start align-items-center">
                    <AiOutlineClose className="mx-3 cursor-pointer text-dark-color hover-danger" />
                    <div className="w-50 d-flex justify-content-center">
                      <img src="./images/1.png" className="w-50 h-100" />
                    </div>

                    <h4 className="text-dark-color opacity-75 py-2">
                      چاقوی ساطوری سراشپز
                    </h4>
                  </td>
                  <td>
                    <span className="text-dark-color">
                      {numberSeparator(3_500_000)}
                    </span>
                    <span className="text-dark-color">تومان</span>
                  </td>
                  <td>
                    <AddOrMinusCount />
                  </td>
                  <td className="px-3 text-danger  fw-bold">
                    <span>{numberSeparator(3_500_000)}</span>
                    <span>تومان</span>
                  </td>
                </tr>
                <tr>
                  <td className="d-flex justify-content-start align-items-center">
                    <AiOutlineClose className="mx-3 cursor-pointer text-dark-color hover-danger" />
                    <div className="w-50 d-flex justify-content-center">
                      <img src="./images/1.png" className="w-50 h-100" />
                    </div>

                    <h4 className="text-dark-color opacity-75 py-2">
                      چاقوی ساطوری سراشپز
                    </h4>
                  </td>
                  <td>
                    <span className="text-dark-color">
                      {numberSeparator(3_500_000)}
                    </span>
                    <span className="text-dark-color">تومان</span>
                  </td>
                  <td>
                    <AddOrMinusCount />
                  </td>
                  <td className="px-3 text-danger  fw-bold">
                    <span>{numberSeparator(3_500_000)}</span>
                    <span>تومان</span>
                  </td>
                </tr>
                <tr>
                  <td className="d-flex justify-content-start align-items-center">
                    <AiOutlineClose className="mx-3 cursor-pointer text-dark-color hover-danger" />
                    <div className="w-50 d-flex justify-content-center">
                      <img src="./images/1.png" className="w-50 h-100" />
                    </div>

                    <h4 className="text-dark-color opacity-75 py-2">
                      چاقوی ساطوری سراشپز
                    </h4>
                  </td>
                  <td>
                    <span className="text-dark-color">
                      {numberSeparator(3_500_000)}
                    </span>
                    <span className="text-dark-color">تومان</span>
                  </td>
                  <td>
                    <AddOrMinusCount />
                  </td>
                  <td className="px-3 text-danger  fw-bold">
                    <span>{numberSeparator(3_500_000)}</span>
                    <span>تومان</span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col id="cart-total" sm={4}>
            <section className="border border-muted m-4 p-3">
              <h6 className="fs-4 fw-bold text-dark-color py-2">
                جمع کل سبد خرید
              </h6>
              <hr />
              <p className="d-flex justify-content-around py-2">
                <span className="text-dark-color">مجموع :</span>
                <span className="text-danger fs-5 fw-bold">
                  {numberSeparator(3_500_000)}
                  <span>تومان</span>
                </span>
              </p>
              <Link href="/checkout/">
                <button className="text-white bg-primary border-0 w-100 rounded py-3 text-center mt-4">
                  ادامه جهت تسویه حساب
                </button>
              </Link>
            </section>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default CartPage;
