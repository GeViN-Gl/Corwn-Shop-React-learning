import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
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
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </figcaption>
    </figure>
  );
};

export default CollectionItem;
