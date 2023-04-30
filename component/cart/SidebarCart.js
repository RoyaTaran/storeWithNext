import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineClose } from "react-icons/ai";
import EmptySideCart from "./EmptySideCart";
import FooterSideCart from "./FooterSideCart";
import CartList from "./CartList";

function SidebarCart({ showSidebarCart, onshowSidebarCart }) {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(showSidebarCart), [showSidebarCart]);

  const handleClose = () => {
    setShow(false);
    onshowSidebarCart(false);
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} className="bg-main">
        <div
          id="sidebar-cart-header"
          className="d-flex justify-content-between align-items-center fs-5 fw-bold px-3 py-4 text-dark-color bg-input border-bottom"
        >
          <span>سبد خرید</span>
          <AiOutlineClose
            className="cursor-pointer hover-danger"
            onClick={handleClose}
          />
        </div>
        <ul id="cart-lists" className="overflow-auto" style={{paddingBottom:'11rem'}}>
          <CartList />
          <CartList />
          <CartList />
          <CartList />
          <CartList />
          <CartList />
        </ul>
        {/* <EmptySideCart onshowSidebarCart={onshowSidebarCart} /> */}
        <FooterSideCart />
      </Offcanvas>
    </>
  );
}
export default SidebarCart;
