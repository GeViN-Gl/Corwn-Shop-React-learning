import "./checkout.styles.scss";

import React from "react";

import { useSelector } from "react-redux"; //no connect. HOOKS! lec 137-03:43

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

//STRIPE
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const Checkout = () => {
  //TODO lecture 137 convert from flex to grid then Name to BEM
  // using memoiz is simple,
  // just create a selector by createSelector()
  // and use selector by useSelector()
  // funny

  const cartItems = useSelector(selectCartItems);
  // console.log("😀", cartItems);
  const cartItemsTotal = useSelector(selectCartTotal);
  // console.log("😆", cartItemsTotal);

  return (
    <section className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: ${cartItemsTotal}</span>
      </div>
      <StripeCheckoutButton price={cartItemsTotal} />
      <div className="test-warning">
        *Please use the following test credit card for payment
        <br />
        4242 4242 4242 4242 EXP: 01/23 CVC: 123
      </div>
    </section>
  );
};

export default Checkout;
