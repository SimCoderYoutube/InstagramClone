"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _Text = _interopRequireDefault(require("../Typography/Text"));

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
 *     <img class="medium" src="screenshots/avatar-text.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Text size={24} label="XD" />
 * );
 * ```
 */
class AvatarText extends React.Component {
  render() {
    const _this$props = this.props,
          {
      label,
      size = defaultSize,
      style,
      theme,
      labelStyle,
      color
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["label", "size", "style", "theme", "labelStyle", "color"]);

    const _ref = _reactNative.StyleSheet.flatten(style) || {},
          {
      backgroundColor = theme.colors.primary
    } = _ref,
          restStyle = _objectWithoutProperties(_ref, ["backgroundColor"]);

    const textColor = color || ((0, _color.default)(backgroundColor).isLight() ? 'rgba(0, 0, 0, .54)' : _colors.white);
    return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
      style: [{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor
      }, styles.container, restStyle]
    }, rest), /*#__PURE__*/React.createElement(_Text.default, {
      style: [styles.text, {
        color: textColor,
        fontSize: size / 2,
        lineHeight: size
      }, labelStyle],
      numberOfLines: 1
    }, label));
  }

}

_defineProperty(AvatarText, "displayName", 'Avatar.Text');

_defineProperty(AvatarText, "defaultProps", {
  size: defaultSize
});

const styles = _reactNative.StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});

var _default = (0, _theming.withTheme)(AvatarText);

exports.default = _default;
//# sourceMappingURL=AvatarText.js.map