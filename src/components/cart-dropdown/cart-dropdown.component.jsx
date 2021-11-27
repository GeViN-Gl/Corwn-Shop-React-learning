import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import React from "react";
//redux
import { useSelector } from "react-redux";
//reselect
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = () => {
  // let leave it here as is, but useSelector() is redundant with useSelector hook
  // Should be const cartItems = useSelector(state => state.cart.cartItems)
  const cartItems = selectCartItems(useSelector((state) => state));

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
