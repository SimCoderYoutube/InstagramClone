"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MaskedView;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

let RNCMaskedView;

try {
  // Add try/catch to support usage even if it's not installed, since it's optional.
  // Newer versions of Metro will handle it properly.
  RNCMaskedView = require('@react-native-community/masked-view').default;
} catch (e) {// Ignore
}

const isMaskedViewAvailable = _reactNative.UIManager.getViewManagerConfig('RNCMaskedView') != null;

function MaskedView(_ref) {
  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  if (isMaskedViewAvailable && RNCMaskedView) {
    return /*#__PURE__*/React.createElement(RNCMaskedView, rest, children);
  }

  return children;
}
//# sourceMappingURL=MaskedViewNative.js.map