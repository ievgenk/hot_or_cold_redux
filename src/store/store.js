import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../reducer/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
