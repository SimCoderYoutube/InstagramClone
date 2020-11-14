"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioButtonContext = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const RadioButtonContext = /*#__PURE__*/React.createContext(null);
/**
 * Radio button group allows to control a group of radio buttons.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/radio-button-group-android.gif" />
 *  <figcaption>Android</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/radio-button-group-ios.gif" />
 *  <figcaption>iOS</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { RadioButton, Text } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [value, setValue] = React.useState('first');
 *
 *   return (
 *     <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
 *       <View>
 *         <Text>First</Text>
 *         <RadioButton value="first" />
 *       </View>
 *       <View>
 *         <Text>Second</Text>
 *         <RadioButton value="second" />
 *       </View>
 *     </RadioButton.Group>
 *   );
 * };
 *
 * export default MyComponent;
 *```
 */

exports.RadioButtonContext = RadioButtonContext;

const RadioButtonGroup = ({
  value,
  onValueChange,
  children
}) => /*#__PURE__*/React.createElement(RadioButtonContext.Provider, {
  value: {
    value,
    onValueChange
  }
}, children);

RadioButtonGroup.displayName = 'RadioButton.Group';
var _default = RadioButtonGroup;
exports.default = _default;
//# sourceMappingURL=RadioButtonGroup.js.map