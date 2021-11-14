import React from "react";
import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <section className="collection-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(({ id, ...restItemProps }) => {
            return <CollectionItem key={id} {...restItemProps} />;
          })}
      </div>
    </section>
  );
};

export default CollectionPreview;
