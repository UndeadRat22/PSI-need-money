import React from "react";
import styles from "../style";
import { TextInput } from "react-native";
import CustomTextInput from "./CustomTextInput";

const NumericInput = ({ onChangeText }) => {
  return (
    <CustomTextInput
      onChangeText={onChangeText}
      placeholder="0"
      keyboardType="numeric"
      maxLength={3}
    />
  );
};

export default NumericInput;
