import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineArrowLeft, AiFillEye } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { RiEyeCloseFill } from "react-icons/ri";
import useTimer from "../../customHooks/useTimer";
import ProgressBar from "react-bootstrap/ProgressBar";
import { signIn } from "next-auth/react";

function LoginWithMobileNumber({ onShowLoginWith, mobileNumber }) {
  const [showPassword, setShowPassword] = useState(true);
  const [toggleTimerOrText, setToggleTimerOrText] = useState("SEND");
  const [progressBarNumber, setProgressBarNumber] = useState();
  const [second, minutes, setSecond, setMinutes] = useTimer();
  useEffect(() => {
    setProgressBarNumber((p) => p - 5 / 6);
    if (progressBarNumber < 1) {
      setToggleTimerOrText("RESEND");
    }
  }, [second]);

  if (second === 0 && minutes === 0) {
    const randomCode = Math.floor(Math.random() * 999999);
    fetch(`/api/users/${mobileNumber}/${randomCode}`, {
      method: "PUT",
    });
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ password }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        phone: mobileNumber,
        passwordCode: password,
      });
      if (result.err) {
        console.log("faild");
      }
    } catch (err) {
      console.log("catchError", err);
    }
    console.log(mobileNumber);
  };

  const passwordCodeHandler = async () => {
    const randomCode = Math.floor(Math.random() * 999999);
    alert(randomCode);

    const getuser = await fetch("/api/users");
    const getResult = await getuser.json();
    const isUserInDb = getResult.some((user) => user.phone === +mobileNumber);
    if (isUserInDb) {
      const putResult = await fetch(
        `/api/users/${mobileNumber}/${randomCode}`,
        {
          method: "PUT",
        }
      );
      if (putResult.status === 200) {
        setToggleTimerOrText("TIMER");
        setMinutes(1);
        setSecond(59);
        setProgressBarNumber(100);
      }
      console.log(putResult);
    } else {
      const postResult = await fetch(`/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          passwordCode: randomCode,
          firstName: "",
          lastName: "",
          phone: mobileNumber,
          email: "",
          password: "",
          buy: 0,
          city: "",
          address: "",
        }),
      });
      if (postResult.status === 200) {
        setToggleTimerOrText("TIMER");
        setMinutes(1);
        setSecond(59);
        setProgressBarNumber(100);
      }
      console.log("postResult=>", postResult);
    }
  };
  return (
    <div className="border border-muted px-4 py-5 bg-card rounded">
      <div className="d-flex justify-content-around  align-items-center">
        <Link
          href="/"
          className="d-flex justify-content-center  align-items-center"
        >
          <img
            src="/images/logo-bg-transparent.png"
            className="w-50 mx-outo cursor-pointer "
          />
        </Link>{" "}
        <AiOutlineArrowLeft
          className="fs-4 cursor-pointer text-dark-color"
          onClick={() => onShowLoginWith("LOGIN")}
        />
      </div>

      <h1 className="fw-bold mt-3 py-3 text-dark-color">
        <span> رمز عبور را وارد نمایید</span>
      </h1>

      <Form onSubmit={handleSubmit(submitHandler)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div id="login-mobile-number-input" className="position-relative">
            <Form.Control
              className="my-3 "
              {...register("password", { required: true, minLength: 5 })}
              type={`${showPassword ? "password" : "text"}`}
              style={{ padding: ".8rem 0", textIndent: "2rem" }}
            />
            {showPassword ? (
              <AiFillEye
                className="position-absolute top-50 translate-middle fs-3 cursor-pointer text-secondary"
                onClick={() => setShowPassword(false)}
                style={{ left: "8%" }}
              />
            ) : (
              <RiEyeCloseFill
                className="position-absolute top-50 translate-middle fs-3 cursor-pointer text-secondary"
                onClick={() => setShowPassword(true)}
                style={{ left: "8%" }}
              />
            )}
          </div>

          {errors.password && (
            <Form.Text className="text-danger" style={{ fontSize: ".7rem" }}>
              حد اقل از 5 کاراکتر استفاده شود (لطفا از حروف انگلیسی استفاده
              نمایید).
            </Form.Text>
          )}
        </Form.Group>
        <section style={{ fontSize: ".8rem" }}>
          {toggleTimerOrText === "TIMER" ? (
            <>
              {" "}
              <section className="position-relative pb-1 pt-3">
                <ProgressBar variant="info" animated now={progressBarNumber} />
                <button className="position-absolute top-50 start-50 translate-middle border-0 bg-transparent text-dark fw-bold pb-1 pt-3">
                  {second < 10
                    ? `${minutes}:0${second}`
                    : `${minutes}:${second}`}
                </button>
              </section>
              <p className="pt-3 text-primary">
                {`رمز عبور به شماره ${mobileNumber} ارسال گردید`}
              </p>
            </>
          ) : toggleTimerOrText === "RESEND" ? (
            <p
              className="py-3 text-info cursor-pointer "
              onClick={passwordCodeHandler}
            >
              ارسال مجدد کد ورود{" "}
              <span>
                <IoIosArrowBack />
              </span>
            </p>
          ) : (
            <p
              className="py-3 text-info cursor-pointer "
              onClick={passwordCodeHandler}
            >
              ورود با رمز یکبار مصرف{" "}
              <span>
                <IoIosArrowBack />
              </span>
            </p>
          )}
        </section>

        <Button
          variant="primary"
          type="submit"
          className="w-100 mt-4 fw-bold"
          style={{ padding: ".8rem 0" }}
        >
          تایید
        </Button>
      </Form>
    </div>
  );
}

export default LoginWithMobileNumber;
