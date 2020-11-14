function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';
let MaterialCommunityIcons;

try {
  // Optionally require vector-icons
  MaterialCommunityIcons = require('react-native-vector-icons/MaterialCommunityIcons').default;
} catch (e) {
  if ( // @ts-ignore
  global.__expo && // @ts-ignore
  global.__expo.Icon && // @ts-ignore
  global.__expo.Icon.MaterialCommunityIcons) {
    // Snack doesn't properly bundle vector icons from subpath
    // Use icons from the __expo global if available
    // @ts-ignore
    MaterialCommunityIcons = global.__expo.Icon.MaterialCommunityIcons;
  } else {
    let isErrorLogged = false; // Fallback component for icons
    // @ts-ignore

    MaterialCommunityIcons = (_ref) => {
      let {
        name,
        color,
        size
      } = _ref,
          rest = _objectWithoutProperties(_ref, ["name", "color", "size"]);

      /* eslint-disable no-console */
      if (!isErrorLogged) {
        if (!/(Cannot find module|Module not found|Cannot resolve module)/.test(e.message)) {
          console.error(e);
        }

        console.warn("Tried to use the icon '".concat(name, "' in a component from 'react-native-paper', but 'react-native-vector-icons' could not be loaded."), "To remove this warning, try installing 'react-native-vector-icons' or use another method to specify icon: https://callstack.github.io/react-native-paper/icons.html.");
        isErrorLogged = true;
      }

      return /*#__PURE__*/React.createElement(Text, _extends({}, rest, {
        style: [styles.icon, {
          color,
          fontSize: size
        }] // @ts-ignore
        ,
        pointerEvents: "none"
      }), "\u25A1");
    };
  }
}

export const accessibilityProps = Platform.OS === 'web' ? {
  role: 'img',
  focusable: false
} : {
  accessibilityElementsHidden: true,
  importantForAccessibility: 'no-hide-descendants'
};

const defaultIcon = ({
  name,
  color,
  size,
  direction,
  allowFontScaling
}) => /*#__PURE__*/React.createElement(MaterialCommunityIcons, _extends({
  allowFontScaling: allowFontScaling,
  name: name,
  color: color,
  size: size,
  style: [{
    transform: [{
      scaleX: direction === 'rtl' ? -1 : 1
    }]
  }, styles.icon],
  pointerEvents: "none"
}, accessibilityProps));

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'transparent'
  }
});
export default defaultIcon;
//# sourceMappingURL=MaterialCommunityIcon.js.map