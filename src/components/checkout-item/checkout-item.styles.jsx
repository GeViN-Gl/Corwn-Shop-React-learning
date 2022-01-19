import styled, { css } from "styled-components";

export const CheckoutItemContainer = styled.section`
  width: 100%;
  display: flex;
  min-height: 10rem;
  border-bottom: 1px solid darkgrey;
  padding: 1.5rem 0;
  font-size: 2rem;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 1rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

const gridWidth = `23%`;

const linedTextStyles = css`
  width: ${gridWidth};
`;

export const NameContainer = styled.span`
  ${linedTextStyles};
`;

export const PriceContainer = styled.span`
  ${linedTextStyles};
`;

export const QuantityContainer = styled.span`
  display: flex;
  gap: 1rem;
  width: ${gridWidth};
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 1.2rem;
  cursor: pointer;
`;

export const ArrowContainer = styled.div`
  cursor: pointer;
`;

/*

.checkout-item {
  width: 100%;
  display: flex;
  min-height: 10rem;
  border-bottom: 1px solid darkgrey;
  padding: 1.5rem 0;
  font-size: 2rem;
  align-items: center;

  .image-container {
    width: 23%;
    padding-right: 1rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;
    gap: 1rem;

    .arrow {
      cursor: pointer;
    }

    // .value {
    //   font-size: 2.4rem;
    // }
  }

  .remove-button {
    padding-left: 1.2rem;
    cursor: pointer;
  }
}


*/
