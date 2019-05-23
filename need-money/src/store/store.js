import { createStore, combineReducers } from "redux";
import loginReducer from "./reducers/loginReducer";

const combinedReducers = combineReducers({
  login: loginReducer
});

const configureStore = () => {
  return createStore(combinedReducers);
};

export default configureStore;
