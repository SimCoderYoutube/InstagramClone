"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _MaterialCommunityIcon = _interopRequireDefault(require("../MaterialCommunityIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const AppbarBackIcon = ({
  size,
  color
}) => _reactNative.Platform.OS === 'ios' ? /*#__PURE__*/React.createElement(_reactNative.View, {
  style: [styles.wrapper, {
    width: size,
    height: size,
    transform: [{
      scaleX: _reactNative.I18nManager.isRTL ? -1 : 1
    }]
  }]
}, /*#__PURE__*/React.createElement(_reactNative.Image, {
  source: require('../../assets/back-chevron.png'),
  style: [styles.icon, {
    tintColor: color
  }]
})) : /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
  name: "arrow-left",
  color: color,
  size: size,
  direction: _reactNative.I18nManager.isRTL ? 'rtl' : 'ltr'
});

const styles = _reactNative.StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    height: 21,
    width: 21,
    resizeMode: 'contain'
  }
});

var _default = AppbarBackIcon;
exports.default = _default;
//# sourceMappingURL=AppbarBackIcon.js.map