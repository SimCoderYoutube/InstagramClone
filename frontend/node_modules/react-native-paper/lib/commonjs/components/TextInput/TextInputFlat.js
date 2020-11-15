"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _InputLabel = _interopRequireDefault(require("./Label/InputLabel"));

var _TextInputAdornment = _interopRequireWildcard(require("./Adornment/TextInputAdornment"));

var _constants = require("./constants");

var _helpers = require("./helpers");

var _enums = require("./Adornment/enums");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const MINIMIZED_LABEL_Y_OFFSET = -18;
const LABEL_PADDING_TOP = 30;
const LABEL_PADDING_TOP_DENSE = 24;
const MIN_HEIGHT = 64;
const MIN_DENSE_HEIGHT_WL = 52;
const MIN_DENSE_HEIGHT = 40;

class TextInputFlat extends React.Component {
  render() {
    const _this$props = this.props,
          {
      disabled,
      editable,
      label,
      error,
      selectionColor,
      underlineColor,
      dense,
      style,
      theme,
      render,
      multiline,
      parentState,
      innerRef,
      onFocus,
      forceFocus,
      onBlur,
      onChangeText,
      onLayoutAnimatedText,
      onLeftAffixLayoutChange,
      onRightAffixLayoutChange,
      left,
      right,
      placeholderTextColor
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["disabled", "editable", "label", "error", "selectionColor", "underlineColor", "dense", "style", "theme", "render", "multiline", "parentState", "innerRef", "onFocus", "forceFocus", "onBlur", "onChangeText", "onLayoutAnimatedText", "onLeftAffixLayoutChange", "onRightAffixLayoutChange", "left", "right", "placeholderTextColor"]);

    const {
      colors,
      fonts
    } = theme;
    const font = fonts.regular;
    const hasActiveOutline = parentState.focused || error;

    const _ref = _reactNative.StyleSheet.flatten(style) || {},
          {
      fontSize: fontSizeStyle,
      fontWeight,
      height,
      paddingHorizontal
    } = _ref,
          viewStyle = _objectWithoutProperties(_ref, ["fontSize", "fontWeight", "height", "paddingHorizontal"]);

    const fontSize = fontSizeStyle || _constants.MAXIMIZED_LABEL_FONT_SIZE;
    const isPaddingHorizontalPassed = paddingHorizontal !== undefined && typeof paddingHorizontal === 'number';
    const adornmentConfig = (0, _TextInputAdornment.getAdornmentConfig)({
      left,
      right
    });
    let {
      paddingLeft,
      paddingRight
    } = (0, _helpers.calculateFlatInputHorizontalPadding)({
      adornmentConfig
    });

    if (isPaddingHorizontalPassed) {
      paddingLeft = paddingHorizontal;
      paddingRight = paddingHorizontal;
    }

    const {
      leftLayout,
      rightLayout
    } = parentState;
    const rightAffixWidth = right ? rightLayout.width || _constants.ADORNMENT_SIZE : _constants.ADORNMENT_SIZE;
    const leftAffixWidth = left ? leftLayout.width || _constants.ADORNMENT_SIZE : _constants.ADORNMENT_SIZE;
    const adornmentStyleAdjustmentForNativeInput = (0, _TextInputAdornment.getAdornmentStyleAdjustmentForNativeInput)({
      adornmentConfig,
      rightAffixWidth,
      leftAffixWidth,
      inputOffset: _constants.FLAT_INPUT_OFFSET
    });
    let inputTextColor, activeColor, underlineColorCustom, placeholderColor, errorColor;

    if (disabled) {
      inputTextColor = activeColor = (0, _color.default)(colors.text).alpha(0.54).rgb().string();
      placeholderColor = colors.disabled;
      underlineColorCustom = 'transparent';
    } else {
      inputTextColor = colors.text;
      activeColor = error ? colors.error : colors.primary;
      placeholderColor = colors.placeholder;
      errorColor = colors.error;
      underlineColorCustom = underlineColor || colors.disabled;
    }

    const containerStyle = {
      backgroundColor: theme.dark ? (0, _color.default)(colors.background).lighten(0.24).rgb().string() : (0, _color.default)(colors.background).darken(0.06).rgb().string(),
      borderTopLeftRadius: theme.roundness,
      borderTopRightRadius: theme.roundness
    };
    const labelScale = _constants.MINIMIZED_LABEL_FONT_SIZE / fontSize;
    const fontScale = _constants.MAXIMIZED_LABEL_FONT_SIZE / fontSize;
    const labelWidth = parentState.labelLayout.width;
    const labelHeight = parentState.labelLayout.height;
    const labelHalfWidth = labelWidth / 2;
    const labelHalfHeight = labelHeight / 2;
    const baseLabelTranslateX = (_reactNative.I18nManager.isRTL ? 1 : -1) * (labelHalfWidth - labelScale * labelWidth / 2) + (1 - labelScale) * (_reactNative.I18nManager.isRTL ? -1 : 1) * paddingLeft;
    const minInputHeight = dense ? (label ? MIN_DENSE_HEIGHT_WL : MIN_DENSE_HEIGHT) - LABEL_PADDING_TOP_DENSE : MIN_HEIGHT - LABEL_PADDING_TOP;
    const inputHeight = (0, _helpers.calculateInputHeight)(labelHeight, height, minInputHeight);
    const topPosition = (0, _helpers.calculateLabelTopPosition)(labelHeight, inputHeight, multiline && height ? 0 : !height ? minInputHeight / 2 : 0);

    if (height && typeof height !== 'number') {
      // eslint-disable-next-line
      console.warn('Currently we support only numbers in height prop');
    }

    const paddingSettings = {
      height: height ? +height : null,
      labelHalfHeight,
      offset: _constants.FLAT_INPUT_OFFSET,
      multiline: multiline ? multiline : null,
      dense: dense ? dense : null,
      topPosition,
      fontSize,
      label,
      scale: fontScale,
      isAndroid: _reactNative.Platform.OS === 'android',
      styles: _reactNative.StyleSheet.flatten(dense ? styles.inputFlatDense : styles.inputFlat)
    };
    const pad = (0, _helpers.calculatePadding)(paddingSettings);
    const paddingFlat = (0, _helpers.adjustPaddingFlat)(_objectSpread(_objectSpread({}, paddingSettings), {}, {
      pad
    }));
    const baseLabelTranslateY = -labelHalfHeight - (topPosition + MINIMIZED_LABEL_Y_OFFSET);
    const placeholderOpacity = hasActiveOutline ? (0, _helpers.interpolatePlaceholder)(parentState.labeled, hasActiveOutline) : parentState.labelLayout.measured ? 1 : 0;
    const minHeight = height || (dense ? label ? MIN_DENSE_HEIGHT_WL : MIN_DENSE_HEIGHT : MIN_HEIGHT);
    const flatHeight = inputHeight + (!height ? dense ? LABEL_PADDING_TOP_DENSE : LABEL_PADDING_TOP : 0);
    const iconTopPosition = (flatHeight - _constants.ADORNMENT_SIZE) / 2;
    const leftAffixTopPosition = leftLayout.height ? (0, _helpers.calculateFlatAffixTopPosition)(_objectSpread(_objectSpread({
      height: flatHeight
    }, paddingFlat), {}, {
      affixHeight: leftLayout.height
    })) : null;
    const rightAffixTopPosition = rightLayout.height ? (0, _helpers.calculateFlatAffixTopPosition)(_objectSpread(_objectSpread({
      height: flatHeight
    }, paddingFlat), {}, {
      affixHeight: rightLayout.height
    })) : null;
    const labelProps = {
      label,
      onLayoutAnimatedText,
      placeholderOpacity,
      error,
      placeholderStyle: styles.placeholder,
      baseLabelTranslateY,
      baseLabelTranslateX,
      font,
      fontSize,
      fontWeight,
      labelScale,
      wiggleOffsetX: _constants.LABEL_WIGGLE_X_OFFSET,
      topPosition,
      paddingOffset: {
        paddingLeft,
        paddingRight
      },
      hasActiveOutline,
      activeColor,
      placeholderColor,
      errorColor
    };
    const affixTopPosition = {
      [_enums.AdornmentSide.Left]: leftAffixTopPosition,
      [_enums.AdornmentSide.Right]: rightAffixTopPosition
    };
    const onAffixChange = {
      [_enums.AdornmentSide.Left]: onLeftAffixLayoutChange,
      [_enums.AdornmentSide.Right]: onRightAffixLayoutChange
    };
    let adornmentProps = {
      adornmentConfig,
      forceFocus,
      topPosition: {
        [_enums.AdornmentType.Affix]: affixTopPosition,
        [_enums.AdornmentType.Icon]: iconTopPosition
      },
      onAffixChange,
      isTextInputFocused: this.props.parentState.focused
    };

    if (adornmentConfig.length) {
      adornmentProps = _objectSpread(_objectSpread({}, adornmentProps), {}, {
        left,
        right,
        textStyle: _objectSpread(_objectSpread({}, font), {}, {
          fontSize,
          fontWeight
        }),
        visible: this.props.parentState.labeled
      });
    }

    return /*#__PURE__*/React.createElement(_reactNative.View, {
      style: [containerStyle, viewStyle]
    }, /*#__PURE__*/React.createElement(Underline, {
      parentState: parentState,
      underlineColorCustom: underlineColorCustom,
      error: error,
      colors: colors,
      activeColor: activeColor
    }), /*#__PURE__*/React.createElement(_reactNative.View, {
      style: {
        paddingTop: 0,
        paddingBottom: 0,
        minHeight
      }
    }, /*#__PURE__*/React.createElement(_InputLabel.default, {
      parentState: parentState,
      labelProps: labelProps
    }), render === null || render === void 0 ? void 0 : render(_objectSpread(_objectSpread({}, rest), {}, {
      ref: innerRef,
      onChangeText,
      // @ts-ignore
      placeholder: label ? parentState.placeholder : this.props.placeholder,
      placeholderTextColor: placeholderTextColor || placeholderColor,
      editable: !disabled && editable,
      selectionColor: typeof selectionColor === 'undefined' ? activeColor : selectionColor,
      onFocus,
      onBlur,
      underlineColorAndroid: 'transparent',
      multiline,
      style: [styles.input, {
        paddingLeft,
        paddingRight
      }, !multiline || multiline && height ? {
        height: flatHeight
      } : {}, paddingFlat, _objectSpread(_objectSpread({}, font), {}, {
        fontSize,
        fontWeight,
        color: inputTextColor,
        textAlignVertical: multiline ? 'top' : 'center'
      }), adornmentStyleAdjustmentForNativeInput]
    }))), /*#__PURE__*/React.createElement(_TextInputAdornment.default, adornmentProps));
  }

}

