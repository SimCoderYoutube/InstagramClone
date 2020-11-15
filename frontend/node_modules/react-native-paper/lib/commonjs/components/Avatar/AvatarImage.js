"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("../../core/theming");

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
 *     <img class="medium" src="screenshots/avatar-image.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Image size={24} source={require('../assets/avatar.png')} />
 * );
 * export default MyComponent
 * ```
 */
class AvatarImage extends React.Component {
  render() {
    const _this$props = this.props,
          {
      size = defaultSize,
      source,
      style,
      theme
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["size", "source", "style", "theme"]);

    const {
      colors
    } = theme;
    const {
      backgroundColor = colors.primary
    } = _reactNative.StyleSheet.flatten(style) || {};
    return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
      style: [{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor
      }, style]
    }, rest), typeof source === 'function' && source({
      size
    }), typeof source !== 'function' && /*#__PURE__*/React.createElement(_reactNative.Image, {
      source: source,
      style: {
        width: size,
        height: size,
        borderRadius: size / 2
      }
    }));
  }

}

_defineProperty(AvatarImage, "displayName", 'Avatar.Image');

_defineProperty(AvatarImage, "defaultProps", {
  size: defaultSize
});

var _default = (0, _theming.withTheme)(AvatarImage);

exports.default = _default;
//# sourceMappingURL=AvatarImage.js.map