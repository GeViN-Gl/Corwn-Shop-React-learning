import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

// crateStore want from us all reducer (come from rootReducer into which we import reducers-slices)
// and all middleware whitc we well spread from array defined earlyer

const store = createStore(rootReducer, applyMiddleware(...middlewares));

/**
 * @exports @param {Object} store General Redux Store object ready for Provider
 */
export default store;
