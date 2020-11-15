function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Animated, StyleSheet } from 'react-native';
import color from 'color';
import { black, white } from '../styles/colors';
import { withTheme } from '../core/theming';
const defaultSize = 20;

/**
 * Badges are small status descriptors for UI elements.
 * A badge consists of a small circle, typically containing a number or other short set of characters, that appears in proximity to another object.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="small" src="screenshots/badge-1.png" />
 *     <figcaption>Badge with content</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="small" src="screenshots/badge-2.png" />
 *     <figcaption>Badge without content</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Badge } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Badge>3</Badge>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Badge = (_ref) => {
  let {
    children,
    size = defaultSize,
    style,
    theme,
    visible = true
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "size", "style", "theme", "visible"]);

  const {
    current: opacity
  } = React.useRef(new Animated.Value(visible ? 1 : 0));
  const {
    animation: {
      scale
    }
  } = theme;
  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: visible ? 1 : 0,
      duration: 150 * scale,
      useNativeDriver: true
    }).start();
  }, [visible, opacity, scale]);

  const _ref2 = StyleSheet.flatten(style) || {},
        {
    backgroundColor = theme.colors.notification
  } = _ref2,
        restStyle = _objectWithoutProperties(_ref2, ["backgroundColor"]);

  const textColor = color(backgroundColor).isLight() ? black : white;
  const borderRadius = size / 2;
  return (
    /*#__PURE__*/
    // @ts-ignore
    React.createElement(Animated.Text, _extends({
      numberOfLines: 1,
      style: [_objectSpread(_objectSpread({
        opacity,
        backgroundColor,
        color: textColor,
        fontSize: size * 0.5
      }, theme.fonts.regular), {}, {
        lineHeight: size,
        height: size,
        minWidth: size,
        borderRadius
      }), styles.container, restStyle]
    }, rest), children)
  );
};

export default withTheme(Badge);
const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 4,
    overflow: 'hidden'
  }
});
//# sourceMappingURL=Badge.js.map