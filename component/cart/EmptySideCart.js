import Link from "next/link";
import React from "react";
import { BsFillCartXFill } from "react-icons/bs";

function EmptySideCart({ onshowSidebarCart }) {
  return (
    <div className="overflow-auto" style={{paddingBottom:"11rem"}}>
      <div className="d-flex justify-content-center align-items-center pt-5 text-dark-color" >
        <BsFillCartXFill style={{ fontSize: "8rem", opacity: ".1" }} />
      </div>
      <h5 className="text-center pt-4 text-dark-color">سبد خرید خالی میباشد</h5>
      <Link href="/products" className="d-flex justify-content-center">
        <button
          className="text-white bg-primary py-2 px-1 rounded border-0 mt-4 mx-outo"
          onClick={() => onshowSidebarCart(false)}
        >
          بازگشت به فروشگاه
        </button>
      </Link>
    </div>
  );
}

export default EmptySideCart;
