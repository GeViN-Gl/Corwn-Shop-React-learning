import React from "react";

//Styled
import {
  CartItemContainer,
  CartItemImageContainer,
  CartItemDetailsContainer,
  CartItemDetailsNameContainer,
  CartItemDetailsPriceContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImageContainer src={imageUrl} alt={name} />
      <CartItemDetailsContainer>
        <CartItemDetailsNameContainer>{name}</CartItemDetailsNameContainer>
        <CartItemDetailsPriceContainer>
          {quantity} X ${price}
        </CartItemDetailsPriceContainer>
      </CartItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
