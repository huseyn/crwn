import React from "react";

import "./custom-button.scss";

const CustomButton = ({ children, googleBtn, ...rest }) => {
  return (
    <button className={`custom-button ${googleBtn}`} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
