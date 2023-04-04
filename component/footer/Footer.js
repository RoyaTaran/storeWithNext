import React from "react";
import { Container } from "react-bootstrap";
import TopFooter from "./TopFooter";
import BodyFooter from './BodyFooter'

function Footer() {
  return (
    <>
      <Container className="pt-5">
        <TopFooter />
        <BodyFooter />
      </Container>
    </>
  );
}

export default Footer;
