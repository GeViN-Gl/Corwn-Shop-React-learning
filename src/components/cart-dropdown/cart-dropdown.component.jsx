import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import React from "react";
//redux
import { useSelector, useDispatch } from "react-redux";

//reselect
import { selectCartItems } from "../../redux/cart/cart.selectors";

//Router
import { useNavigate, useResolvedPath } from "react-router-dom";

//actions
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = () => {
  // reselect with redux hooks
  //
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  //Router part
  const navigate = useNavigate();
  let toCheckoutResolvedPath = useResolvedPath("/checkout");

  return (
    <section className="cart-dropdown">
      <div className="cart-items">
        {
          // show no goods in cart message if cartItems[].length ===0
          cartItems.length ? (
            cartItems.map((cartItem) => {
              return <CartItem key={cartItem.id} item={cartItem} />;
            })
          ) : (
            <span className="empty-message">Your cart is empty</span>
          )
        }
      </div>
      <CustomButton
        onClick={() => {
          // console.log(
          //   `Hi, i'm toCheckoutResolvedPath from cart-dropdown, and i return "to" obj for navigate: `,
          //   toCheckoutResolvedPath
          // );

          // instead withRouter see lecture 136
          dispatch(toggleCartHidden());
          navigate(toCheckoutResolvedPath);
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </section>
  );
};

export default CartDropdown;
