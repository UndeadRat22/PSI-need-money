import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { connect } from "react-redux";
import styles from "../style";
import { Button } from "react-native-elements";
import profilePic from "./profile_pic.png";
import settingsIcon from "./settings_icon.png";

class Profile extends React.Component {
  render() {
    console.log(this.props);
    const { user } = this.props;
    return (
      <View style={styles.backgroundColorView}>
        <Image source={settingsIcon} style={styles.settingsImage} />
        <Image source={profilePic} style={styles.profilePicImage} />
        <Text style={styles.profileWhiteText}>{user.username}</Text>
        <Text style={styles.profileWhiteText}>{`Reitingas: ${
          user.rating
        }`}</Text>
        <View style={{ flexDirection: "row" }}>
          <Button buttonStyle={styles.button} title="Paskolinti" />
          <Button buttonStyle={styles.button2} title="Pasiskolinti" />
        </View>
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
