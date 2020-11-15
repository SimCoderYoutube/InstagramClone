function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { StyleSheet } from 'react-native';
import Title from '../Typography/Title';
import { withTheme } from '../../core/theming';

/**
 * A component to show a title in a Dialog.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/dialog-title.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Paragraph, Dialog, Portal } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const hideDialog = () => setVisible(false);
 *
 *   return (
 *     <Portal>
 *       <Dialog visible={visible} onDismiss={hideDialog}>
 *         <Dialog.Title>This is a title</Dialog.Title>
 *         <Dialog.Content>
 *           <Paragraph>This is simple dialog</Paragraph>
 *         </Dialog.Content>
 *       </Dialog>
 *     </Portal>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const DialogTitle = (_ref) => {
  let {
    children,
    theme,
    style
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "theme", "style"]);

  return /*#__PURE__*/React.createElement(Title, _extends({
    accessibilityTraits: "header",
    accessibilityRole: "header",
    style: [styles.text, {
      color: theme.colors.text
    }, style]
  }, rest), children);
};

DialogTitle.displayName = 'Dialog.Title';
const styles = StyleSheet.create({
  text: {
    marginTop: 22,
    marginBottom: 18,
    marginHorizontal: 24
  }
});
export default withTheme(DialogTitle); // @component-docs ignore-next-line

export { DialogTitle };
//# sourceMappingURL=DialogTitle.js.map