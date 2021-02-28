import React from "react";

import "./custom-button.scss";

const CustomButton = ({ children, googleBtn, inverted, ...rest }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} custom-button ${googleBtn}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CustomButton;
