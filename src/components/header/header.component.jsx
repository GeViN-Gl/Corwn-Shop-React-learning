import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux"; // high order func

import { auth } from "../../firebase/firebase.util"; //we still need auth to signout curren user
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../card-dropdown/cart-dropdown.component";

/**
 *
 * @param {Object} currentUser
 * @returns
 */

const Header = ({ currentUser, hidden }) => {
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
        <CartIcon />
      </nav>
      {!hidden && <CartDropdown />}
    </div>
  );
};

/** Main idea: From general State via connect() function from Redux we take user-"slice" and out of it we take property of currentUser that we need
 *
 * and "map" it to object with {currentUser} in it, transferring it to Header, later we will destruct this object to pass currentUser as props into Header
 *
 * @function
 * Naming can be anything, it's not defined by redux library, but convention name is mapStateToProps
 *
 *
 * @param {Object} state root reducer provided by Redux connect() func
 * @returns Object with {currentUser} mapped from State.user.currentUser
 *
 */

//nested destructure from state.user.currentUser
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
