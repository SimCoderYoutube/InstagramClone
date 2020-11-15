function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import color from 'color';
import { StyleSheet, View } from 'react-native';
import { withTheme } from '../core/theming';
import { black, white } from '../styles/colors';

/**
 * A divider is a thin, lightweight separator that groups content in lists and page layouts.
 *
 * <div class="screenshots">
 *  <figure>
 *    <img class="medium" src="screenshots/divider.png" />
 *  </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Divider, Text } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <View>
 *     <Text>Apple</Text>
 *     <Divider />
 *     <Text>Orange</Text>
 *     <Divider />
 *   </View>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Divider = (_ref) => {
  let {
    inset,
    style,
    theme
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["inset", "style", "theme"]);

  const {
    dark: isDarkTheme
  } = theme;
  return /*#__PURE__*/React.createElement(View, _extends({}, rest, {
    style: [isDarkTheme ? styles.dark : styles.light, inset && styles.inset, style]
  }));
};

const styles = StyleSheet.create({
  light: {
    backgroundColor: color(black).alpha(0.12).rgb().string(),
    height: StyleSheet.hairlineWidth
  },
  dark: {
    backgroundColor: color(white).alpha(0.12).rgb().string(),
    height: StyleSheet.hairlineWidth
  },
  inset: {
    marginLeft: 72
  }
});
export default withTheme(Divider);
//# sourceMappingURL=Divider.js.map