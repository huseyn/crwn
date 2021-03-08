import React from "react";
import { Route } from "react-router-dom";

import "./shoppage.scss";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import Category from '../category/category'

const ShopPage = ({match}) => {
  return (
    <div className='shop-page'>
      <Route exact path={match.path} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={Category} />
    </div>
  );
};

export default ShopPage;