_defineProperty(TextInputFlat, "defaultProps", {
  disabled: false,
  error: false,
  multiline: false,
  editable: true,
  render: props => /*#__PURE__*/React.createElement(_reactNative.TextInput, props)
});

var _default = TextInputFlat;
exports.default = _default;

const Underline = ({
  parentState,
  error,
  colors,
  activeColor,
  underlineColorCustom
}) => {
  let backgroundColor = parentState.focused ? activeColor : underlineColorCustom;
  if (error) backgroundColor = colors.error;
  return /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    style: [styles.underline, {
      backgroundColor,
      // Underlines is thinner when input is not focused
      transform: [{
        scaleY: parentState.focused ? 1 : 0.5
      }]
    }]
  });
};

const styles = _reactNative.StyleSheet.create({
  placeholder: {
    position: 'absolute',
    left: 0
  },
  underline: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 2
  },
  input: {
    flexGrow: 1,
    margin: 0,
    textAlign: _reactNative.I18nManager.isRTL ? 'right' : 'left',
    zIndex: 1
  },
  inputFlat: {
    paddingTop: 24,
    paddingBottom: 4
  },
  inputFlatDense: {
    paddingTop: 22,
    paddingBottom: 2
  }
});
//# sourceMappingURL=TextInputFlat.js.map