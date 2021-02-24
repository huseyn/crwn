import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/home/homepage";
import ShopPage from "./pages/shop/shoppage";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import Header from "./components/header/header";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
