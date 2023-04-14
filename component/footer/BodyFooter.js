import React from "react";
import { Row, Col } from "react-bootstrap";
import { RiArrowLeftSFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { FaAddressBook } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

function BodyFooter() {
  const router = useRouter();
  return (
    <>
      <Row className="pt-3">
        <Col id="body-footer-story" xs={12} lg={4}>
          <h2 className="py-3 fs-5 fw-bold text-primary">
            <span>درباره چاقوکده</span>
          </h2>
          <div className="d-flex ">
            <RiArrowLeftSFill className="text-primary" />
            <p
              className="text-dark-color"
              style={{ textAlign: "justify", lineHeight: "1.8" }}
            >
              راکت یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران
              است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و
              دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد. تبدیل
              کردن برنامه نویسان ایرانی به بهترین برنامه نویسان جهان هدف ماست.
            </p>
          </div>
        </Col>
        <Col
          id="body-footer-quickaccess"
          xs={12}
          lg={3}
          className="d-flex flex-column  align-items-start align-items-lg-center"
        >
          <div>
            <h2 className="py-3 fs-5 fw-bold text-primary">
              <span>دسترسی سریع</span>
            </h2>
            <ul>
              <li className="hover-text d-flex py-3 cursor-pointer text-dark-color">
                <Link href="/">
                  <RiArrowLeftSFill className="text-primary" />
                  <span>چاقوکده</span>
                </Link>
              </li>
              <li className="hover-text d-flex py-3 cursor-pointer text-dark-color">
                <Link href="/products">
                  <RiArrowLeftSFill className="text-primary" />
                  <span>فروشگاه</span>
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col id="body-footer-contact" xs={12} lg={5}>
          <h2 className="py-3 fs-5 fw-bold text-primary">
            <span>ارتباط با ما</span>
          </h2>
          <ul className="text-dark-color">
            <li className="hover-text d-flex py-3">
              <BsTelephoneFill className="text-primary" />
              <div className="d-flex justify-content-between align-items-center w-100 px-3">
                <span>شماره ثابت :</span>
                <span>02433542148</span>
              </div>
            </li>
            <li className="hover-text d-flex py-3">
              <ImMobile className="text-primary" />
              <div className="d-flex justify-content-between align-items-center w-100 px-3">
                <span>شماره همراه :</span>
                <span>09120458482</span>
              </div>
            </li>
            <li className="hover-text d-flex py-3">
              <MdEmail className="text-primary" />
              <div className="d-flex justify-content-between align-items-center w-100 px-3">
                <span>ایمیل :</span>
                <span>ali.61111@gmail.com</span>
              </div>
            </li>
            <li className="hover-text d-flex py-3">
              <SiMinutemailer className="text-primary" />
              <div className="d-flex justify-content-between align-items-center w-100 px-3">
                <span>تلگرام :</span>
                <span>@Ali68Zanjan</span>
              </div>
            </li>
            <li className="hover-text d-flex align-items-center py-3">
              <FaAddressBook className="text-primary" />
              <div className="d-flex align-items-center w-100 p-3">
                <span>آدرس :</span>
                <span>زنجان - کوی فرهنگ - یاسمن8 - پلاک 2202</span>
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
}

export default BodyFooter;
