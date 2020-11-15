"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _RadioButtonGroup = _interopRequireDefault(require("./RadioButtonGroup"));

var _RadioButtonAndroid = _interopRequireDefault(require("./RadioButtonAndroid"));

var _RadioButtonIOS = _interopRequireDefault(require("./RadioButtonIOS"));

var _RadioButtonItem = _interopRequireDefault(require("./RadioButtonItem"));

var _theming = require("../../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Radio buttons allow the selection a single option from a set.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/radio-enabled.android.png" />
 *     <figcaption>Android (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.android.png" />
 *     <figcaption>Android (disabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-enabled.ios.png" />
 *     <figcaption>iOS (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.ios.png" />
 *     <figcaption>iOS (disabled)</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { RadioButton } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [checked, setChecked] = React.useState('first');
 *
 *   return (
 *     <View>
 *       <RadioButton
 *         value="first"
 *         status={ checked === 'first' ? 'checked' : 'unchecked' }
 *         onPress={() => setChecked('first')}
 *       />
 *       <RadioButton
 *         value="second"
 *         status={ checked === 'second' ? 'checked' : 'unchecked' }
 *         onPress={() => setChecked('second')}
 *       />
 *     </View>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const RadioButton = props => {
  const Button = _reactNative.Platform.select({
    default: _RadioButtonAndroid.default,
    ios: _RadioButtonIOS.default
  });

  return /*#__PURE__*/React.createElement(Button, props);
}; // @component ./RadioButtonGroup.tsx


RadioButton.Group = _RadioButtonGroup.default; // @component ./RadioButtonAndroid.tsx

RadioButton.Android = _RadioButtonAndroid.default; // @component ./RadioButtonIOS.tsx

RadioButton.IOS = _RadioButtonIOS.default; // @component ./RadioButtonItem.tsx

RadioButton.Item = _RadioButtonItem.default;

var _default = (0, _theming.withTheme)(RadioButton);

exports.default = _default;
//# sourceMappingURL=RadioButton.js.map