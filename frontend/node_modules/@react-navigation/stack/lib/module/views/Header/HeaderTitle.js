function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Animated, StyleSheet, Platform } from 'react-native';
import { useTheme } from '@react-navigation/native';
export default function HeaderTitle(_ref) {
  let {
    tintColor,
    style
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["tintColor", "style"]);

  const {
    colors
  } = useTheme();
  return /*#__PURE__*/React.createElement(Animated.Text, _extends({
    accessibilityRole: "header",
    numberOfLines: 1
  }, rest, {
    style: [styles.title, {
      color: tintColor === undefined ? colors.text : tintColor
    }, style]
  }));
}
const styles = StyleSheet.create({
  title: Platform.select({
    ios: {
      fontSize: 17,
      fontWeight: '600'
    },
    android: {
      fontSize: 20,
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal'
    },
    default: {
      fontSize: 18,
      fontWeight: '500'
    }
  })
});
//# sourceMappingURL=HeaderTitle.js.map