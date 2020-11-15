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
import Divider from '../Divider';
import { withTheme } from '../../core/theming';

/**
 * A component to group content inside a navigation drawer.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/drawer-section.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Drawer } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [active, setActive] = React.useState('');
 *
 *
 *   return (
 *     <Drawer.Section title="Some title">
 *       <Drawer.Item
 *         label="First Item"
 *         active={active === 'first'}
 *         onPress={() => setActive('first')}
 *       />
 *       <Drawer.Item
 *         label="Second Item"
 *         active={active === 'second'}
 *         onPress={() => setActive('second')}
 *       />
 *     </Drawer.Section>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const DrawerSection = (_ref) => {
  let {
    children,
    title,
    theme,
    style
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "title", "theme", "style"]);

  const {
    colors,
    fonts
  } = theme;
  const titleColor = color(colors.text).alpha(0.54).rgb().string();
  const font = fonts.medium;
  return /*#__PURE__*/React.createElement(View, _extends({
    style: [styles.container, style]
  }, rest), title && /*#__PURE__*/React.createElement(View, {
    style: styles.titleContainer
  }, /*#__PURE__*/React.createElement(Text, {
    numberOfLines: 1,
    style: _objectSpread(_objectSpread({
      color: titleColor
    }, font), {}, {
      marginLeft: 16
    })
  }, title)), children, /*#__PURE__*/React.createElement(Divider, {
    style: styles.divider
  }));
};

DrawerSection.displayName = 'Drawer.Section';
const styles = StyleSheet.create({
  container: {
    marginBottom: 4
  },
  titleContainer: {
    height: 40,
    justifyContent: 'center'
  },
  divider: {
    marginTop: 4
  }
});
export default withTheme(DrawerSection);
//# sourceMappingURL=DrawerSection.js.map