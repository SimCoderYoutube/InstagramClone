"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconAdornment = exports.ICON_SIZE = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _IconButton = _interopRequireDefault(require("../../IconButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const ICON_SIZE = 24;
exports.ICON_SIZE = ICON_SIZE;
const ICON_OFFSET = 12;

const StyleContext = /*#__PURE__*/_react.default.createContext({
  style: {},
  isTextInputFocused: false,
  forceFocus: () => {}
});

const IconAdornment = ({
  icon,
  topPosition,
  side,
  isTextInputFocused,
  forceFocus
}) => {
  const style = {
    top: topPosition,
    [side]: ICON_OFFSET
  };
  const contextState = {
    style,
    isTextInputFocused,
    forceFocus
  };
  return /*#__PURE__*/_react.default.createElement(StyleContext.Provider, {
    value: contextState
  }, icon);
};

exports.IconAdornment = IconAdornment;

const TextInputIcon = (_ref) => {
  let {
    name,
    onPress,
    forceTextInputFocus
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["name", "onPress", "forceTextInputFocus"]);

  const {
    style,
    isTextInputFocused,
    forceFocus
  } = _react.default.useContext(StyleContext);

  const onPressWithFocusControl = _react.default.useCallback(() => {
    if (forceTextInputFocus && !isTextInputFocused) {
      forceFocus();
    }

    onPress === null || onPress === void 0 ? void 0 : onPress();
  }, [forceTextInputFocus, forceFocus, isTextInputFocused, onPress]);

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, style]
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, _extends({
    icon: name,
    style: styles.iconButton,
    size: ICON_SIZE,
    onPress: onPressWithFocusControl
  }, rest)));
};

TextInputIcon.displayName = 'TextInput.Icon';
TextInputIcon.defaultProps = {
  forceTextInputFocus: true
};

const styles = _reactNative.StyleSheet.create({
  container: {
    position: 'absolute',
    width: ICON_SIZE,
    height: ICON_SIZE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconButton: {
    margin: 0
  }
});

var _default = TextInputIcon;
exports.default = _default;
//# sourceMappingURL=Icon.js.map