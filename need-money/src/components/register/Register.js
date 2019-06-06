import React from "react";
import { connect } from "react-redux";
import styles from "../style";
import icon from "../login/icon.png";
import { register, loadUsers } from "../../store/actions/actions";
import RegisterDialog from "./RegisterDialog";
import RegisterSuccessDialog from "./RegisterSuccessDialog";

import { Button } from "react-native-elements";
import {
  Keyboard,
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image
} from "react-native";
import { Actions } from "react-native-router-flux";

import CustomTextInput from "../general/CustomTextInput";

class Register extends React.Component {
  state = {
    email: null,
    username: null,
    password: null,
    confirm: null
  };

  registerSubmitHandler = () => {
    const { tryRegister, registrationInfo } = this.props;
    tryRegister(this.state, registrationInfo);
  };

  componentDidMount() {
    const { tryLoadUsers } = this.props;
    tryLoadUsers();
  }

  render() {
    const { registrationInfo } = this.props;
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.backgroundColorView}>
              <Image source={icon} style={styles.iconImage} />
              <RegisterDialog
                errorMessage={registrationInfo.error}
                visible={this.state.showDialog}
                onDismiss={() => this.setState({ showDialog: false })}
                onCancel={() => this.setState({ showDialog: false })}
              />
              <RegisterSuccessDialog
                visible={this.state.showSuccessDialog}
                onDismiss={() => this.setState({ showSuccessDialog: false })}
                onCancel={() => this.setState({ showSuccessDialog: false })}
              />
              <CustomTextInput
                placeholder="Email"
                onChangeText={value => this.setState({ email: value })}
              />
              <CustomTextInput
                placeholder="Username"
                onChangeText={value => this.setState({ username: value })}
              />
              <CustomTextInput
                placeholder="Password"
                onChangeText={value => this.setState({ password: value })}
                hidden
              />
              <CustomTextInput
                placeholder="Confirm Password"
                onChangeText={value => this.setState({ confirm: value })}
                hidden
              />
              <Button
                buttonStyle={styles.button}
                onPress={() => {
                  this.registerSubmitHandler();
                  if (registrationInfo.error != null) {
                    this.setState({
                      showDialog: true
                    });
                  }
                  this.setState({
                    showSuccessDialog: true
                  });
                }}
                title="Register"
              />
              <TouchableOpacity
                onPress={() => {
                  Actions.login();
                }}
              >
                <Text style={styles.whiteText}>Already got an account?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => {
  return {
    registrationInfo: state.registration
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tryRegister: ({ email, username, password, confirm }, registrationInfo) => {
      dispatch(
        register(email, username, password, confirm, registrationInfo.users)
      );
    },
    tryLoadUsers: () => {
      dispatch(loadUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
