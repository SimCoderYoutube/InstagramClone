"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _colors = require("../styles/colors");

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _theming = require("../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const version = _reactNative.NativeModules.PlatformConstants ? _reactNative.NativeModules.PlatformConstants.reactNativeVersion : undefined;

/**
 * Switch is a visual toggle between two mutually exclusive states — on and off.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/switch-enabled.android.png" />
 *     <figcaption>Android (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/switch-disabled.android.png" />
 *     <figcaption>Android (disabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/switch-enabled.ios.png" />
 *     <figcaption>iOS (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/switch-disabled.ios.png" />
 *     <figcaption>iOS (disabled)</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Switch } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [isSwitchOn, setIsSwitchOn] = React.useState(false);
 *
 *   const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
 *
 *   return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
 * };
 *
 * export default MyComponent;
 * ```
 */
class Switch extends React.Component {
  render() {
    const _this$props = this.props,
          {
      value,
      disabled,
      onValueChange,
      color,
      theme
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["value", "disabled", "onValueChange", "color", "theme"]);

    const checkedColor = color || theme.colors.accent;
    const onTintColor = _reactNative.Platform.OS === 'ios' ? checkedColor : disabled ? theme.dark ? (0, _color.default)(_colors.white).alpha(0.1).rgb().string() : (0, _color.default)(_colors.black).alpha(0.12).rgb().string() : (0, _color.default)(checkedColor).alpha(0.5).rgb().string();
    const thumbTintColor = _reactNative.Platform.OS === 'ios' ? undefined : disabled ? theme.dark ? _colors.grey800 : _colors.grey400 : value ? checkedColor : theme.dark ? _colors.grey400 : _colors.grey50;
    const props = version && version.major === 0 && version.minor <= 56 ? {
      onTintColor,
      thumbTintColor
    } : {
      thumbColor: thumbTintColor,
      trackColor: {
        true: onTintColor,
        false: ''
      }
    };
    return /*#__PURE__*/React.createElement(_reactNative.Switch, _extends({
      value: value,
      disabled: disabled,
      onValueChange: disabled ? undefined : onValueChange
    }, props, rest));
  }

}

var _default = (0, _theming.withTheme)(Switch);

exports.default = _default;
//# sourceMappingURL=Switch.js.map