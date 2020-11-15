"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.accessibilityProps = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

      return /*#__PURE__*/React.createElement(_reactNative.Text, _extends({}, rest, {
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

const accessibilityProps = _reactNative.Platform.OS === 'web' ? {
  role: 'img',
  focusable: false
} : {
  accessibilityElementsHidden: true,
  importantForAccessibility: 'no-hide-descendants'
};
exports.accessibilityProps = accessibilityProps;

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

const styles = _reactNative.StyleSheet.create({
  icon: {
    backgroundColor: 'transparent'
  }
});

var _default = defaultIcon;
exports.default = _default;
//# sourceMappingURL=MaterialCommunityIcon.js.map