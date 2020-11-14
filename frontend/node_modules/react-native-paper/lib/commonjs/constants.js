"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APPROX_STATUSBAR_HEIGHT = void 0;

var _reactNative = require("react-native");

// @ts-ignore
const expo = global.__expo;
const DEFAULT_STATUSBAR_HEIGHT_EXPO = (expo === null || expo === void 0 ? void 0 : expo.Constants) ? expo.Constants.statusBarHeight : 0;

const APPROX_STATUSBAR_HEIGHT = _reactNative.Platform.select({
  android: DEFAULT_STATUSBAR_HEIGHT_EXPO,
  ios: _reactNative.Platform.Version < 11 ? DEFAULT_STATUSBAR_HEIGHT_EXPO : 0
});

exports.APPROX_STATUSBAR_HEIGHT = APPROX_STATUSBAR_HEIGHT;
//# sourceMappingURL=constants.js.map