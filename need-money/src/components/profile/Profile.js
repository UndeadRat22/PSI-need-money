import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import styles from "../style";
import { Button } from "react-native-elements";

class Profile extends React.Component {
  render() {
    console.log(this.props);
    const { user } = this.props;
    return (
      <View>
        <Text>{user.username}</Text>
        <Text>{`Reitingas: ${user.rating}`}</Text>
        <Button title="Paskolinti" />
        <Button title="Pasiskolinti" />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.login.user
  };
};

export default connect(
  mapStateToProps,
  null
)(Profile);
