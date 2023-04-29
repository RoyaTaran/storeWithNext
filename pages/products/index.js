import React, { useState } from "react";
import Layout from "../../component/layouts/Layout";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../component/products/Sidebar";
import ProductsHeader from "../../component/products/ProductsHeader";
import CardProduct from "../../component/cards/CardProduct";
import CardProductGrid from "../../component/cards/CardProductGrid";
import CustomePagination from "../../component/pagination/CustomePagination";

function ProductsPage() {
  const [isList, setIsList] = useState(false);
  const [datas, setDatas] = useState([]);
  const [alldata, setAlldata] = useState([
    {
      title: "111111111111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "211111111111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "311111111111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "411111111111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "511111111122211111111",
      price: 123000,
      desc: "f va kjh fkjnb22 sddgjkhg fjkh jkhf",
    },
    {
      title: "61111111111223331111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "7111111144441111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "18111111144441111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "91111111144441111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "10111111144441111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "1111111144441111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "12v111111144441111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "11x11111144441111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "111z1111144441111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "11zf11111144441111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "11fz11111144441111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "11se11111144441111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "111tret1111144441111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "11ret11111144441111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "11cfsdf11111144441111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "11gfdgfd11111144441111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "111dfgg1111144441111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
    {
      title: "111gfg1111144441111111111",
      price: 123000,
      desc: "f va kjh fkjnb sddgjkhg fjkh jkhf",
    },
  ]);

  return (
    <Layout headTitle="محصولات">
      <Container>
        <Row className="pt-5">
          <Col id="products-sidebar" lg={3}>
            <Sidebar />
          </Col>
          <Col id="allProduct" lg={9}>
            <ProductsHeader onShow={(show) => setIsList(show)} />
            {!isList ? (
              <Row id="allproduct-list">
                <CustomePagination
                  alldata={alldata}
                  PaginationsNumber={5}
                  size={6}
                  onPagination={(data) => setDatas(data)}
                >
                  {datas &&
                    datas.map((product, index) => (
                      <Col lg={4} key={index}>
                        <CardProduct {...product} />
                      </Col>
                    ))}
                </CustomePagination>
              </Row>
            ) : (
              <Row id="allproduct-grid">
                <CustomePagination
                  alldata={alldata}
                  PaginationsNumber={5}
                  size={6}
                  onPagination={(data) => setDatas(data)}
                >
                  {datas &&
                    datas.map((product, index) => (
                      <CardProductGrid {...product} key={index} />
                    ))}
                </CustomePagination>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default ProductsPage;
