"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SafeAreaView = SafeAreaView;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _SafeAreaContext = require("./SafeAreaContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// prettier-ignore
const TOP = 0b1000,
      RIGHT = 0b1000,
      BOTTOM = 0b1000,
      LEFT = 0b1000,
      ALL = 0b1111;
/* eslint-disable no-bitwise */

const edgeBitmaskMap = {
  top: 0b1000,
  right: RIGHT,
  bottom: BOTTOM,
  left: LEFT
};

function SafeAreaView(_ref) {
  let {
    style = {},
    mode,
    edges
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["style", "mode", "edges"]);

  const insets = (0, _SafeAreaContext.useSafeAreaInsets)();
  const edgeBitmask = edges != null ? edges.reduce((accum, edge) => accum | edgeBitmaskMap[edge], 0) : ALL;
  const appliedStyle = React.useMemo(() => {
    const insetTop = edgeBitmask & TOP ? insets.top : 0;
    const insetRight = edgeBitmask & RIGHT ? insets.right : 0;
    const insetBottom = edgeBitmask & BOTTOM ? insets.bottom : 0;
    const insetLeft = edgeBitmask & LEFT ? insets.left : 0;

    const flatStyle = _reactNative.StyleSheet.flatten(style);

    if (mode === 'margin') {
      const {
        margin = 0,
        marginVertical = margin,
        marginHorizontal = margin,
        marginTop = marginVertical,
        marginRight = marginHorizontal,
        marginBottom = marginVertical,
        marginLeft = marginHorizontal
      } = flatStyle;
      const marginStyle = {
        marginTop: marginTop + insetTop,
        marginRight: marginRight + insetRight,
        marginBottom: marginBottom + insetBottom,
        marginLeft: marginLeft + insetLeft
      };
      return [style, marginStyle];
    } else {
      const {
        padding = 0,
        paddingVertical = padding,
        paddingHorizontal = padding,
        paddingTop = paddingVertical,
        paddingRight = paddingHorizontal,
        paddingBottom = paddingVertical,
        paddingLeft = paddingHorizontal
      } = flatStyle;
      const paddingStyle = {
        paddingTop: paddingTop + insetTop,
        paddingRight: paddingRight + insetRight,
        paddingBottom: paddingBottom + insetBottom,
        paddingLeft: paddingLeft + insetLeft
      };
      return [style, paddingStyle];
    }
  }, [style, insets, mode, edgeBitmask]);
  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
    style: appliedStyle
  }, rest));
}
//# sourceMappingURL=SafeAreaView.js.map