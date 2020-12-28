import { combineReducers, createStore } from "redux";

import cart from "./ducks/cart";

const reducers = () => {
  combineReducers(cart);
};

export default function configureStore(initialState) {
  return createStore(reducers, initialState);
}
