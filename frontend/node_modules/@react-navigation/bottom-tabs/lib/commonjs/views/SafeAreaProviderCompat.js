"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SafeAreaProviderCompat;

var React = _interopRequireWildcard(require("react"));

var _reactNativeSafeAreaContext = require("react-native-safe-area-context");

var _reactNativeIphoneXHelper = require("react-native-iphone-x-helper");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// The provider component for safe area initializes asynchornously
// Until the insets are available, there'll be blank screen
// To avoid the blank screen, we specify some initial values
const initialSafeAreaInsets = _objectSpread({
  // Approximate values which are good enough for most cases
  top: (0, _reactNativeIphoneXHelper.getStatusBarHeight)(true),
  bottom: (0, _reactNativeIphoneXHelper.getBottomSpace)(),
  right: 0,
  left: 0
}, _reactNativeSafeAreaContext.initialWindowSafeAreaInsets);

function SafeAreaProviderCompat({
  children
}) {
  return /*#__PURE__*/React.createElement(_reactNativeSafeAreaContext.SafeAreaConsumer, null, insets => {
    if (insets) {
      // If we already have insets, don't wrap the stack in another safe area provider
      // This avoids an issue with updates at the cost of potentially incorrect values
      // https://github.com/react-navigation/react-navigation/issues/174
      return children;
    }

    return /*#__PURE__*/React.createElement(_reactNativeSafeAreaContext.SafeAreaProvider, {
      initialSafeAreaInsets: initialSafeAreaInsets
    }, children);
  });
}
//# sourceMappingURL=SafeAreaProviderCompat.js.map