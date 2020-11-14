"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _AnimatedText = _interopRequireDefault(require("../../Typography/AnimatedText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const InputLabel = props => {
  const {
    parentState,
    labelBackground
  } = props;
  const {
    label,
    error,
    onLayoutAnimatedText,
    hasActiveOutline,
    activeColor,
    placeholderStyle,
    baseLabelTranslateX,
    baseLabelTranslateY,
    font,
    fontSize,
    fontWeight,
    placeholderOpacity,
    wiggleOffsetX,
    labelScale,
    topPosition,
    paddingOffset,
    placeholderColor,
    errorColor,
    labelTranslationXOffset
  } = props.labelProps;
  const labelTranslationX = {
    transform: [{
      // Offset label scale since RN doesn't support transform origin
      translateX: parentState.labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [baseLabelTranslateX, labelTranslationXOffset || 0]
      })
    }]
  };

  const labelStyle = _objectSpread(_objectSpread({}, font), {}, {
    fontSize,
    fontWeight,
    transform: [{
      // Wiggle the label when there's an error
      translateX: parentState.error.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, parentState.value && error ? wiggleOffsetX : 0, 0]
      })
    }, {
      // Move label to top
      translateY: parentState.labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [baseLabelTranslateY, 0]
      })
    }, {
      // Make label smaller
      scale: parentState.labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [labelScale, 1]
      })
    }]
  });

  return label ?
  /*#__PURE__*/
  // Position colored placeholder and gray placeholder on top of each other and crossfade them
  // This gives the effect of animating the color, but allows us to use native driver
  _react.default.createElement(_reactNative.Animated.View, {
    pointerEvents: "none",
    style: [_reactNative.StyleSheet.absoluteFill, {
      opacity: // Hide the label in minimized state until we measure it's width
      parentState.value || parentState.focused ? parentState.labelLayout.measured ? 1 : 0 : 1
    }, labelTranslationX]
  }, labelBackground === null || labelBackground === void 0 ? void 0 : labelBackground({
    parentState,
    labelStyle,
    labelProps: props.labelProps
  }), /*#__PURE__*/_react.default.createElement(_AnimatedText.default, {
    onLayout: onLayoutAnimatedText,
    style: [placeholderStyle, {
      top: topPosition
    }, labelStyle, paddingOffset || {}, {
      color: activeColor,
      opacity: parentState.labeled.interpolate({
        inputRange: [0, 1],
        outputRange: [hasActiveOutline ? 1 : 0, 0]
      })
    }],
    numberOfLines: 1
  }, label), /*#__PURE__*/_react.default.createElement(_AnimatedText.default, {
    style: [placeholderStyle, {
      top: topPosition
    }, labelStyle, paddingOffset, {
      color: error && errorColor ? errorColor : placeholderColor,
      opacity: placeholderOpacity
    }],
    numberOfLines: 1
  }, label)) : null;
};

var _default = InputLabel;
exports.default = _default;
//# sourceMappingURL=InputLabel.js.map