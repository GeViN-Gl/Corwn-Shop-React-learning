import React from "react";

// import { useSelector } from "react-redux";
// import { selectShopCollections } from "../../redux/shop/shop.selectors";

// Components and pages
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

//Router
import { Routes, Route, Outlet } from "react-router-dom";

const ShopPage = () => {
  // const collections = useSelector(selectShopCollections);

  return (
    <div>
      <Routes>
        <Route path="/" element={<CollectionsOverview />}></Route>
        {/* in opposite to router v4 v5 we dont need to create nested route for these pages
        Roter will auto select best match for path
        / will display root for shop <CollectionsOverview />
        :collectionId auto transpile to smtng like /hats /mans and wiil be displayed instead of root */}
        <Route path=":collectionId" element={<CollectionPage />}></Route>
      </Routes>

      <Outlet />
      {/* When using a nested config, routes with children should render an <Outlet> in order to render their child routes.
      This makes it easy to render layouts with nested UI.

      An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
    </div>
  );
};

export default ShopPage;
