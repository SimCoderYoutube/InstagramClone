"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Badge;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _native = require("@react-navigation/native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Badge(_ref) {
  let {
    visible = true,
    size = 18,
    children,
    style
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["visible", "size", "children", "style"]);

  const [opacity] = React.useState(() => new _reactNative.Animated.Value(visible ? 1 : 0));
  const [rendered, setRendered] = React.useState(visible ? true : false);
  const theme = (0, _native.useTheme)();
  React.useEffect(() => {
    if (!rendered) {
      return;
    }

    _reactNative.Animated.timing(opacity, {
      toValue: visible ? 1 : 0,
      duration: 150,
      useNativeDriver: true
    }).start(({
      finished
    }) => {
      if (finished && !visible) {
        setRendered(false);
      }
    });
  }, [opacity, rendered, visible]);

  if (visible && !rendered) {
    setRendered(true);
  }

  if (!visible && !rendered) {
    return null;
  } // @ts-expect-error: backgroundColor definitely exists


  const _ref2 = _reactNative.StyleSheet.flatten(style) || {},
        {
    backgroundColor = theme.colors.notification
  } = _ref2,
        restStyle = _objectWithoutProperties(_ref2, ["backgroundColor"]);

  const textColor = (0, _color.default)(backgroundColor).isLight() ? 'black' : 'white';
  const borderRadius = size / 2;
  const fontSize = Math.floor(size * 3 / 4);
  return /*#__PURE__*/React.createElement(_reactNative.Animated.Text, _extends({
    numberOfLines: 1,
    style: [{
      opacity,
      transform: [{
        scale: opacity.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1]
        })
      }],
      backgroundColor,
      color: textColor,
      fontSize,
      lineHeight: size - 1,
      height: size,
      minWidth: size,
      borderRadius
    }, styles.container, restStyle]
  }, rest), children);
}

const styles = _reactNative.StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    textAlign: 'center',
    paddingHorizontal: 4,
    overflow: 'hidden'
  }
});
//# sourceMappingURL=Badge.js.map