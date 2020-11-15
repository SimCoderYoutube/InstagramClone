"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shadow;

var Colors = _interopRequireWildcard(require("./colors"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SHADOW_COLOR = Colors.black;
const SHADOW_OPACITY = 0.24;

function shadow(elevation = 0) {
  if (elevation instanceof _reactNative.Animated.Value) {
    const inputRange = [0, 1, 2, 3, 8, 24];
    return {
      shadowColor: SHADOW_COLOR,
      shadowOffset: {
        width: new _reactNative.Animated.Value(0),
        height: elevation.interpolate({
          inputRange,
          outputRange: [0, 0.5, 0.75, 2, 7, 23]
        })
      },
      shadowOpacity: new _reactNative.Animated.Value(SHADOW_OPACITY),
      shadowRadius: elevation.interpolate({
        inputRange,
        outputRange: [0, 0.75, 1.5, 3, 8, 24]
      })
    };
  } else {
    if (elevation === 0) {
      return {};
    }

    let height, radius;

    switch (elevation) {
      case 1:
        height = 0.5;
        radius = 0.75;
        break;

      case 2:
        height = 0.75;
        radius = 1.5;
        break;

      default:
        height = elevation - 1;
        radius = elevation;
    }

    return {
      shadowColor: SHADOW_COLOR,
      shadowOffset: {
        width: 0,
        height
      },
      shadowOpacity: SHADOW_OPACITY,
      shadowRadius: radius
    };
  }
}
//# sourceMappingURL=shadow.js.map