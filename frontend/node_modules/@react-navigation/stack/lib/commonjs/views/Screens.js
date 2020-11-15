"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaybeScreen = exports.MaybeScreenContainer = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

let Screens;

try {
  Screens = require('react-native-screens');
} catch (e) {} // Ignore
// The web implementation in react-native-screens seems buggy.
// The view doesn't become visible after coming back in some cases.
// So we use our custom implementation.


class WebScreen extends React.Component {
  render() {
    const _this$props = this.props,
          {
      active,
      style
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["active", "style"]);

    return /*#__PURE__*/React.createElement(_reactNative.View // @ts-expect-error: hidden exists on web, but not in React Native
    , _extends({
      hidden: !active,
      style: [style, {
        display: active ? 'flex' : 'none'
      }]
    }, rest));
  }

}

const AnimatedWebScreen = _reactNative.Animated.createAnimatedComponent(WebScreen);

const MaybeScreenContainer = (_ref) => {
  let {
    enabled
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["enabled"]);

  if (enabled && _reactNative.Platform.OS !== 'web' && Screens && Screens.screensEnabled()) {
    return /*#__PURE__*/React.createElement(Screens.ScreenContainer, rest);
  }

  return /*#__PURE__*/React.createElement(_reactNative.View, rest);
};

exports.MaybeScreenContainer = MaybeScreenContainer;

const MaybeScreen = (_ref2) => {
  let {
    enabled,
    active
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["enabled", "active"]);

  if (enabled && _reactNative.Platform.OS === 'web') {
    return /*#__PURE__*/React.createElement(AnimatedWebScreen, _extends({
      active: active
    }, rest));
  }

  if (enabled && Screens && Screens.screensEnabled()) {
    // @ts-expect-error: stackPresentation is incorrectly marked as required
    return /*#__PURE__*/React.createElement(Screens.Screen, _extends({
      active: active
    }, rest));
  }

  return /*#__PURE__*/React.createElement(_reactNative.View, rest);
};

exports.MaybeScreen = MaybeScreen;
//# sourceMappingURL=Screens.js.map