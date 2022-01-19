import React from "react";
// import { Link } from "react-router-dom";
//
//redux
import { connect } from "react-redux"; // high order func
//reselect
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { auth } from "../../firebase/firebase.util"; //we still need auth to signout curren user
import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

/**
 *
 * @param {Object} currentUser
 * @returns
 */

const Header = ({ currentUser, hidden }) => {
  //curentUser from auth in null if there is no auth
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? ( //onAuthStateChanged return null is there are errors or no sign in
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
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

/* before reselector
// nested destructure from state.user.currentUser 

 const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
   currentUser,
   hidden,
 });
 */
// with reselctor

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
