function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../../IconButton';
export const ICON_SIZE = 24;
const ICON_OFFSET = 12;
const StyleContext = /*#__PURE__*/React.createContext({
  style: {},
  isTextInputFocused: false,
  forceFocus: () => {}
});
export const IconAdornment = ({
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
  return /*#__PURE__*/React.createElement(StyleContext.Provider, {
    value: contextState
  }, icon);
};

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
  } = React.useContext(StyleContext);
  const onPressWithFocusControl = React.useCallback(() => {
    if (forceTextInputFocus && !isTextInputFocused) {
      forceFocus();
    }

    onPress === null || onPress === void 0 ? void 0 : onPress();
  }, [forceTextInputFocus, forceFocus, isTextInputFocused, onPress]);
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, style]
  }, /*#__PURE__*/React.createElement(IconButton, _extends({
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
const styles = StyleSheet.create({
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
export default TextInputIcon;
//# sourceMappingURL=Icon.js.map