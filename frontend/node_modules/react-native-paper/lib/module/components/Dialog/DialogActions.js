function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { StyleSheet, View } from 'react-native';

/**
 * A component to show a list of actions in a Dialog.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/dialog-actions.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Button, Dialog, Portal } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const hideDialog = () => setVisible(false);
 *
 *   return (
 *     <Portal>
 *       <Dialog visible={visible} onDismiss={hideDialog}>
 *         <Dialog.Actions>
 *           <Button onPress={() => console.log('Cancel')}>Cancel</Button>
 *           <Button onPress={() => console.log('Ok')}>Ok</Button>
 *         </Dialog.Actions>
 *       </Dialog>
 *     </Portal>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const DialogActions = props => /*#__PURE__*/React.createElement(View, _extends({}, props, {
  style: [styles.container, props.style]
}), React.Children.map(props.children, child => /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, {
  compact: true
}) : child));

DialogActions.displayName = 'Dialog.Actions';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 8
  }
});
export default DialogActions;
//# sourceMappingURL=DialogActions.js.map