import React from "react";
import { numberSeparator } from "../../utils/utils";
import Link from "next/link";

function FooterSideCart() {
  return (
    <div
      className="fixed-bottom bg-input border-top  py-3"
      style={{ width: "25rem" }}
    >
      <div className="d-flex justify-content-around align-items-center fs-5">
        <section className="d-flex justify-content-end align-items-center text-danger">
          <p className="px-1">تومان</p> <p>{numberSeparator(135_000)}</p>
        </section>
        <p className="text-dark-color">: جمع کل سبد خرید</p>
      </div>
      <div className="d-flex flex-column align-items-center pt-4">
        <Link href='/cart' className="border-0 text-dark-color bg-card py-2 mb-3 rounded hover-text text-center w-75" >
          <span >
            مشاهده سبد خرید
          </span>
        </Link>
        <Link href='/checkout' className="border-0 text-white bg-primary py-2 rounded text-center w-75 " >
          <span >
            تسویه حساب
          </span>
        </Link>
      </div>
    </div>
  );
}

export default FooterSideCart;
