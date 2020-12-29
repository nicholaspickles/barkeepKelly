import { combineReducers } from "redux";

import cart from "./ducks/cart";

const reducers = combineReducers({
  cart: cart,
});

export default reducers;
