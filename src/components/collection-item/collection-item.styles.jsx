import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.figure`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 35rem;
  align-items: center;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 0.5rem;

  &:hover {
    opacity: 0.8;
  }
`;

// Syles unique for buttons on collection items
export const CustomButtonContainer = styled(CustomButton)`
  &&& {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 25.5rem;
    display: flex;
  }
`;
/*

  // Syles unique for buttons on collection items
  .custom-button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 25.5rem; //.collection-item.height 35rem
    display: none; //hide untill hover
  }
  &:hover {
    .image {
      opacity: 0.8;
    }
    .custom-button {
      display: flex;
    }
  }
*/

export const CollectionFooterContainer = styled.figcaption`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 1.5rem;
`;

export const PriceContainer = styled.span`
  width: 10%;
`;
/*
  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 1.8rem;

    .name {
      width: 90%;
      margin-bottom: 1.5rem;
    }

    .price {
      width: 10%;
    }
  }
}
*/
