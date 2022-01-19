import React from "react";

import { useDispatch } from "react-redux";
import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";

//Styled
import {
  CheckoutItemContainer,
  ImageContainer,
  NameContainer,
  PriceContainer,
  QuantityContainer,
  RemoveButtonContainer,
  ArrowContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <ArrowContainer onClick={() => dispatch(removeItem(cartItem))}>
          &#10092;
        </ArrowContainer>
        <span>{quantity}</span>
        <ArrowContainer onClick={() => dispatch(addItem(cartItem))}>
          &#10093;
        </ArrowContainer>
      </QuantityContainer>
      <PriceContainer>{price}</PriceContainer>
      <RemoveButtonContainer onClick={() => dispatch(clearItemFromCart(cartItem))}>
        &#x2715;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
