import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.util"; //we still need auth to signout curren user
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = ({ currentUser }) => {
  //curentUser from auth in null if there is no auth
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <nav className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? ( //onAuthStateChanged return null is there are errors or no sign in
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
