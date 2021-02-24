import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/home/homepage";
import ShopPage from "./pages/shop/shoppage";

import './App.css'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
