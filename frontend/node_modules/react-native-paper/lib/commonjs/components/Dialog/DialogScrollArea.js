"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * A component to show a scrollable content in a Dialog. The component only provides appropriate styling.
 * For the scrollable content you can use `ScrollView`, `FlatList` etc. depending on your requirement.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/dialog-scroll-area.gif" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ScrollView } from 'react-native';
 * import { Dialog, Portal, Text } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const hideDialog = () => setVisible(false);
 *
 *   return (
 *     <Portal>
 *       <Dialog visible={visible} onDismiss={hideDialog}>
 *         <Dialog.ScrollArea>
 *           <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
 *             <Text>This is a scrollable area</Text>
 *           </ScrollView>
 *         </Dialog.ScrollArea>
 *       </Dialog>
 *     </Portal>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const DialogScrollArea = props => /*#__PURE__*/React.createElement(_reactNative.View, _extends({}, props, {
  style: [styles.container, props.style]
}), props.children);

DialogScrollArea.displayName = 'Dialog.ScrollArea';

const styles = _reactNative.StyleSheet.create({
  container: {
    borderColor: 'rgba(0, 0, 0, .12)',
    borderTopWidth: _reactNative.StyleSheet.hairlineWidth,
    borderBottomWidth: _reactNative.StyleSheet.hairlineWidth,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1
  }
});

var _default = DialogScrollArea;
exports.default = _default;
//# sourceMappingURL=DialogScrollArea.js.map