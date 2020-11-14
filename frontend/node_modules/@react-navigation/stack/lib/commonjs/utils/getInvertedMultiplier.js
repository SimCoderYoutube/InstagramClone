"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getInvertedMultiplier;

var _reactNative = require("react-native");

function getInvertedMultiplier(gestureDirection) {
  switch (gestureDirection) {
    case 'vertical':
      return 1;

    case 'vertical-inverted':
      return -1;

    case 'horizontal':
      return _reactNative.I18nManager.isRTL ? -1 : 1;

    case 'horizontal-inverted':
      return _reactNative.I18nManager.isRTL ? 1 : -1;
  }
}
//# sourceMappingURL=getInvertedMultiplier.js.map