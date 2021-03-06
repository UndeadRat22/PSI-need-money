import React from "react";
import { connect } from "react-redux";
import styles from "../style";
import { login } from "../../store/actions/actions";

import {
  Keyboard,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Image
} from "react-native";
import { Button } from "react-native-elements";
import icon from "./icon.png";
import { Actions } from "react-native-router-flux";
import CustomTextInput from "../general/CustomTextInput";
import LoginDialog from "./LoginDialog";

class Login extends React.Component {
  state = {
    username: null,
    password: null,
    error: null,
    showDialog: false
  };

  loginSubmitHandler = () => {
    const { tryLogin, userInfo } = this.props;
    const { username, password } = this.state;
    tryLogin(username, password, userInfo.users);
  };

  componentDidUpdate() {
    const { loginInfo } = this.props;
    if (loginInfo.success) {
      Actions.push("profile");
    }
  }

  render() {
    const { loginInfo } = this.props;
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.backgroundColorView}>
              <LoginDialog
                errorMessage={loginInfo.error}
                visible={this.state.showDialog}
                onDismiss={() => this.setState({ showDialog: false })}
                onCancel={() => this.setState({ showDialog: false })}
              />
              <Image source={icon} style={styles.iconImage} />
              <CustomTextInput
                placeholder="Username"
                onChangeText={value => this.setState({ username: value })}
              />
              <CustomTextInput
                placeholder="Password"
                onChangeText={value => this.setState({ password: value })}
                hidden
              />
              <Button
                buttonStyle={styles.button}
                onPress={() => {
                  this.loginSubmitHandler();
                  if (loginInfo.error != null) {
                    this.setState({
                      showDialog: true
                    });
                  }
                }}
                title="Login"
              />
              <TouchableOpacity
                onPress={() => {
                  Actions.register();
                }}
              >
                <Text style={styles.whiteText}>Don't have an account ?</Text>
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
    loginInfo: state.login,
    userInfo: state.registration
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tryLogin: (username, password, users) => {
      dispatch(login(username, password, users));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
