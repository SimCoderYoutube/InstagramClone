function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * TouchableItem provides an abstraction on top of TouchableNativeFeedback and
 * TouchableOpacity to handle platform differences.
 *
 * On Android, you can pass the props of TouchableNativeFeedback.
 * On other platforms, you can pass the props of TouchableOpacity.
 */
import * as React from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
const ANDROID_VERSION_LOLLIPOP = 21;
export default function TouchableItem(_ref) {
  let {
    borderless = false,
    pressColor = 'rgba(0, 0, 0, .32)',
    style,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["borderless", "pressColor", "style", "children"]);

  /*
   * TouchableNativeFeedback.Ripple causes a crash on old Android versions,
   * therefore only enable it on Android Lollipop and above.
   *
   * All touchables on Android should have the ripple effect according to
   * platform design guidelines.
   * We need to pass the background prop to specify a borderless ripple effect.
   */
  if (Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP) {
    return /*#__PURE__*/React.createElement(TouchableNativeFeedback, _extends({}, rest, {
      useForeground: TouchableNativeFeedback.canUseNativeForeground(),
      background: TouchableNativeFeedback.Ripple(pressColor, borderless)
    }), /*#__PURE__*/React.createElement(View, {
      style: style
    }, React.Children.only(children)));
  } else {
    return /*#__PURE__*/React.createElement(TouchableOpacity, _extends({
      style: style
    }, rest), children);
  }
}
//# sourceMappingURL=TouchableItem.js.map