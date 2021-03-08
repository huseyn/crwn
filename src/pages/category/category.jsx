import React from "react";

import "./category.scss";

const Category = ({ match }) => {
  return <div>Category Page: {match.params.categoryId}</div>;
};

export default Category;
