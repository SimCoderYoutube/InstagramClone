function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import color from 'color';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Typography/Text';
import Icon from '../Icon';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import { withTheme } from '../../core/theming';

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
  const backgroundColor = active ? color(colors.primary).alpha(0.12).rgb().string() : 'transparent';
  const contentColor = active ? colors.primary : color(colors.text).alpha(0.68).rgb().string();
  const font = theme.fonts.medium;
  const labelMargin = icon ? 32 : 0;
  return /*#__PURE__*/React.createElement(View, _extends({}, rest, {
    style: [styles.container, {
      backgroundColor,
      borderRadius: roundness
    }, style]
  }), /*#__PURE__*/React.createElement(TouchableRipple, {
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
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.wrapper
  }, icon ? /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    size: 24,
    color: contentColor
  }) : null, /*#__PURE__*/React.createElement(Text, {
    numberOfLines: 1,
    style: [styles.label, _objectSpread(_objectSpread({
      color: contentColor
    }, font), {}, {
      marginLeft: labelMargin
    })]
  }, label))));
};

DrawerItem.displayName = 'Drawer.Item';
const styles = StyleSheet.create({
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
export default withTheme(DrawerItem);
//# sourceMappingURL=DrawerItem.js.map