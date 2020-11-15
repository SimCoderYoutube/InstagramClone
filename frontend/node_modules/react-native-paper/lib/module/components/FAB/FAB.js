function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import color from 'color';
import * as React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import ActivityIndicator from '../ActivityIndicator'; // eslint-disable-next-line @typescript-eslint/no-unused-vars

import FABGroup from './FABGroup';
import Surface from '../Surface';
import CrossFadeIcon from '../CrossFadeIcon';
import Icon from '../Icon';
import Text from '../Typography/Text';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import { black, white } from '../../styles/colors';
import { withTheme } from '../../core/theming';

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
      visibility: new Animated.Value(this.props.visible ? 1 : 0)
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
      Animated.timing(this.state.visibility, {
        toValue: 1,
        duration: 200 * scale,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(this.state.visibility, {
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
    const IconComponent = animated ? CrossFadeIcon : Icon;
    const disabledColor = color(theme.dark ? white : black).alpha(0.12).rgb().string();
    const {
      backgroundColor = disabled ? disabledColor : theme.colors.accent
    } = StyleSheet.flatten(style) || {};
    let foregroundColor;

    if (typeof customColor !== 'undefined') {
      foregroundColor = customColor;
    } else if (disabled) {
      foregroundColor = color(theme.dark ? white : black).alpha(0.32).rgb().string();
    } else {
      foregroundColor = !color(backgroundColor).isLight() ? white : 'rgba(0, 0, 0, .54)';
    }

    const rippleColor = color(foregroundColor).alpha(0.32).rgb().string();
    return /*#__PURE__*/React.createElement(Surface, _extends({}, rest, {
      style: [{
        backgroundColor,
        opacity: visibility,
        transform: [{
          scale: visibility
        }]
      }, styles.container, disabled && styles.disabled, style],
      pointerEvents: visible ? 'auto' : 'none'
    }), /*#__PURE__*/React.createElement(TouchableRipple, {
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
    }, /*#__PURE__*/React.createElement(View, {
      style: [styles.content, label ? styles.extended : small ? styles.small : styles.standard],
      pointerEvents: "none"
    }, icon && loading !== true ? /*#__PURE__*/React.createElement(IconComponent, {
      source: icon,
      size: 24,
      color: foregroundColor
    }) : null, loading ? /*#__PURE__*/React.createElement(ActivityIndicator, {
      size: 18,
      color: foregroundColor
    }) : null, label ? /*#__PURE__*/React.createElement(Text, {
      style: [styles.label, _objectSpread({
        color: foregroundColor
      }, theme.fonts.medium)]
    }, label.toUpperCase()) : null)));
  }

}

_defineProperty(FAB, "Group", FABGroup);

_defineProperty(FAB, "defaultProps", {
  visible: true
});

const styles = StyleSheet.create({
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
export default withTheme(FAB);
//# sourceMappingURL=FAB.js.map