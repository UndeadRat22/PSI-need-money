import React from "react";
import { Text, View } from "react-native";
import styles from "../style";
import { Button } from "react-native-elements";

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.backgroundColorView}>
        <Button buttonStyle={styles.settingsButton} title="Delete account" />
        <Button buttonStyle={styles.settingsButton} title="Advanced" />
      </View>
    );
  }
}
