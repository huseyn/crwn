import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/home/homepage";
import ShopPage from "./pages/shop/shoppage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
