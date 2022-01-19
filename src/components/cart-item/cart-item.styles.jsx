import styled from "styled-components";

export const CartItemContainer = styled.figure`
  width: 100%;
  display: flex;
  height: 8rem;
  margin-bottom: 1.5rem;
`;

export const CartItemImageContainer = styled.img`
  width: 30%;
`;

export const CartItemDetailsContainer = styled.figcaption`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 2rem;
`;

export const CartItemDetailsNameContainer = styled.span`
  font-size: 1.6rem;
`;

export const CartItemDetailsPriceContainer = styled.span`
  font-size: 1.6rem;
`;
