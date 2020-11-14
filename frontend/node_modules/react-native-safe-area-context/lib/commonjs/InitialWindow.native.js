"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialWindowSafeAreaInsets = exports.initialWindowMetrics = void 0;

var _reactNative = require("react-native");

const RNCSafeAreaProviderConfig = _reactNative.UIManager.getViewManagerConfig('RNCSafeAreaProvider');

const initialWindowMetrics = RNCSafeAreaProviderConfig != null && RNCSafeAreaProviderConfig.Constants != null ? RNCSafeAreaProviderConfig.Constants.initialWindowMetrics : null;
/**
 * @deprecated
 */

exports.initialWindowMetrics = initialWindowMetrics;
const initialWindowSafeAreaInsets = initialWindowMetrics === null || initialWindowMetrics === void 0 ? void 0 : initialWindowMetrics.insets;
exports.initialWindowSafeAreaInsets = initialWindowSafeAreaInsets;
//# sourceMappingURL=InitialWindow.native.js.map