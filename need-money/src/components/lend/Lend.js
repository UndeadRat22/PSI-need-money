import React from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";
import styles from "../style";
import { connect } from "react-redux";
import { lend } from "../../store/actions/actions";
import LendConfirmDialog from "./LendConfirmDialog";

class Lend extends React.Component {
  state = {
    showDialog: false,
    dialogRequest: undefined
  };
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
        <LendConfirmDialog
          visible={this.state.showDialog}
          onDismiss={() => this.setState({ showDialog: false })}
          onCancel={() => this.setState({ showDialog: false })}
          onConfirm={() => {
            tryLend(this.state.dialogRequest);
            this.setState({ showDialog: false });
          }}
        />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  showDialog: true,
                  dialogRequest: item.request
                });
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
