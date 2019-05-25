import React from "react";
import { connect } from "react-redux";
import styles from "../login/style";
import icon from "../login/icon.png";
import { register, loadUsers } from "../../store/actions/actions";

import { Button } from "react-native-elements";
import {
  Keyboard,
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import { Actions } from "react-native-router-flux";

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
    console.log(registrationInfo);
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Image source={icon} style={styles.image} />
              <TextInput
                placeholder="Email"
                placeholderColor="#c4c3cb"
                placeholderTextColor="#000000"
                style={styles.loginFormTextInput}
                onChangeText={value => this.setState({ email: value })}
              />
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
              <TextInput
                placeholder="Confirm Password"
                placeholderColor="#c4c3cb"
                placeholderTextColor="#000000"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
                onChangeText={value => this.setState({ confirm: value })}
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.registerSubmitHandler()}
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
