import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/home/homepage";
import ShopPage from "./pages/shop/shoppage";
import Header from "./components/header/header";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
