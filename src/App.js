import "./App.scss";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSigUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

//import firebase auth to acees its methods
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null, //base state for user
    };
  }

  unsubscribeFromAuth = null;

  // all fancy thigs we do as soon as we know that component exist on page
  componentDidMount() {
    // onAuthStateChanged return firebase.unsubscribe, adn we can call it to signout user
    // also callback of auth must be async as createUserProfile is async fuction and will return promise
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        /* 
        We can listen to a document with the onSnapshot() method.
        An initial call using the callback provided creates a document snapshot immediately with the current contents of the single document.
        Then, each time the contents change, another call updates the document snapshot.*/
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(), // .data() returns object with all data from db, so put all it in state
              },
            } /*,
            () => {
              //must leave here as notice, setState is async, to fire fn AFTER setstate complete must use callback as second arg
              console.log(this.state);
            }*/
          );
        });
      }
      // 1st ELSE important, or null or exsis NOT both
      // 2nd (just to remember) if else fired userAuth is null
      else this.setState({ currentUser: userAuth });
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
