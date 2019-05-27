import React from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native";
import styles from "../style";

export default class Lend extends React.Component {
  render() {
    return (
      <View style={styles.backgroundColorView}>
        <FlatList
          data={[
            { key: "16€", subtitle: "yes" },
            { key: "70€" },
            { key: "6€" },
            { key: "25€" },
            { key: "67€" },
            { key: "10€" },
            { key: "4€" }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}
