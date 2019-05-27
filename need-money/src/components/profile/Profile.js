import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import styles from "../style";
import { Button } from "react-native-elements";
import profilePic from "./profile_pic.png";
import settingsIcon from "./settings_icon.png";
import { Actions } from "react-native-router-flux";

class Profile extends React.Component {
  render() {
    console.log(this.props);
    const { user } = this.props;
    return (
      <View style={styles.backgroundColorView}>
        <TouchableOpacity
          onPress={() => {
            Actions.push("settings");
          }}
        >
          <Image source={settingsIcon} style={styles.settingsImage} />
        </TouchableOpacity>
        <Image source={profilePic} style={styles.profilePicImage} />
        <Text style={styles.profileWhiteText}>{user.username}</Text>
        <Text style={styles.profileWhiteText}>{`Rating: ${user.rating}`}</Text>
        <View style={{ flexDirection: "row" }}>
          <Button
            buttonStyle={styles.button}
            title="   Lend    "
            onPress={() => Actions.push("lend")}
          />
          <Button
            buttonStyle={styles.button2}
            title="    Borrow   "
            onPress={() => Actions.push("borrow")}
          />
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
