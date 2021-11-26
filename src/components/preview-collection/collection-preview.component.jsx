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
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </section>
  );
};

export default CollectionPreview;
