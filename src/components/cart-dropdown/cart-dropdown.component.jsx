import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import React from "react";
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(
    `Hi, i'm cart-dropdown useSelector hook, and i return array from state.cart.cartItems: `,
    cartItems
  );

  return (
    <section className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </section>
  );
};

export default CartDropdown;
