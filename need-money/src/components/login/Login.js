import React from "react";
import { connect } from "react-redux";
import styles from "../style";
import { login } from "../../store/actions/actions";

import {
  Keyboard,
  View,
  TextInput,
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

class Login extends React.Component {
  state = {
    username: null,
    password: null,
    error: null
  };

  loginSubmitHandler = () => {
    const { tryLogin } = this.props;
    const { username, password } = this.state;
    tryLogin(username, password);
  };

  render() {
    const { loginInfo } = this.props;
    console.log(loginInfo);
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Image source={icon} style={styles.image} />
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
                buttonStyle={styles.loginButton}
                onPress={() => this.loginSubmitHandler()}
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
    loginInfo: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tryLogin: (username, password) => {
      dispatch(login(username, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
