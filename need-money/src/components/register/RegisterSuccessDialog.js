import React from "react";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogButton
} from "react-native-popup-dialog";
import { Text } from "react-native";
import styles from "../style";

class RegisterSuccessDialog extends React.Component {
  render() {
    const { onDismiss, visible, onCancel } = this.props;
    return (
      <Dialog
        onDismiss={onDismiss}
        width={0.9}
        visible={visible}
        rounded
        actionsBordered
        dialogTitle={
          <DialogTitle
            title="Registration successful"
            style={styles.dialogBackground}
            hasTitleBar={false}
            align="center"
          />
        }
        footer={
          <DialogButton text="OK" bordered onPress={onCancel} key="button-1" />
        }
        children={undefined}
      />
    );
  }
}

export default RegisterSuccessDialog;
