import "./App.scss";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSigUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

//import firebase auth to acees its methods
import { auth } from "./firebase/firebase.util";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null, //base state for user
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // onAuthStateChanged return firebase.unsubscribe, adn we can call it ti signout user
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(`user`, user);
    });
  }

  componentWillUnmount() {
    //call unsubscribe to prevent memory leak
    this.unsubscribeFromAuth();
  }

  render() {
    //1. Header, 2do: it actually a navigation bar so covert to nav
    //2. Routes, when converted from reactroute v5 to v6 <SWITCH> becomes <ROUTES>, and many other changes
    //3. send down state with currentUser
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route path="/signin" element={<SignInAndSigUpPage />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
