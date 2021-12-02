import "./collection.styles.scss";

// import CollectionItem from "../../components/collection-item/collection-item.component";

import React from "react";

//Router
import { useParams } from "react-router-dom";

//Redux and reselect
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = () => {
  let param = useParams(); // expect :category
  const collection = useSelector(selectCollection(param.collectionId));
  // NOTE to lecture 150, в лекции юзается ownProps + connect и прочии страшные штуки, если нужно будет для легаси надо пересмотреть
  // по сути ownProps берет пропсы которые приехали в елемент и даёт к ним доступ в процессе формирования mapStateToProps
  // хуки обходят это всё, потому как не создаётся хайордер функия в export default и пропсы никто не трогает

  const { title, items } = collection;

  return (
    <section className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CollectionPage;
