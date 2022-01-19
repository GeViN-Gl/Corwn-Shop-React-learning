import React from "react";

//REDUX
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  ImageContainer,
  CustomButtonContainer,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch(); //redux

  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <ImageContainer
        role="img"
        aria-label={`Photo of ${name}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></ImageContainer>
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      {/* теперь чуточку хитрее, нам нужно передать нагрузку в dispatch
      А получим мы нагрузку из пропсов
      отличие от лекции 126 в том что addItem это infoActionFunction а item то что пойдёт в payload
      для того что бы это всё заработало нужно немного переделать родителя collection-prewiew
      чтобы получать из него именно item, для рендинга эелемнета будетм деструктить его прямо здесь, так даже чище

      всё дальше по лекциям я тоже переписываю в хуки, а ссылки будут на внутренние номера лекций
       */}
      <CustomButtonContainer inverted onClick={() => dispatch(addItem(item))}>
        Add to cart
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
