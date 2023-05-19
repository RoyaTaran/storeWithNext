import React, { useState } from "react";
import LoginRegister from "../../component/login/LoginRegister";
import LoginWithMobileNumber from "../../component/login/LoginWithMobileNumber";
import { Col, Container, Row } from "react-bootstrap";

function LoginPage() {
  const [showLoginWith, setShowLoginWith] = useState("LOGIN");
  const [showText, setShowText] = useState("");
  return (
    <>
      <Container>
        <Row className="w-100" style={{ height: "97vh" }}>
          <Col sm={2} md={3} lg={4}></Col>
          <Col
            xs={12}
            sm={8}
            md={6}
            lg={4}
            
            className="d-flex justify-content-center align-items-center"
          >
            {showLoginWith === "LOGINWITHMOBILE" ? (
              <LoginWithMobileNumber
                mobileNumber={showText}
                onShowLoginWith={(showLoginRegister) =>
                  setShowLoginWith(showLoginRegister)
                }
              />
            ) : (
              <LoginRegister
                onShowText={(mobileNumber) => setShowText(mobileNumber)}
                onShowLoginWith={(showmobileNumber) =>
                  setShowLoginWith(showmobileNumber)
                }
              />
            )}
          </Col>
          <Col sm={2} md={3} lg={4}></Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginPage;
