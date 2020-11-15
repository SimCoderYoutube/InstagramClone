function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Animated, View } from 'react-native';
let ENABLE_SCREENS = true;
export function enableScreens(shouldEnableScreens = true) {
  ENABLE_SCREENS = shouldEnableScreens;
}
export function screensEnabled() {
  return ENABLE_SCREENS;
}
export class NativeScreen extends React.Component {
  render() {
    const _this$props = this.props,
          {
      active,
      style
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["active", "style"]);

    return /*#__PURE__*/React.createElement(View, _extends({
      style: [style, ENABLE_SCREENS && !active ? {
        display: 'none'
      } : null]
    }, rest));
  }

}
export const Screen = Animated.createAnimatedComponent(NativeScreen);
export const ScreenContainer = View;
export const NativeScreenContainer = View;
//# sourceMappingURL=index.js.map