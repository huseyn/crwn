import React from "react";

import "./collection.scss";

const Collection = ({ match }) => {
  return <div>Collection Page: {match.params.collectionId}</div>;
};

export default Collection;
