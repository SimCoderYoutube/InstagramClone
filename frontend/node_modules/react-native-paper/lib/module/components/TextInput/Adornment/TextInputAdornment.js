function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import TextInputIcon, { IconAdornment } from './Icon';
import TextInputAffix, { AffixAdornment } from './Affix';
import { ADORNMENT_OFFSET } from '../constants';
import { Platform } from 'react-native';
import { AdornmentSide, AdornmentType } from './enums';
export function getAdornmentConfig({
  left,
  right
}) {
  let adornmentConfig = [];

  if (left || right) {
    [{
      side: AdornmentSide.Left,
      adornment: left
    }, {
      side: AdornmentSide.Right,
      adornment: right
    }].forEach(({
      side,
      adornment
    }) => {
      if (adornment && /*#__PURE__*/React.isValidElement(adornment)) {
        let type;

        if (adornment.type === TextInputAffix) {
          type = AdornmentType.Affix;
        } else if (adornment.type === TextInputIcon) {
          type = AdornmentType.Icon;
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
export function getAdornmentStyleAdjustmentForNativeInput({
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
      const isWeb = Platform.OS !== 'ios' && Platform.OS !== 'android';
      const isLeftSide = side === AdornmentSide.Left;
      const offset = (isLeftSide ? leftAffixWidth : rightAffixWidth) + ADORNMENT_OFFSET;
      const paddingKey = "padding".concat(captalize(side));
      if (isWeb) return {
        [paddingKey]: offset
      };
      const isAffix = type === AdornmentType.Affix;
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, adornmentConfig.map(({
      type,
      side
    }) => {
      let inputAdornmentComponent;

      if (side === AdornmentSide.Left) {
        inputAdornmentComponent = left;
      } else if (side === AdornmentSide.Right) {
        inputAdornmentComponent = right;
      }

      const commonProps = {
        key: side,
        side: side,
        testID: "".concat(side, "-").concat(type, "-adornment"),
        isTextInputFocused
      };

      if (type === AdornmentType.Icon) {
        return /*#__PURE__*/React.createElement(IconAdornment, _extends({}, commonProps, {
          icon: inputAdornmentComponent,
          topPosition: topPosition[AdornmentType.Icon],
          forceFocus: forceFocus
        }));
      } else if (type === AdornmentType.Affix) {
        return /*#__PURE__*/React.createElement(AffixAdornment, _extends({}, commonProps, {
          topPosition: topPosition[AdornmentType.Affix][side],
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

export default TextInputAdornment;
//# sourceMappingURL=TextInputAdornment.js.map