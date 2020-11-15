"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GestureState = exports.GestureHandlerRootView = exports.PanGestureHandler = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Dummy = ({
  children
}) => /*#__PURE__*/React.createElement(React.Fragment, null, children);

const PanGestureHandler = Dummy;
exports.PanGestureHandler = PanGestureHandler;
const GestureHandlerRootView = _reactNative.View;
exports.GestureHandlerRootView = GestureHandlerRootView;
const GestureState = {
  UNDETERMINED: 0,
  FAILED: 1,
  BEGAN: 2,
  CANCELLED: 3,
  ACTIVE: 4,
  END: 5
};
exports.GestureState = GestureState;
//# sourceMappingURL=GestureHandler.js.map