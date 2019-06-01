import React from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";
import styles from "../style";
import { connect } from "react-redux";
import { lend } from "../../store/actions/actions";

class Lend extends React.Component {
  render() {
    const { requests, tryLend } = this.props;
    const data = (requests || []).map((r, i) => {
      return {
        key: i.toString(),
        title: `${r.amount}€`,
        request: { data: r, id: i }
      };
    });
    return (
      <View style={styles.backgroundColorView}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                tryLend(item.request);
              }}
            >
              <Text style={styles.item}>{item.title}</Text>
            </TouchableOpacity>
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

const mapDispatchToProps = dispatch => {
  return {
    tryLend: request => dispatch(lend(request))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lend);
