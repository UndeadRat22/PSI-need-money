import React from "react";
import Dialog, { DialogTitle, DialogContent } from "react-native-popup-dialog";
import { Button } from "react-native-elements";

class LendConfirmDialog extends React.Component {
  render() {
    <Dialog>
      <DialogTitle>Confirm</DialogTitle>
      <DialogContent>
        <Button
          title="Cancel"
          onPress={() => this.setState({ visible: false })}
        />
      </DialogContent>
    </Dialog>;
  }
}

export default LendConfirmDialog;
