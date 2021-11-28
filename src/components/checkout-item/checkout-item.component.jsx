import "./checkout-item.styles.scss";

import React from "react";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <section className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#x2715;</div>
    </section>
  );
};

export default CheckoutItem;
