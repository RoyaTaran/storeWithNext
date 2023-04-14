import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function SliderImages({ images }) {
  const [mainSrc, setMainSrc] = useState(images[0]);
  let mainSrcIndex = images.findIndex((url) => url == mainSrc);

  const NextHandler = () => {
    images.length - 1 > mainSrcIndex && setMainSrc(images[mainSrcIndex + 1]);
  };

  const PrevHandler = () => {
    mainSrcIndex > 0 && setMainSrc(images[mainSrcIndex - 1]);
  };

  return (
    <Container fluid id="slider-images-container" className="w-100">
      <Row
        id="slider-image-main"
        className="w-100  bg-main border border-1 border-muted rounded-2 "
      >
        <div id="slider-image-main-wrapper" className="position-relative">
          <button
            className={`position-absolute top-50 start-0 border-0 bg-transparent text-primary fs-4 ${
              images.length - 1 == mainSrcIndex && "opacity-25"
            }`}
            onClick={NextHandler}
          >
            <IoIosArrowBack />
          </button>
          <button
            className={`position-absolute top-50 end-0 border-0 bg-transparent text-primary fs-4 ${
              mainSrcIndex == 0 && "opacity-25"
            }`}
            style={{ zIndex: "10" }}
            onClick={PrevHandler}
          >
            <IoIosArrowForward />
          </button>
          <img src={`/images/${mainSrc}`} className="w-100 h-100" />
        </div>
      </Row>
      <Row id="slider-images-allimage" className="w-100 py-2">
        {images.map((url, index) => (
          <Col xs={3} key={url} className="p-1">
            <img
              src={`/images/${url}`}
              onClick={(e) => setMainSrc(e.target.src.split("/")[4])}
              className={`w-100 h-100 bg-main border border-2 border-muted rounded-2 cursor-pointer ${
                index === mainSrcIndex ? "border-3 border-primary" : ""
              }`}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SliderImages;
