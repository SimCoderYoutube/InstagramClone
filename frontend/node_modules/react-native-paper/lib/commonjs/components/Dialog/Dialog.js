"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Modal = _interopRequireDefault(require("../Modal"));

var _DialogContent = _interopRequireDefault(require("./DialogContent"));

var _DialogActions = _interopRequireDefault(require("./DialogActions"));

var _DialogTitle2 = _interopRequireDefault(require("./DialogTitle"));

var _DialogScrollArea = _interopRequireDefault(require("./DialogScrollArea"));

var _theming = require("../../core/theming");

var _overlay = _interopRequireDefault(require("../../styles/overlay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DIALOG_ELEVATION = 24;
/**
 * Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.
 * To render the `Dialog` above other components, you'll need to wrap it with the [`Portal`](portal.html) component.
 *
 *  <div class="screenshots">
 *   <img class="medium" src="screenshots/dialog-1.png" />
 *   <img class="medium" src="screenshots/dialog-2.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const showDialog = () => setVisible(true);
 *
 *   const hideDialog = () => setVisible(false);
 *
 *   return (
 *     <View>
 *       <Button onPress={showDialog}>Show Dialog</Button>
 *       <Portal>
 *         <Dialog visible={visible} onDismiss={hideDialog}>
 *           <Dialog.Title>Alert</Dialog.Title>
 *           <Dialog.Content>
 *             <Paragraph>This is simple dialog</Paragraph>
 *           </Dialog.Content>
 *           <Dialog.Actions>
 *             <Button onPress={hideDialog}>Done</Button>
 *           </Dialog.Actions>
 *         </Dialog>
 *       </Portal>
 *     </View>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */

const Dialog = ({
  children,
  dismissable = true,
  onDismiss,
  visible = false,
  style,
  theme
}) => /*#__PURE__*/React.createElement(_Modal.default, {
  dismissable: dismissable,
  onDismiss: onDismiss,
  visible: visible,
  contentContainerStyle: [{
    borderRadius: theme.roundness,
    backgroundColor: theme.dark && theme.mode === 'adaptive' ? (0, _overlay.default)(DIALOG_ELEVATION, theme.colors.surface) : theme.colors.surface
  }, styles.container, style]
}, React.Children.toArray(children).filter(child => child != null && typeof child !== 'boolean').map((child, i) => {
  if (i === 0 && /*#__PURE__*/React.isValidElement(child) && child.type === _DialogContent.default) {
    // Dialog content is the first item, so we add a top padding
    return /*#__PURE__*/React.cloneElement(child, {
      style: [{
        paddingTop: 24
      }, child.props.style]
    });
  }

  return child;
})); // @component ./DialogContent.tsx


Dialog.Content = _DialogContent.default; // @component ./DialogActions.tsx

Dialog.Actions = _DialogActions.default; // @component ./DialogTitle.tsx

Dialog.Title = _DialogTitle2.default; // @component ./DialogScrollArea.tsx

Dialog.ScrollArea = _DialogScrollArea.default;

const styles = _reactNative.StyleSheet.create({
  container: {
    /**
     * This prevents the shadow from being clipped on Android since Android
     * doesn't support `overflow: visible`.
     * One downside for this fix is that it will disable clicks on the area
     * of the shadow around the dialog, consequently, if you click around the
     * dialog (44 pixel from the top and bottom) it won't be dismissed.
     */
    marginVertical: _reactNative.Platform.OS === 'android' ? 44 : 0,
    marginHorizontal: 26,
    elevation: DIALOG_ELEVATION,
    justifyContent: 'flex-start'
  }
});

var _default = (0, _theming.withTheme)(Dialog);

exports.default = _default;
//# sourceMappingURL=Dialog.js.map