"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _AnimatedText = _interopRequireDefault(require("../../Typography/AnimatedText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const LabelBackground = ({
  parentState,
  labelProps: {
    placeholderStyle,
    baseLabelTranslateX,
    topPosition,
    hasActiveOutline,
    label,
    backgroundColor
  },
  labelStyle
}) => {
  const hasFocus = hasActiveOutline || parentState.value;
  const opacity = parentState.labeled.interpolate({
    inputRange: [0, 1],
    outputRange: [hasFocus ? 1 : 0, 0]
  });
  const labelTranslationX = {
    transform: [{
      translateX: parentState.labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [-baseLabelTranslateX, 0]
      })
    }]
  };
  return label ? [/*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    key: "labelBackground-view",
    pointerEvents: "none",
    style: [_reactNative.StyleSheet.absoluteFill, styles.view, {
      backgroundColor,
      opacity
    }, labelTranslationX]
  }), /*#__PURE__*/React.createElement(_AnimatedText.default, {
    key: "labelBackground-text",
    style: [placeholderStyle, labelStyle, styles.outlinedLabel, {
      top: topPosition + 1,
      backgroundColor,
      opacity,
      transform: [...labelStyle.transform, {
        scaleY: parentState.labeled.interpolate({
          inputRange: [0, 1],
          outputRange: [0.2, 1]
        })
      }]
    }],
    numberOfLines: 1
  }, label)] : null;
};

var _default = LabelBackground;
exports.default = _default;

const styles = _reactNative.StyleSheet.create({
  view: {
    position: 'absolute',
    top: 6,
    left: 10,
    width: 8,
    height: 2
  },
  outlinedLabel: {
    position: 'absolute',
    left: 18,
    paddingHorizontal: 0,
    color: 'transparent'
  }
});
//# sourceMappingURL=LabelBackground.js.map