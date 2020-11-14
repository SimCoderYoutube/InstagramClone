"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateFlatAffixTopPosition = calculateFlatAffixTopPosition;
exports.calculateOutlinedIconAndAffixTopPosition = calculateOutlinedIconAndAffixTopPosition;
exports.calculateFlatInputHorizontalPadding = exports.interpolatePlaceholder = exports.adjustPaddingFlat = exports.adjustPaddingOut = exports.calculatePadding = exports.calculateInputHeight = exports.calculateLabelTopPosition = void 0;

var _constants = require("./constants");

var _enums = require("./Adornment/enums");

const calculateLabelTopPosition = (labelHeight, height = 0, optionalPadding = 0) => {
  const customHeight = height > 0 ? height : 0;
  return Math.floor((customHeight - labelHeight) / 2 + optionalPadding);
};

exports.calculateLabelTopPosition = calculateLabelTopPosition;

const calculateInputHeight = (labelHeight, height = 0, minHeight) => {
  const finalHeight = height > 0 ? height : labelHeight;
  if (height > 0) return height;
  return finalHeight < minHeight ? minHeight : finalHeight;
};

exports.calculateInputHeight = calculateInputHeight;

const calculatePadding = props => {
  const {
    height,
    multiline = false
  } = props;
  let result = 0;

  if (multiline) {
    if (height && multiline) {
      result = calculateTextAreaPadding(props);
    } else {
      result = calculateInputPadding(props);
    }
  }

  return Math.max(0, result);
};

exports.calculatePadding = calculatePadding;

const calculateTextAreaPadding = props => {
  const {
    dense
  } = props;
  return dense ? 10 : 20;
};

const calculateInputPadding = ({
  topPosition,
  fontSize,
  multiline,
  scale,
  dense,
  offset,
  isAndroid
}) => {
  const refFontSize = scale * fontSize;
  let result = Math.floor(topPosition / 2);
  result = result + Math.floor((refFontSize - fontSize) / 2) - (scale < 1 ? offset / 2 : 0);
  if (multiline && isAndroid) result = Math.min(dense ? offset / 2 : offset, result);
  return result;
};

const adjustPaddingOut = ({
  pad,
  multiline,
  label,
  scale,
  height,
  fontSize,
  dense,
  offset,
  isAndroid
}) => {
  const refFontSize = scale * fontSize;
  let result = pad;

  if (height) {
    return {
      paddingTop: Math.max(0, (height - fontSize) / 2),
      paddingBottom: Math.max(0, (height - fontSize) / 2)
    };
  }

  if (!isAndroid && multiline) {
    if (dense) {
      if (label) {
        result += scale < 1 ? Math.min(offset, refFontSize / 2 * scale) : 0;
      } else {
        result += 0;
      }
    }

    if (!dense) {
      if (label) {
        result += scale < 1 ? Math.min(offset, refFontSize * scale) : Math.min(offset / 2, refFontSize * scale);
      } else {
        result += scale < 1 ? Math.min(offset / 2, refFontSize * scale) : 0;
      }
    }

    result = Math.floor(result);
  }

  return {
    paddingTop: result,
    paddingBottom: result
  };
};

exports.adjustPaddingOut = adjustPaddingOut;

const adjustPaddingFlat = ({
  pad,
  scale,
  multiline,
  label,
  height,
  offset,
  dense,
  fontSize,
  isAndroid,
  styles
}) => {
  let result = pad;
  let topResult = result;
  let bottomResult = result;
  const {
    paddingTop,
    paddingBottom
  } = styles;
  const refFontSize = scale * fontSize;

  if (!multiline) {
    // do not modify padding if input is not multiline
    if (label) {
      // return const style for flat input with label
      return {
        paddingTop,
        paddingBottom
      };
    } // return pad for flat input without label


    return {
      paddingTop: result,
      paddingBottom: result
    };
  }

  if (label) {
    // add paddings passed from styles
    topResult = paddingTop;
    bottomResult = paddingBottom; // adjust top padding for iOS

    if (!isAndroid) {
      if (dense) {
        topResult += scale < 1 ? Math.min(result, refFontSize * scale) - result / 2 : Math.min(result, refFontSize * scale) - result / 2;
      }

      if (!dense) {
        topResult += scale < 1 ? Math.min(offset / 2, refFontSize * scale) : Math.min(result, refFontSize * scale) - offset / 2;
      }
    }

    topResult = Math.floor(topResult);
  } else {
    if (height) {
      // center text when height is passed
      return {
        paddingTop: Math.max(0, (height - fontSize) / 2),
        paddingBottom: Math.max(0, (height - fontSize) / 2)
      };
    } // adjust paddings for iOS if no label


    if (!isAndroid) {
      if (dense) {
        result += scale < 1 ? Math.min(offset / 2, fontSize / 2 * scale) : Math.min(offset / 2, scale);
      }

      if (!dense) {
        result += scale < 1 ? Math.min(offset, fontSize * scale) : Math.min(fontSize, offset / 2 * scale);
      }

      result = Math.floor(result);
      topResult = result;
      bottomResult = result;
    }
  }

  return {
    paddingTop: Math.max(0, topResult),
    paddingBottom: Math.max(0, bottomResult)
  };
};

exports.adjustPaddingFlat = adjustPaddingFlat;

const interpolatePlaceholder = (labeled, hasActiveOutline) => labeled.interpolate({
  inputRange: [0, 1],
  outputRange: [hasActiveOutline ? 0 : 1, 1]
});

exports.interpolatePlaceholder = interpolatePlaceholder;

function calculateFlatAffixTopPosition({
  height,
  paddingTop,
  paddingBottom,
  affixHeight
}) {
  const inputHeightWithoutPadding = height - paddingTop - paddingBottom;
  const halfOfTheInputHeightDecreasedByAffixHeight = (inputHeightWithoutPadding - affixHeight) / 2;
  return paddingTop + halfOfTheInputHeightDecreasedByAffixHeight;
}

function calculateOutlinedIconAndAffixTopPosition({
  height,
  affixHeight,
  labelYOffset
}) {
  return (height - affixHeight + labelYOffset) / 2;
}

const calculateFlatInputHorizontalPadding = ({
  adornmentConfig
}) => {
  let paddingLeft = _constants.LABEL_PADDING_HORIZONTAL;
  let paddingRight = _constants.LABEL_PADDING_HORIZONTAL;
  adornmentConfig.forEach(({
    type,
    side
  }) => {
    if (type === _enums.AdornmentType.Icon && side === _enums.AdornmentSide.Left) {
      paddingLeft = _constants.ADORNMENT_SIZE + _constants.ADORNMENT_OFFSET + _constants.FLAT_INPUT_OFFSET;
    } else if (side === _enums.AdornmentSide.Right) {
      if (type === _enums.AdornmentType.Affix) {
        paddingRight = _constants.ADORNMENT_SIZE + _constants.ADORNMENT_OFFSET + _constants.FLAT_INPUT_OFFSET;
      } else if (type === _enums.AdornmentType.Icon) {
        paddingRight = _constants.ADORNMENT_SIZE + _constants.ADORNMENT_OFFSET + _constants.FLAT_INPUT_OFFSET;
      }
    }
  });
  return {
    paddingLeft,
    paddingRight
  };
};

exports.calculateFlatInputHorizontalPadding = calculateFlatInputHorizontalPadding;
//# sourceMappingURL=helpers.js.map