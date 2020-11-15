"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAdornmentConfig = getAdornmentConfig;
exports.getAdornmentStyleAdjustmentForNativeInput = getAdornmentStyleAdjustmentForNativeInput;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireWildcard(require("./Icon"));

var _Affix = _interopRequireWildcard(require("./Affix"));

var _constants = require("../constants");

var _reactNative = require("react-native");

var _enums = require("./enums");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getAdornmentConfig({
  left,
  right
}) {
  let adornmentConfig = [];

  if (left || right) {
    [{
      side: _enums.AdornmentSide.Left,
      adornment: left
    }, {
      side: _enums.AdornmentSide.Right,
      adornment: right
    }].forEach(({
      side,
      adornment
    }) => {
      if (adornment && /*#__PURE__*/_react.default.isValidElement(adornment)) {
        let type;

        if (adornment.type === _Affix.default) {
          type = _enums.AdornmentType.Affix;
        } else if (adornment.type === _Icon.default) {
          type = _enums.AdornmentType.Icon;
        }

        adornmentConfig.push({
          side,
          type
        });
      }
    });
  }

  return adornmentConfig;
}

function getAdornmentStyleAdjustmentForNativeInput({
  adornmentConfig,
  leftAffixWidth,
  rightAffixWidth,
  inputOffset = 0
}) {
  if (adornmentConfig.length) {
    const adornmentStyleAdjustmentForNativeInput = adornmentConfig.map(({
      type,
      side
    }) => {
      const isWeb = _reactNative.Platform.OS !== 'ios' && _reactNative.Platform.OS !== 'android';
      const isLeftSide = side === _enums.AdornmentSide.Left;
      const offset = (isLeftSide ? leftAffixWidth : rightAffixWidth) + _constants.ADORNMENT_OFFSET;
      const paddingKey = "padding".concat(captalize(side));
      if (isWeb) return {
        [paddingKey]: offset
      };
      const isAffix = type === _enums.AdornmentType.Affix;
      const marginKey = "margin".concat(captalize(side));
      return {
        [marginKey]: isAffix ? 0 : offset,
        [paddingKey]: isAffix ? offset : inputOffset
      };
    });
    const allStyleAdjustmentsMerged = adornmentStyleAdjustmentForNativeInput.reduce((mergedStyles, currentStyle) => {
      return _objectSpread(_objectSpread({}, mergedStyles), currentStyle);
    }, {});
    return allStyleAdjustmentsMerged;
  } else {
    return [{}];
  }
}

const captalize = text => text.charAt(0).toUpperCase() + text.slice(1);

const TextInputAdornment = ({
  adornmentConfig,
  left,
  right,
  onAffixChange,
  textStyle,
  visible,
  topPosition,
  isTextInputFocused,
  forceFocus
}) => {
  if (adornmentConfig.length) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, adornmentConfig.map(({
      type,
      side
    }) => {
      let inputAdornmentComponent;

      if (side === _enums.AdornmentSide.Left) {
        inputAdornmentComponent = left;
      } else if (side === _enums.AdornmentSide.Right) {
        inputAdornmentComponent = right;
      }

      const commonProps = {
        key: side,
        side: side,
        testID: "".concat(side, "-").concat(type, "-adornment"),
        isTextInputFocused
      };

      if (type === _enums.AdornmentType.Icon) {
        return /*#__PURE__*/_react.default.createElement(_Icon.IconAdornment, _extends({}, commonProps, {
          icon: inputAdornmentComponent,
          topPosition: topPosition[_enums.AdornmentType.Icon],
          forceFocus: forceFocus
        }));
      } else if (type === _enums.AdornmentType.Affix) {
        return /*#__PURE__*/_react.default.createElement(_Affix.AffixAdornment, _extends({}, commonProps, {
          topPosition: topPosition[_enums.AdornmentType.Affix][side],
          affix: inputAdornmentComponent,
          textStyle: textStyle,
          onLayout: onAffixChange[side],
          visible: visible
        }));
      } else {
        return null;
      }
    }));
  } else {
    return null;
  }
};

var _default = TextInputAdornment;
exports.default = _default;
//# sourceMappingURL=TextInputAdornment.js.map