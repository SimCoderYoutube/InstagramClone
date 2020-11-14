function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { Animated, Platform } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
const AnimatedBaseButton = Animated.createAnimatedComponent(BaseButton);
const useNativeDriver = Platform.OS !== 'web';
export default class TouchableItem extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "opacity", new Animated.Value(1));

    _defineProperty(this, "handleActiveStateChange", active => {
      var _this$props$onActiveS, _this$props;

      Animated.spring(this.opacity, {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
        toValue: active ? this.props.activeOpacity : 1,
        useNativeDriver
      }).start();
      (_this$props$onActiveS = (_this$props = this.props).onActiveStateChange) === null || _this$props$onActiveS === void 0 ? void 0 : _this$props$onActiveS.call(_this$props, active);
    });
  }

  render() {
    const _this$props2 = this.props,
          {
      children,
      style,
      enabled
    } = _this$props2,
          rest = _objectWithoutProperties(_this$props2, ["children", "style", "enabled"]);

    return /*#__PURE__*/React.createElement(AnimatedBaseButton, _extends({}, rest, {
      onActiveStateChange: this.handleActiveStateChange,
      style: [style, enabled && {
        opacity: this.opacity
      }]
    }), children);
  }

}

_defineProperty(TouchableItem, "defaultProps", {
  activeOpacity: 0.3,
  borderless: true,
  enabled: true
});
//# sourceMappingURL=TouchableItem.ios.js.map