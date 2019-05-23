import React from "react";
import Main from "./src/components/Main";
import { Provider } from "react-redux";

import configureStore from "./src/store/store";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
