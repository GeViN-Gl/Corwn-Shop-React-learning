import "./cart-item.styles.scss";

import React from "react";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <figure className="cart-item">
      <img src={imageUrl} alt={{ name }} className="cart-item__img" />
      <figcaption className="cart-item__details">
        <span className="cart-item__details--name">{name}</span>
        <span className="cart-item__details--price">
          {quantity} X ${price}
        </span>
      </figcaption>
    </figure>
  );
};

export default CartItem;
