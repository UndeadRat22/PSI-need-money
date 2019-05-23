import { createStore, combineReducers } from "redux";
import loginReducer from "./reducers/loginReducer";
import registerReducer from "./reducers/registerReducer";

const combinedReducers = combineReducers({
  login: loginReducer,
  registration: registerReducer
});

const configureStore = () => {
  return createStore(combinedReducers);
};

export default configureStore;
