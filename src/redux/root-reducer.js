import { combineReducers } from "redux";

//persist
import { persistReducer } from "redux-persist";

// import local storage from window.localstorage
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

//we need to define persist config

const persistConfig = {
  key: "root", //from whitch point we want to store
  storage,
  whitelist: ["cart"], //array containing string names of any reducers that we want to store
  //user is stored by firebase, so we only want to persist cart reducer
};

//As we need to pass our root reducer to be handled by persist
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

//lecture 144
export default persistReducer(persistConfig, rootReducer);
