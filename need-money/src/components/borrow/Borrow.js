import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../style";
import icon from "../login/icon.png";
import { connect } from "react-redux";
import NumericInput from "../general/NumericInput";
import { Button } from "react-native-elements";
import { borrow } from "../../store/actions/actions";
import { Actions } from "react-native-router-flux";

class Borrow extends React.Component {
  state = {
    amount: 0
  };
  //idk why but never called xd
  //cuz u never update the props u idiot <3
  componentDidUpdate() {
    const { requests } = this.props;
    if (requests.success === undefined) {
      return;
    }
    if (requests.success.value) {
      // TODO: padaryt kad čia atidarytų ne profile, o langą kuriam
      // rodo kad request pridėtas?
      Actions.push("profile");
    }
  }

  render() {
    const { tryBorrow, users, user } = this.props;
    const { amount } = this.state;
    return (
      <View style={styles.backgroundColorView}>
        <Image source={icon} style={styles.iconImage} />
        <Text style={styles.profileWhiteText}>Amount:</Text>
        <NumericInput
          placeholder="0"
          onChangeText={value => {
            this.setState({
              amount: parseInt(value.replace(/[^0-9]/g, ""))
            });
          }}
        />
        <Button
          buttonStyle={styles.Button}
          title="Borrow"
          onPress={() => {
            tryBorrow(user.username, amount, users);
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.login.user,
    users: state.registration.users,
    requests: state.borrowRequests.requests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tryBorrow: (username, amount, users) => {
      dispatch(borrow(username, users, amount));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Borrow);
