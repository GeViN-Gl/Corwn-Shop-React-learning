import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
  width: 2.4rem;
  height: 2.4rem;
`;

export const ItemCountContainer = styled.span`
  font-size: 1rem;
  font-weight: bold;

  position: absolute;
  bottom: 1.2rem;
`;
