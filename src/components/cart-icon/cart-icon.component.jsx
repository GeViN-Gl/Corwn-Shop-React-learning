import React from "react";

//redux
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { useSelector, useDispatch } from "react-redux";

//Styled components

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = () => {
  //redo with hooks, lecture 124
  const dispatch = useDispatch();

  // lecture 131 hook redo
  // take in all carts array and "boil" quanity ti single accum to display in cart icon
  // const itemCount = useSelector((state) => state.cart.cartItems).reduce(
  //   (accum, item) => accum + item.quantity,
  //   0
  // );

  // reselect with redux hook
  const itemCount = useSelector(selectCartItemsCount);

  // useDispatch возвращает (подписывает) референс на dispatch() in Redux Store
  // После начинается дом который построил Джек
  // onClick вызывает dispath() который определен useDispath from react-redux
  // dispatch потребляет объект который выдается cart.action.js который соответствующий тип берет в cart.types
  //
  // IMHO too much nesting if file structure
  // реально это выглядит как onClick({()=>dispath({type: "TOGGLE_CART_HIDDEN"})})

  return (
    <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
      {/*<div className="cart-icon" onClick={toggleCartHidden}>  //connect version  */}
      <ShoppingIconContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

// connect version
// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });
// export default connect(null, mapDispatchToProps)(CartIcon);

export default CartIcon;
