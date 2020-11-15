"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _theming = require("../../core/theming");

var _colors = require("../../styles/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultSize = 64;

/**
 * Avatars can be used to represent people in a graphical way.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/avatar-icon.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Icon size={24} icon="folder" />
 * );
 * ```
 */
class Avatar extends React.Component {
  render() {
    const _this$props = this.props,
          {
      icon,
      size = defaultSize,
      style,
      theme
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["icon", "size", "style", "theme"]);

    const _ref = _reactNative.StyleSheet.flatten(style) || {},
          {
      backgroundColor = theme.colors.primary
    } = _ref,
          restStyle = _objectWithoutProperties(_ref, ["backgroundColor"]);

    const textColor = this.props.color || ((0, _color.default)(backgroundColor).isLight() ? 'rgba(0, 0, 0, .54)' : _colors.white);
    return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
      style: [{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor
      }, styles.container, restStyle]
    }, rest), /*#__PURE__*/React.createElement(_Icon.default, {
      source: icon,
      color: textColor,
      size: size * 0.6
    }));
  }

}

_defineProperty(Avatar, "displayName", 'Avatar.Icon');

_defineProperty(Avatar, "defaultProps", {
  size: defaultSize
});

const styles = _reactNative.StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

var _default = (0, _theming.withTheme)(Avatar);

exports.default = _default;
//# sourceMappingURL=AvatarIcon.js.map