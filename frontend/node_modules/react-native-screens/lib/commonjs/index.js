"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enableScreens = enableScreens;
exports.screensEnabled = screensEnabled;
exports.NativeScreenContainer = exports.ScreenContainer = exports.Screen = exports.NativeScreen = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

let ENABLE_SCREENS = true;

function enableScreens(shouldEnableScreens = true) {
  ENABLE_SCREENS = shouldEnableScreens;
}

function screensEnabled() {
  return ENABLE_SCREENS;
}

class NativeScreen extends _react.default.Component {
  render() {
    const _this$props = this.props,
          {
      active,
      style
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["active", "style"]);

    return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
      style: [style, ENABLE_SCREENS && !active ? {
        display: 'none'
      } : null]
    }, rest));
  }

}

exports.NativeScreen = NativeScreen;

const Screen = _reactNative.Animated.createAnimatedComponent(NativeScreen);

exports.Screen = Screen;
const ScreenContainer = _reactNative.View;
exports.ScreenContainer = ScreenContainer;
const NativeScreenContainer = _reactNative.View;
exports.NativeScreenContainer = NativeScreenContainer;
//# sourceMappingURL=index.js.map