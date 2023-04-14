import React from "react";
import { useState } from "react";

function withToggle(OriginalComponent) {
  const NewComponent = () => {
    const [isShow, setIsShow] = useState(false);
    const toggleHandler = () => {
      setIsShow((prevIsShow) => !prevIsShow);
    };
    const showHandler = () => {
      setIsShow(true);
    };
    const hiddenHandler = () => {
      setIsShow(false);
    };
    return (
      <OriginalComponent
        isShow={isShow}
        toggleHandler={toggleHandler}
        showHandler={showHandler}
        hiddenHandler={hiddenHandler}
      />
    );
  };
  return NewComponent;
}

export default withToggle;
