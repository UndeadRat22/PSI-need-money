import React from "react";
import Login from "./login/Login";
import Register from "./register/Register";
import { Router, Scene } from "react-native-router-flux";
import Profile from "./profile/Profile";
import Lend from "./lend/Lend";
import Borrow from "./borrow/Borrow";
import Settings from "./settings/Settings";

const Main = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} title="Login" initial={true} />
      <Scene key="register" component={Register} title="Register" />
      <Scene key="profile" component={Profile} title="Profile" />
      <Scene key="lend" component={Lend} title="Lend" />
      <Scene key="borrow" component={Borrow} title="Borrow" />
      <Scene key="settings" component={Settings} title="Settings" />
    </Scene>
  </Router>
);

export default Main;
