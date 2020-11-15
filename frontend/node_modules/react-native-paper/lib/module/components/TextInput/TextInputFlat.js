function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { View, Animated, TextInput as NativeTextInput, StyleSheet, I18nManager, Platform } from 'react-native';
import color from 'color';
import InputLabel from './Label/InputLabel';
import TextInputAdornment from './Adornment/TextInputAdornment';
import { MAXIMIZED_LABEL_FONT_SIZE, MINIMIZED_LABEL_FONT_SIZE, LABEL_WIGGLE_X_OFFSET, ADORNMENT_SIZE, FLAT_INPUT_OFFSET } from './constants';
import { calculateLabelTopPosition, calculateInputHeight, calculatePadding, adjustPaddingFlat, interpolatePlaceholder, calculateFlatAffixTopPosition, calculateFlatInputHorizontalPadding } from './helpers';
import { getAdornmentConfig, getAdornmentStyleAdjustmentForNativeInput } from './Adornment/TextInputAdornment';
import { AdornmentSide, AdornmentType } from './Adornment/enums';
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

    const _ref = StyleSheet.flatten(style) || {},
          {
      fontSize: fontSizeStyle,
      fontWeight,
      height,
      paddingHorizontal
    } = _ref,
          viewStyle = _objectWithoutProperties(_ref, ["fontSize", "fontWeight", "height", "paddingHorizontal"]);

    const fontSize = fontSizeStyle || MAXIMIZED_LABEL_FONT_SIZE;
    const isPaddingHorizontalPassed = paddingHorizontal !== undefined && typeof paddingHorizontal === 'number';
    const adornmentConfig = getAdornmentConfig({
      left,
      right
    });
    let {
      paddingLeft,
      paddingRight
    } = calculateFlatInputHorizontalPadding({
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
    const rightAffixWidth = right ? rightLayout.width || ADORNMENT_SIZE : ADORNMENT_SIZE;
    const leftAffixWidth = left ? leftLayout.width || ADORNMENT_SIZE : ADORNMENT_SIZE;
    const adornmentStyleAdjustmentForNativeInput = getAdornmentStyleAdjustmentForNativeInput({
      adornmentConfig,
      rightAffixWidth,
      leftAffixWidth,
      inputOffset: FLAT_INPUT_OFFSET
    });
    let inputTextColor, activeColor, underlineColorCustom, placeholderColor, errorColor;

    if (disabled) {
      inputTextColor = activeColor = color(colors.text).alpha(0.54).rgb().string();
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
      backgroundColor: theme.dark ? color(colors.background).lighten(0.24).rgb().string() : color(colors.background).darken(0.06).rgb().string(),
      borderTopLeftRadius: theme.roundness,
      borderTopRightRadius: theme.roundness
    };
    const labelScale = MINIMIZED_LABEL_FONT_SIZE / fontSize;
    const fontScale = MAXIMIZED_LABEL_FONT_SIZE / fontSize;
    const labelWidth = parentState.labelLayout.width;
    const labelHeight = parentState.labelLayout.height;
    const labelHalfWidth = labelWidth / 2;
    const labelHalfHeight = labelHeight / 2;
    const baseLabelTranslateX = (I18nManager.isRTL ? 1 : -1) * (labelHalfWidth - labelScale * labelWidth / 2) + (1 - labelScale) * (I18nManager.isRTL ? -1 : 1) * paddingLeft;
    const minInputHeight = dense ? (label ? MIN_DENSE_HEIGHT_WL : MIN_DENSE_HEIGHT) - LABEL_PADDING_TOP_DENSE : MIN_HEIGHT - LABEL_PADDING_TOP;
    const inputHeight = calculateInputHeight(labelHeight, height, minInputHeight);
    const topPosition = calculateLabelTopPosition(labelHeight, inputHeight, multiline && height ? 0 : !height ? minInputHeight / 2 : 0);

    if (height && typeof height !== 'number') {
      // eslint-disable-next-line
      console.warn('Currently we support only numbers in height prop');
    }

    const paddingSettings = {
      height: height ? +height : null,
      labelHalfHeight,
      offset: FLAT_INPUT_OFFSET,
      multiline: multiline ? multiline : null,
      dense: dense ? dense : null,
      topPosition,
      fontSize,
      label,
      scale: fontScale,
      isAndroid: Platform.OS === 'android',
      styles: StyleSheet.flatten(dense ? styles.inputFlatDense : styles.inputFlat)
    };
    const pad = calculatePadding(paddingSettings);
    const paddingFlat = adjustPaddingFlat(_objectSpread(_objectSpread({}, paddingSettings), {}, {
      pad
    }));
    const baseLabelTranslateY = -labelHalfHeight - (topPosition + MINIMIZED_LABEL_Y_OFFSET);
    const placeholderOpacity = hasActiveOutline ? interpolatePlaceholder(parentState.labeled, hasActiveOutline) : parentState.labelLayout.measured ? 1 : 0;
    const minHeight = height || (dense ? label ? MIN_DENSE_HEIGHT_WL : MIN_DENSE_HEIGHT : MIN_HEIGHT);
    const flatHeight = inputHeight + (!height ? dense ? LABEL_PADDING_TOP_DENSE : LABEL_PADDING_TOP : 0);
    const iconTopPosition = (flatHeight - ADORNMENT_SIZE) / 2;
    const leftAffixTopPosition = leftLayout.height ? calculateFlatAffixTopPosition(_objectSpread(_objectSpread({
      height: flatHeight
    }, paddingFlat), {}, {
      affixHeight: leftLayout.height
    })) : null;
    const rightAffixTopPosition = rightLayout.height ? calculateFlatAffixTopPosition(_objectSpread(_objectSpread({
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
      wiggleOffsetX: LABEL_WIGGLE_X_OFFSET,
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
      [AdornmentSide.Left]: leftAffixTopPosition,
      [AdornmentSide.Right]: rightAffixTopPosition
    };
    const onAffixChange = {
      [AdornmentSide.Left]: onLeftAffixLayoutChange,
      [AdornmentSide.Right]: onRightAffixLayoutChange
    };
    let adornmentProps = {
      adornmentConfig,
      forceFocus,
      topPosition: {
        [AdornmentType.Affix]: affixTopPosition,
        [AdornmentType.Icon]: iconTopPosition
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

    return /*#__PURE__*/React.createElement(View, {
      style: [containerStyle, viewStyle]
    }, /*#__PURE__*/React.createElement(Underline, {
      parentState: parentState,
      underlineColorCustom: underlineColorCustom,
      error: error,
      colors: colors,
      activeColor: activeColor
    }), /*#__PURE__*/React.createElement(View, {
      style: {
        paddingTop: 0,
        paddingBottom: 0,
        minHeight
      }
    }, /*#__PURE__*/React.createElement(InputLabel, {
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
    }))), /*#__PURE__*/React.createElement(TextInputAdornment, adornmentProps));
  }

}

_defineProperty(TextInputFlat, "defaultProps", {
  disabled: false,
  error: false,
  multiline: false,
  editable: true,
  render: props => /*#__PURE__*/React.createElement(NativeTextInput, props)
});

export default TextInputFlat;

const Underline = ({
  parentState,
  error,
  colors,
  activeColor,
  underlineColorCustom
}) => {
  let backgroundColor = parentState.focused ? activeColor : underlineColorCustom;
  if (error) backgroundColor = colors.error;
  return /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.underline, {
      backgroundColor,
      // Underlines is thinner when input is not focused
      transform: [{
        scaleY: parentState.focused ? 1 : 0.5
      }]
    }]
  });
};

const styles = StyleSheet.create({
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
    textAlign: I18nManager.isRTL ? 'right' : 'left',
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