import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import React from "react";

//redux
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { useSelector, useDispatch } from "react-redux";

const CartIcon = () => {
  //redo with hooks, lecture 124
  const dispatch = useDispatch();

  // lecture 131 hook redo
  // take in all carts array and "boil" quanity ti single accum to display in cart icon
  // const itemCount = useSelector((state) => state.cart.cartItems).reduce(
  //   (accum, item) => accum + item.quantity,
  //   0
  // );

  // Here reselect also redundant, (see lecture 135-06:58)
  // must be
  // const cartItems = useSelector((state) => state.cart.cartItems);
  // const itemCount = cartItems.reduce((accum, item) => (accum += item.quantity), 0);
  // or
  // const itemCount = useSelector((state) => state.cart.cartItems).reduce((accum, item) => (accum += item.quantity), 0)
  const itemCount = selectCartItemsCount(useSelector((state) => state));

  // useDispatch возвращает (подписывает) референс на dispatch() in Redux Store
  // После начинается дом который построил Джек
  // onClick вызывает dispath() который определен useDispath from react-redux
  // dispatch потребляет объект который выдается cart.action.js который соответствующий тип берет в cart.types
  //
  // IMHO too much nesting if file structure
  // реально это выглядит как onClick({()=>dispath({type: "TOGGLE_CART_HIDDEN"})})

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      {/*<div className="cart-icon" onClick={toggleCartHidden}>  //connect version  */}
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

// connect version
// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });
// export default connect(null, mapDispatchToProps)(CartIcon);

export default CartIcon;
