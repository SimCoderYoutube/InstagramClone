"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _color = _interopRequireDefault(require("color"));

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Text = _interopRequireDefault(require("../Typography/Text"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));

var _theming = require("../../core/theming");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * A component used to show an action item with an icon and a label in a navigation drawer.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/drawer-item.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Drawer } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *    <Drawer.Item
 *      style={{ backgroundColor: '#64ffda' }}
 *      icon="star"
 *      label="First Item"
 *    />
 * );
 *
 * export default MyComponent;
 * ```
 */
const DrawerItem = (_ref) => {
  let {
    icon,
    label,
    active,
    theme,
    style,
    onPress,
    accessibilityLabel
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["icon", "label", "active", "theme", "style", "onPress", "accessibilityLabel"]);

  const {
    colors,
    roundness
  } = theme;
  const backgroundColor = active ? (0, _color.default)(colors.primary).alpha(0.12).rgb().string() : 'transparent';
  const contentColor = active ? colors.primary : (0, _color.default)(colors.text).alpha(0.68).rgb().string();
  const font = theme.fonts.medium;
  const labelMargin = icon ? 32 : 0;
  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({}, rest, {
    style: [styles.container, {
      backgroundColor,
      borderRadius: roundness
    }, style]
  }), /*#__PURE__*/React.createElement(_TouchableRipple.default, {
    borderless: true,
    delayPressIn: 0,
    onPress: onPress,
    style: {
      borderRadius: roundness
    },
    accessibilityTraits: active ? ['button', 'selected'] : 'button',
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    accessibilityState: {
      selected: active
    },
    accessibilityLabel: accessibilityLabel
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.wrapper
  }, icon ? /*#__PURE__*/React.createElement(_Icon.default, {
    source: icon,
    size: 24,
    color: contentColor
  }) : null, /*#__PURE__*/React.createElement(_Text.default, {
    numberOfLines: 1,
    style: [styles.label, _objectSpread(_objectSpread({
      color: contentColor
    }, font), {}, {
      marginLeft: labelMargin
    })]
  }, label))));
};

DrawerItem.displayName = 'Drawer.Item';

const styles = _reactNative.StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 4
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8
  },
  label: {
    marginRight: 32
  }
});

var _default = (0, _theming.withTheme)(DrawerItem);

exports.default = _default;
//# sourceMappingURL=DrawerItem.js.map