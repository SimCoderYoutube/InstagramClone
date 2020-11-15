"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _ToggleButton = _interopRequireDefault(require("./ToggleButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Toggle button row renders a group of toggle buttons in a row.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/toggle-button-row.gif" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ToggleButton } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [value, setValue] = React.useState('left');
 *
 *   return (
 *     <ToggleButton.Row onValueChange={value => setValue(value)} value={value}>
 *       <ToggleButton icon="format-align-left" value="left" />
 *       <ToggleButton icon="format-align-right" value="right" />
 *     </ToggleButton.Row>
 *   );
 * };
 *
 * export default MyComponent;
 *
 *```
 */
const ToggleButtonRow = ({
  value,
  onValueChange,
  children,
  style
}) => {
  const count = React.Children.count(children);
  return /*#__PURE__*/React.createElement(_ToggleButton.default.Group, {
    value: value,
    onValueChange: onValueChange
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.row, style]
  }, React.Children.map(children, (child, i) => {
    // @ts-ignore
    if (child && child.type === _ToggleButton.default) {
      // @ts-ignore
      return /*#__PURE__*/React.cloneElement(child, {
        style: [styles.button, i === 0 ? styles.first : i === count - 1 ? styles.last : styles.middle, // @ts-ignore
        child.props.style]
      });
    }

    return child;
  })));
};

ToggleButtonRow.displayName = 'ToggleButton.Row';

const styles = _reactNative.StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  button: {
    borderWidth: _reactNative.StyleSheet.hairlineWidth
  },
  first: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  middle: {
    borderRadius: 0,
    borderLeftWidth: 0
  },
  last: {
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  }
});

var _default = ToggleButtonRow;
exports.default = _default;
//# sourceMappingURL=ToggleButtonRow.js.map