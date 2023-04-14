import React from "react";
import Head from "next/head";
import Link from "next/link";

function NotFoundPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="content-language" content="fa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
        <title>چاقوکده-صفحه مورد نظر یافت نشد</title>
      </Head>
      <main
        id="not-found"
        className="d-flex justify-content-center position-relative w-100 h-100 bg-white"
      >
        <div
          id="not-found-info "
          className="position-absolute d-flex flex-column align-items-center w-100"
          style={{ top: "85%", left: "0" }}
        >
          <h1 className="py-4">
            <span className="fs-3 fw-bold text-dark ">
              صفحه مورد نظر شما یافت نشد ):
            </span>
          </h1>
          <h2>
            <span className="fs-5 text-muted ">
              باعرض پوزش از شما کاربر گرامی ،چنین صفحه ای در سایت ما وجود ندارد.
            </span>
          </h2>
          <Link href="/">
            {" "}
            <button
              className="border-0 py-4 hover-text fs-5 "
              style={{ backgroundColor: "transparent" }}
            >
              <span className="px-2">بازگشت به سایت</span>
              <svg
                className="mr-2"
                width="23"
                height="15"
                viewBox="0 0 23 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  opacity="0.4"
                  d="M16.5073 5.95329L21.0752 5.54932C22.1003 5.54932 22.9315 6.38856 22.9315 7.42367C22.9315 8.45878 22.1003 9.29802 21.0752 9.29802L16.5073 8.89404C15.7031 8.89404 15.0511 8.23571 15.0511 7.42367C15.0511 6.61027 15.7031 5.95329 16.5073 5.95329"
                ></path>
                <path
                  fill="currentColor"
                  d="M1.16786 6.02753C1.23926 5.95544 1.50598 5.65076 1.75653 5.39776C3.21811 3.81313 7.03437 1.22195 9.03073 0.428959C9.33382 0.302461 10.1003 0.0331419 10.5112 0.0140991C10.9032 0.0140991 11.2776 0.105232 11.6346 0.284778C12.0805 0.536415 12.4361 0.933592 12.6328 1.4015C12.7581 1.72523 12.9548 2.69777 12.9548 2.71545C13.1501 3.77776 13.2565 5.50521 13.2565 7.41493C13.2565 9.23215 13.1501 10.8889 12.9898 11.9689C12.9723 11.9879 12.7756 13.1944 12.5614 13.6079C12.1694 14.3642 11.4029 14.8321 10.5826 14.8321H10.5112C9.97638 14.8144 8.85292 14.3451 8.85292 14.3288C6.96297 13.5358 3.23697 11.0698 1.73902 9.43074C1.73902 9.43074 1.31604 9.00908 1.13284 8.74656C0.84726 8.36843 0.70447 7.90052 0.70447 7.43261C0.70447 6.9103 0.864772 6.42471 1.16786 6.02753"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
        <img
          src="./images/404.jpg"
          alt="not Found img"
          className="w-75 w-md-100 m-auto  "
          style={{ height: "85vh" }}
        />
      </main>
    </>
  );
}

export default NotFoundPage;
