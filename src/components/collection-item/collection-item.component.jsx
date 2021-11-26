import React from "react";

import "./collection-item.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

//REDUX
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch(); //redux

  const { name, price, imageUrl } = item;

  return (
    <figure className="collection-item">
      <div
        role="img"
        aria-label={`Photo of ${name}`}
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <figcaption className="collection-footer">
        {/**
         * @todo replace subCSS classes to BEM notation
         */}
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </figcaption>
      {/* теперь чуточку хитрее, нам нужно передать нагрузку в dispatch
      А получим мы нагрузку из пропсов
      отличие от лекции 126 в том что addItem это infoActionFunction а item то что пойдёт в payload
      для того что бы это всё заработало нужно немного переделать родителя collection-prewiew
      чтобы получать из него именно item, для рендинга эелемнета будетм деструктить его прямо здесь, так даже чище

      всё дальше по лекциям я тоже переписываю в хуки, а ссылки будут на внутренние номера лекций
       */}
      <CustomButton inverted onClick={() => dispatch(addItem(item))}>
        Add to cart
      </CustomButton>
    </figure>
  );
};

export default CollectionItem;
