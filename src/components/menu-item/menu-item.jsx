import React from "react";

import "./menu-item.scss";

const MenuItem = ({ title, size, imageUrl }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className={`${size} menu-item`}
    >
      <div className='content'>
        <div className='title'>{title}</div>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
