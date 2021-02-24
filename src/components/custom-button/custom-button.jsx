import React from "react";

import "./custom-button.scss";

const CustomButton = ({ children, ...rest }) => {
  return (
    <button className='custom-button' {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
