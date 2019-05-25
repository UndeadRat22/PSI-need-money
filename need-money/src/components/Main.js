import React from "react";
import Login from "./login/Login";
import Register from "./register/Register";
import { Router, Scene } from "react-native-router-flux";
import Profile from "./profile/Profile";

const Main = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} title="Login" initial={true} />
      <Scene key="register" component={Register} title="Register" />
      <Scene key="profile" component={Profile} title="Profile" />
    </Scene>
  </Router>
);

export default Main;
