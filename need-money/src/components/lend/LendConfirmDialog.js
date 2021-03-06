import React from "react";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton
} from "react-native-popup-dialog";
import { Text } from "react-native";
import styles from "../style";

class LendConfirmDialog extends React.Component {
  render() {
    const { onDismiss, visible, onCancel, onConfirm } = this.props;
    return (
      <Dialog
        onDismiss={onDismiss}
        width={0.9}
        visible={visible}
        rounded
        actionsBordered
        dialogTitle={
          <DialogTitle
            title="Confirmation"
            style={styles.dialogBackground}
            hasTitleBar={false}
            align="left"
          />
        }
        footer={
          <DialogFooter>
            <DialogButton
              text="CANCEL"
              bordered
              onPress={onCancel}
              key="button-1"
            />
            <DialogButton
              text="YES"
              bordered
              onPress={onConfirm}
              key="button-2"
            />
          </DialogFooter>
        }
      >
        <DialogContent style={styles.dialogBackground}>
          <Text>Are you sure you want to lend this sum?</Text>
        </DialogContent>
      </Dialog>
    );
  }
}

export default LendConfirmDialog;
