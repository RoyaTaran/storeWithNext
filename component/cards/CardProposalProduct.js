import React from "react";

function CardProposalProduct({img}) {
  return (
    <div id="card-proposal-product" className="rounded-5">
      <div
        id="card-proposal-product-container"
        className="bg-card position-relative rounded-5"
        style={{ width: "250px", height: "350px" }}
      >
        <div
          id="card-proposal-product-discount"
          className="position-absolute  bg-badge text-white px-1 py-3"
          style={{
            borderRadius: "0 0 50% 50%",
            fontSize: ".8rem",
            right: "2rem",
          }}
        >
          <span>30</span>%
        </div>
        <div id="card-proposal-product-img" className="w-75 h-50 m-auto">
          <img src={img} alt="" className="w-100 h-100" />
        </div>
        <div id="card-proposal-product-body ">
          <h4 className="py-4 px-2 fs-5 text-light-color"> چاقوی سر آشپز</h4>
          <div
            id="card-proposal-product-price"
            className="d-flex flex-column justify-content-around px-3 text-light-color"
            style={{ height: "3rem", fontSize: ".8rem" }}
          >
            <span id="card-proposal-product-price" className="text-danger text-decoration-line-through" >120000</span>
            <span id="card-proposal-product-price-discount">
              108000 <span>تومان</span>
            </span>
          </div>
          <div id="card-proposal-product-addTocard" className="d-flex justify-content-end px-5">
            <button className="bg-badge text-white border-0 rounded p-2 fs-5 ">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProposalProduct;
