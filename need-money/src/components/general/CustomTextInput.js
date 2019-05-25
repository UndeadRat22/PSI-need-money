import React from "react";
import styles from "../style";
import { TextInput } from "react-native";

const CustomTextInput = ({ placeholder, hidden = false, onChangeText }) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderColor="#c4c3cb"
      placeholderTextColor="#000000"
      style={styles.loginFormTextInput}
      onChangeText={onChangeText}
      secureTextEntry={hidden}
    />
  );
};

export default CustomTextInput;
