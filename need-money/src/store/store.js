import { createStore, combineReducers } from "redux";
import loginReducer from "./reducers/loginReducer";
import registerReducer from "./reducers/registerReducer";
import borrowReducer from "./reducers/borrowReducer";

const combinedReducers = combineReducers({
  login: loginReducer,
  registration: registerReducer,
  borrowRequests: borrowReducer
});

const configureStore = () => {
  return createStore(combinedReducers);
};

export default configureStore;
