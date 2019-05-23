import React from "react";
import { connect } from "react-redux";
import styles from "./style";
import { login } from "../../store/actions/actions";

import {
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Image
} from "react-native";
import { Button } from "react-native-elements";
import icon from "./icon.png";

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
              <TextInput
                placeholder="Username"
                placeholderColor="#c4c3cb"
                placeholderTextColor="#000000"
                style={styles.loginFormTextInput}
                onChangeText={value => this.setState({ username: value })}
              />
              <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                placeholderTextColor="#000000"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
                onChangeText={value => this.setState({ password: value })}
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.loginSubmitHandler()}
                title="Login"
              />
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
