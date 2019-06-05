import React from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";
import styles from "../style";
import { connect } from "react-redux";
import { lend } from "../../store/actions/actions";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton
} from "react-native-popup-dialog";

class Lend extends React.Component {
  state = {
    defaultAnimationDialog: false
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
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  defaultAnimationDialog: true
                });
                // tryLend(item.request);
              }}
            >
              <Text style={styles.item}>{item.title}</Text>

              <Dialog
                onDismiss={() => {
                  this.setState({ defaultAnimationDialog: false });
                }}
                width={0.9}
                visible={this.state.defaultAnimationDialog}
                rounded
                actionsBordered
                dialogTitle={
                  <DialogTitle
                    title="Confirmation"
                    style={{
                      backgroundColor: "#F7F7F8"
                    }}
                    hasTitleBar={false}
                    align="left"
                  />
                }
                footer={
                  <DialogFooter>
                    <DialogButton
                      text="CANCEL"
                      bordered
                      onPress={() => {
                        this.setState({ defaultAnimationDialog: false });
                      }}
                      key="button-1"
                    />
                    <DialogButton
                      text="YES"
                      bordered
                      onPress={() => {
                        this.setState({ defaultAnimationDialog: false });
                        tryLend(item.request);
                      }}
                      key="button-2"
                    />
                  </DialogFooter>
                }
              >
                <DialogContent
                  style={{
                    backgroundColor: "#F7F7F8"
                  }}
                >
                  <Text>Are you sure you want to lend this sum?</Text>
                </DialogContent>
              </Dialog>
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
