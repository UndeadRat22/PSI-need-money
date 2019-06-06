import React from "react";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton
} from "react-native-popup-dialog";
import { Text } from "react-native";
import styles from "../style";

class LoginDialog extends React.Component {
  render() {
    const { onDismiss, visible, onCancel, errorMessage } = this.props;
    return (
      <Dialog
        onDismiss={onDismiss}
        errorMessage={errorMessage}
        width={0.9}
        visible={visible}
        rounded
        actionsBordered
        dialogTitle={
          <DialogTitle
            title="A problem occurred"
            style={styles.dialogBackground}
            hasTitleBar={false}
            align="left"
          />
        }
        footer={
          <DialogButton
            text="Try Again"
            bordered
            onPress={onCancel}
            key="button-1"
          />
        }
      >
        <DialogContent style={styles.dialogBackground}>
          <Text>{errorMessage}</Text>
        </DialogContent>
      </Dialog>
    );
  }
}

export default LoginDialog;
