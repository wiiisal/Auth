import { createStore, applyMiddleware, compose } from "redux";
import UserReducer from "./Reducer/Reducer";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  UserReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
export default store;
