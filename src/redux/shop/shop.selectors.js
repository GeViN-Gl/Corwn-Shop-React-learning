import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

/** Reselect selector
 * @returns state.shop.collections array of objects
 * @example [ {
 *              id: 1,
 *              title: "Hats",
 *              routeName: "hats",
 *              items: [{...}]
 *            }
 *          ]
 */

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

/**Сей селектор возвращает массив обектов созданный из SHOP_DATA,
 *
 */
export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

/**
 * @function memoize()
 *
 * By wrapping this function is memoize, we're saying that whenever this function gets called and receives collectionUrlParam,
 * I want to memoize the return of this function (in this case we return a selector). If this function gets called again with the same collectionUrlParam,
 * don't rerun this function because we'll return the same value as last time, which we've memoized so just return the selector that's been stored.
 */

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
  )
);
