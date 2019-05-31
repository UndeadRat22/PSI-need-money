import { createStore, combineReducers } from "redux";
import loginReducer from "./reducers/loginReducer";
import registerReducer from "./reducers/registerReducer";
import requestReducer from "./reducers/requestReducer";

const combinedReducers = combineReducers({
  login: loginReducer,
  registration: registerReducer,
  borrowRequests: requestReducer
});

const configureStore = () => {
  return createStore(combinedReducers);
};

export default configureStore;
