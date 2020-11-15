"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A component to show an icon in a list item.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/list-icon.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List, Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <List.Icon color={Colors.blue500} icon="folder" />
 *   <List.Icon color={Colors.blue500} icon="equal" />
 *   <List.Icon color={Colors.blue500} icon="calendar" />
 * );
 *
 * export default MyComponent;
 * ```
 */
class ListIcon extends React.Component {
  render() {
    const {
      icon,
      color: iconColor,
      style
    } = this.props;
    return /*#__PURE__*/React.createElement(_reactNative.View, {
      style: [styles.item, style],
      pointerEvents: "box-none"
    }, /*#__PURE__*/React.createElement(_Icon.default, {
      source: icon,
      size: 24,
      color: iconColor
    }));
  }

}

exports.default = ListIcon;

_defineProperty(ListIcon, "displayName", 'List.Icon');

const styles = _reactNative.StyleSheet.create({
  item: {
    margin: 8,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
//# sourceMappingURL=ListIcon.js.map