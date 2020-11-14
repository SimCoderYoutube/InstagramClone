function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { SafeAreaProvider, SafeAreaConsumer, initialWindowSafeAreaInsets } from 'react-native-safe-area-context';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'; // The provider component for safe area initializes asynchornously
// Until the insets are available, there'll be blank screen
// To avoid the blank screen, we specify some initial values

const initialSafeAreaInsets = _objectSpread({
  // Approximate values which are good enough for most cases
  top: getStatusBarHeight(true),
  bottom: getBottomSpace(),
  right: 0,
  left: 0
}, initialWindowSafeAreaInsets);

export default function SafeAreaProviderCompat({
  children
}) {
  return /*#__PURE__*/React.createElement(SafeAreaConsumer, null, insets => {
    if (insets) {
      // If we already have insets, don't wrap the stack in another safe area provider
      // This avoids an issue with updates at the cost of potentially incorrect values
      // https://github.com/react-navigation/react-navigation/issues/174
      return children;
    }

    return /*#__PURE__*/React.createElement(SafeAreaProvider, {
      initialSafeAreaInsets: initialSafeAreaInsets
    }, children);
  });
}
//# sourceMappingURL=SafeAreaProviderCompat.js.map