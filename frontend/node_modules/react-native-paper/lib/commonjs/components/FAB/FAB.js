"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _color = _interopRequireDefault(require("color"));

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _ActivityIndicator = _interopRequireDefault(require("../ActivityIndicator"));

var _FABGroup2 = _interopRequireDefault(require("./FABGroup"));

var _Surface = _interopRequireDefault(require("../Surface"));

var _CrossFadeIcon = _interopRequireDefault(require("../CrossFadeIcon"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Text = _interopRequireDefault(require("../Typography/Text"));

var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));

var _colors = require("../../styles/colors");

var _theming = require("../../core/theming");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A floating action button represents the primary action in an application.
 *
 * <div class="screenshots">
 *   <img src="screenshots/fab-1.png" />
 *   <img src="screenshots/fab-2.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { FAB } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <FAB
 *     style={styles.fab}
 *     small
 *     icon="plus"
 *     onPress={() => console.log('Pressed')}
 *   />
 * );
 *
 * const styles = StyleSheet.create({
 *   fab: {
 *     position: 'absolute',
 *     margin: 16,
 *     right: 0,
 *     bottom: 0,
 *   },
 * })
 *
 * export default MyComponent;
 * ```
 */
class FAB extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      visibility: new _reactNative.Animated.Value(this.props.visible ? 1 : 0)
    });
  }

  componentDidUpdate(prevProps) {
    const {
      scale
    } = this.props.theme.animation;

    if (this.props.visible === prevProps.visible) {
      return;
    }

    if (this.props.visible) {
      _reactNative.Animated.timing(this.state.visibility, {
        toValue: 1,
        duration: 200 * scale,
        useNativeDriver: true
      }).start();
    } else {
      _reactNative.Animated.timing(this.state.visibility, {
        toValue: 0,
        duration: 150 * scale,
        useNativeDriver: true
      }).start();
    }
  }

  render() {
    const _this$props = this.props,
          {
      small,
      icon,
      label,
      accessibilityLabel = label,
      animated = true,
      color: customColor,
      disabled,
      onPress,
      onLongPress,
      theme,
      style,
      visible,
      loading,
      testID
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["small", "icon", "label", "accessibilityLabel", "animated", "color", "disabled", "onPress", "onLongPress", "theme", "style", "visible", "loading", "testID"]);

    const {
      visibility
    } = this.state;
    const IconComponent = animated ? _CrossFadeIcon.default : _Icon.default;
    const disabledColor = (0, _color.default)(theme.dark ? _colors.white : _colors.black).alpha(0.12).rgb().string();
    const {
      backgroundColor = disabled ? disabledColor : theme.colors.accent
    } = _reactNative.StyleSheet.flatten(style) || {};
    let foregroundColor;

    if (typeof customColor !== 'undefined') {
      foregroundColor = customColor;
    } else if (disabled) {
      foregroundColor = (0, _color.default)(theme.dark ? _colors.white : _colors.black).alpha(0.32).rgb().string();
    } else {
      foregroundColor = !(0, _color.default)(backgroundColor).isLight() ? _colors.white : 'rgba(0, 0, 0, .54)';
    }

    const rippleColor = (0, _color.default)(foregroundColor).alpha(0.32).rgb().string();
    return /*#__PURE__*/React.createElement(_Surface.default, _extends({}, rest, {
      style: [{
        backgroundColor,
        opacity: visibility,
        transform: [{
          scale: visibility
        }]
      }, styles.container, disabled && styles.disabled, style],
      pointerEvents: visible ? 'auto' : 'none'
    }), /*#__PURE__*/React.createElement(_TouchableRipple.default, {
      borderless: true,
      onPress: onPress,
      onLongPress: onLongPress,
      rippleColor: rippleColor,
      disabled: disabled,
      accessibilityLabel: accessibilityLabel,
      accessibilityTraits: disabled ? ['button', 'disabled'] : 'button',
      accessibilityComponentType: "button",
      accessibilityRole: "button",
      accessibilityState: {
        disabled
      },
      style: styles.touchable,
      testID: testID
    }, /*#__PURE__*/React.createElement(_reactNative.View, {
      style: [styles.content, label ? styles.extended : small ? styles.small : styles.standard],
      pointerEvents: "none"
    }, icon && loading !== true ? /*#__PURE__*/React.createElement(IconComponent, {
      source: icon,
      size: 24,
      color: foregroundColor
    }) : null, loading ? /*#__PURE__*/React.createElement(_ActivityIndicator.default, {
      size: 18,
      color: foregroundColor
    }) : null, label ? /*#__PURE__*/React.createElement(_Text.default, {
      style: [styles.label, _objectSpread({
        color: foregroundColor
      }, theme.fonts.medium)]
    }, label.toUpperCase()) : null)));
  }

}

_defineProperty(FAB, "Group", _FABGroup2.default);

_defineProperty(FAB, "defaultProps", {
  visible: true
});

const styles = _reactNative.StyleSheet.create({
  container: {
    borderRadius: 28,
    elevation: 6
  },
  touchable: {
    borderRadius: 28
  },
  standard: {
    height: 56,
    width: 56
  },
  small: {
    height: 40,
    width: 40
  },
  extended: {
    height: 48,
    paddingHorizontal: 16
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginHorizontal: 8
  },
  disabled: {
    elevation: 0
  }
});

var _default = (0, _theming.withTheme)(FAB);

exports.default = _default;
//# sourceMappingURL=FAB.js.map