import React from "react";
import { StyleSheet } from "react-native";

import LoginScreen from "./src/components/login/login.js";

export default class App extends React.Component {
  render() {
    return <LoginScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
