import React from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native";
import styles from "../style";
import { connect } from "react-redux";

class Lend extends React.Component {
  render() {
    console.log(this.props);
    const { requests } = this.props;
    const data = (requests || []).map((r, i) => {
      return { key: i.toString(), title: `${r.amount}€` };
    });
    console.log(data);
    return (
      <View style={styles.backgroundColorView}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.title}</Text>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    requests: state.borrowRequests.requests
  };
};

export default connect(
  mapStateToProps,
  null
)(Lend);
