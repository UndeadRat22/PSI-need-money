import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../style";
import icon from "../login/icon.png";

export default class Borrow extends React.Component {
  render() {
    return (
      <View style={styles.backgroundColorView}>
        <Image source={icon} style={styles.iconImage} />
      </View>
    );
  }
}
