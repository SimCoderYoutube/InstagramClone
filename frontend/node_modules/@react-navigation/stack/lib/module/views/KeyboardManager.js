function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { TextInput, Platform, Keyboard } from 'react-native';
export default class KeyboardManager extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "previouslyFocusedTextInput", null);

    _defineProperty(this, "startTimestamp", 0);

    _defineProperty(this, "keyboardTimeout", void 0);

    _defineProperty(this, "clearKeyboardTimeout", () => {
      if (this.keyboardTimeout !== undefined) {
        clearTimeout(this.keyboardTimeout);
        this.keyboardTimeout = undefined;
      }
    });

    _defineProperty(this, "handlePageChangeStart", () => {
      if (!this.props.enabled) {
        return;
      }

      this.clearKeyboardTimeout(); // @ts-expect-error: currentlyFocusedInput is pretty new, so not in the type definitions

      const input = TextInput.State.currentlyFocusedInput ? // @ts-expect-error
      TextInput.State.currentlyFocusedInput() : TextInput.State.currentlyFocusedField(); // When a page change begins, blur the currently focused input

      TextInput.State.blurTextInput(input); // Store the id of this input so we can refocus it if change was cancelled

      this.previouslyFocusedTextInput = input; // Store timestamp for touch start

      this.startTimestamp = Date.now();
    });

    _defineProperty(this, "handlePageChangeConfirm", () => {
      if (!this.props.enabled) {
        return;
      }

      this.clearKeyboardTimeout();
      const input = this.previouslyFocusedTextInput;

      if (Platform.OS === 'android') {
        Keyboard.dismiss();
      } else if (input) {
        TextInput.State.blurTextInput(input);
      } // Cleanup the ID on successful page change


      this.previouslyFocusedTextInput = null;
    });

    _defineProperty(this, "handlePageChangeCancel", () => {
      if (!this.props.enabled) {
        return;
      }

      this.clearKeyboardTimeout(); // The page didn't change, we should restore the focus of text input

      const input = this.previouslyFocusedTextInput;

      if (input) {
        // If the interaction was super short we should make sure keyboard won't hide again.
        // Too fast input refocus will result only in keyboard flashing on screen and hiding right away.
        // During first ~100ms keyboard will be dismissed no matter what,
        // so we have to make sure it won't interrupt input refocus logic.
        // That's why when the interaction is shorter than 100ms we add delay so it won't hide once again.
        // Subtracting timestamps makes us sure the delay is executed only when needed.
        if (Date.now() - this.startTimestamp < 100) {
          this.keyboardTimeout = setTimeout(() => {
            TextInput.State.focusTextInput(input);
            this.previouslyFocusedTextInput = null;
          }, 100);
        } else {
          TextInput.State.focusTextInput(input);
          this.previouslyFocusedTextInput = null;
        }
      }
    });
  }

  componentWillUnmount() {
    this.clearKeyboardTimeout();
  } // Numeric id of the previously focused text input
  // When a gesture didn't change the tab, we can restore the focused input with this


  render() {
    return this.props.children({
      onPageChangeStart: this.handlePageChangeStart,
      onPageChangeConfirm: this.handlePageChangeConfirm,
      onPageChangeCancel: this.handlePageChangeCancel
    });
  }

}
//# sourceMappingURL=KeyboardManager.js.map