import Link from "next/link";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

function LoginRegister({ onShowLoginWith, onShowText }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const RegexTellNumber = /09(1[0-9]|3[1-9]|2[012]|9[012])([0-9]{7})/;

  const submitHandler = ({ text }) => {
    onShowText(text);
    if (RegexTellNumber.test(text)) {
      onShowLoginWith("LOGINWITHMOBILE");
    }
  };
  return (
    <div className="border border-muted px-4 py-5 bg-card rounded">
      <Link href="/">
        <div className="d-flex justify-content-center cursor-pointer">
          <img src="/images/logo-bg-transparent.png" className="w-50 mx-outo" />
        </div>
      </Link>

      <h1 className="fs-5 fw-bold mt-3 py-3 text-dark-color">
        <span>ورود</span>
      </h1>

      <Form onSubmit={handleSubmit(submitHandler)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <section
              id="login-register-paragraph"
              style={{ fontSize: ".8rem" }}
              className="text-light-color"
            >
              <p className="py-3">سلام!</p>
              <p>لطفا شماره موبایل خود را وارد نمایید</p>
            </section>
          </Form.Label>
          <Form.Control
            className="my-3 "
            {...register("text", {
              required: true,
              pattern: RegexTellNumber,
            })}
            type="text"
            style={{ padding: ".8rem 0", textIndent: "2rem" }}
          />
          {errors.text && (
            <Form.Text className="text-danger" style={{ fontSize: ".7rem" }}>
              لطفا از شماره همراه معتبر استفاده نمایید.
            </Form.Text>
          )}
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="w-100 mt-4 fw-bold"
          style={{ padding: ".8rem 0" }}
        >
          ورود
        </Button>
      </Form>
      <p className="pt-4 text-dark-color" style={{ fontSize: ".7rem" }}>
        <span>
          ورود شما به معنای قبول{" "}
          <span>
            {"  "}
            <Link href="/terms" className="text-primary">
              {" "}
              شرایط چاقوکده{" "}
            </Link>
            <span>
              و{"  "}
              <span>
                <Link href="/privacy" className="text-primary">
                  قوانین حریم خصوصی{" "}
                </Link>
                <span>می باشد.</span>
              </span>
            </span>
          </span>
        </span>
      </p>
    </div>
  );
}

export default LoginRegister;
