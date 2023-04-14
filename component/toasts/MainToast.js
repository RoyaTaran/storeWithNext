import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

function MainToast({ isShow, hiddenHandler, title }) {
  useEffect(() => {
    setTimeout(hiddenHandler, 4000);
  }, [isShow]);

  return (
    <div
      id="main-toast-container"
      className={`position-fixed bg-primary text-white p-3 rounded ${
        isShow ? "d-inline-block" : "d-none"
      }`}
      style={{ bottom: "5%", right: "2%", zIndex: "20" }}
    >
      <div
        id="main-toast-wrapper"
        className="d-flex justify-content-around align-items-center"
      >
        <AiOutlineClose
          className="fs-5  hover-danger text-dark-color  "
          onClick={hiddenHandler}
        />
        <h5 className="px-4">{title}</h5>
      </div>
    </div>
  );
}

export default MainToast;
