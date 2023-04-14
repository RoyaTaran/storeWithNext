import React from "react";
import useCount from "../../customHooks/useCount";
import { BsTrashFill, BsCartCheckFill } from "react-icons/bs";
import withToggle from "../../component/HOCs/withToggle";
import MainToast from "../toasts/MainToast";
import { numberSeparator } from "../../utils/utils";

function BuyMainProduct({ isShow, showHandler, hiddenHandler }) {
  const [count, addCountHandler, minusCountHandler, zeroCountHandler] =
    useCount(1);
  return (
    <div className="px-3 ">
      <MainToast
        isShow={isShow}
        hiddenHandler={hiddenHandler}
        title="محصول با موفقیت به سبد خرید اضافه شد"
      />
      <div style={{ fontSize: ".9rem" }}>
        <span className="text-dark-color fw-bold">وضعیت :</span>
        <span className="text-success px-2">موجود</span>
      </div>
      <h4 className="fs-2 fw-bold py-3 py-xl-5">
        <span>{numberSeparator(60000)}</span>
        <span>تومان</span>
      </h4>
      {count == 0 ? (
        <button
          className="border-0 bg-primary text-white rounded-2 w-100 text-center py-3 "
          onClick={addCountHandler}
        >
          افزودن به سبد خرید
        </button>
      ) : (
        <div
          id="buy-main-product-count-btn"
          className="d-flex justify-content-around align-items-center"
        >
          <div
            id="buy-main-product-count"
            className="d-inline-block px-5 py-2 text-center position-relative border border-3 text-dark-color  border-muted rounded-2"
          >
            <div
              onClick={addCountHandler}
              className="position-absolute  hover-text fw-bold  end-0 top-0 px-2 fs-5 d-flex align-items-center cursor-pointer h-100"
            >
              +
            </div>
            <span>{count}</span>
            <div
              onClick={minusCountHandler}
              className="position-absolute  hover-text fw-bold  start-0 top-0 px-2 fs-5 d-flex align-items-center cursor-pointer h-100"
            >
              {count == 1 ? (
                <BsTrashFill
                  className="text-danger"
                  onClick={zeroCountHandler}
                />
              ) : (
                "-"
              )}
            </div>
          </div>
          <button
            className="border-0 bg-primary text-white rounded-2"
            style={{ padding: ".6rem .5rem" }}
            onClick={showHandler}
          >
            <span className="px-2">خرید </span>
            <BsCartCheckFill className="fs-5" />
          </button>
        </div>
      )}
    </div>
  );
}

export default withToggle(BuyMainProduct);
