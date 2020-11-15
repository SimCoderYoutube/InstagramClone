function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Animated, Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import color from 'color';
import Icon from './Icon';
import MaterialCommunityIcon from './MaterialCommunityIcon';
import Surface from './Surface';
import Text from './Typography/Text';
import TouchableRipple from './TouchableRipple/TouchableRipple';
import { withTheme } from '../core/theming';
import { black, white } from '../styles/colors';

/**
 * Chips can be used to display entities in small blocks.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/chip-1.png" />
 *     <figcaption>Flat chip</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/chip-2.png" />
 *     <figcaption>Outlined chip</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Chip } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Chip = (_ref) => {
  let {
    mode = 'flat',
    children,
    icon,
    avatar,
    selected = false,
    disabled = false,
    accessibilityLabel,
    closeIconAccessibilityLabel = 'Close',
    onPress,
    onLongPress,
    onClose,
    textStyle,
    style,
    theme,
    testID,
    selectedColor,
    ellipsizeMode
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["mode", "children", "icon", "avatar", "selected", "disabled", "accessibilityLabel", "closeIconAccessibilityLabel", "onPress", "onLongPress", "onClose", "textStyle", "style", "theme", "testID", "selectedColor", "ellipsizeMode"]);

  const {
    current: elevation
  } = React.useRef(new Animated.Value(0));

  const handlePressIn = () => {
    const {
      scale
    } = theme.animation;
    Animated.timing(elevation, {
      toValue: 4,
      duration: 200 * scale,
      useNativeDriver: true
    }).start();
  };

  const handlePressOut = () => {
    const {
      scale
    } = theme.animation;
    Animated.timing(elevation, {
      toValue: 0,
      duration: 150 * scale,
      useNativeDriver: true
    }).start();
  };

  const {
    dark,
    colors
  } = theme;
  const {
    backgroundColor = mode === 'outlined' ? colors.surface : dark ? '#383838' : '#ebebeb',
    borderRadius = 16
  } = StyleSheet.flatten(style) || {};
  const borderColor = mode === 'outlined' ? color(selectedColor !== undefined ? selectedColor : color(dark ? white : black)).alpha(0.29).rgb().string() : backgroundColor;
  const textColor = disabled ? colors.disabled : color(selectedColor !== undefined ? selectedColor : colors.text).alpha(0.87).rgb().string();
  const iconColor = disabled ? colors.disabled : color(selectedColor !== undefined ? selectedColor : colors.text).alpha(0.54).rgb().string();
  const selectedBackgroundColor = (dark ? color(backgroundColor).lighten(mode === 'outlined' ? 0.2 : 0.4) : color(backgroundColor).darken(mode === 'outlined' ? 0.08 : 0.2)).rgb().string();
  const underlayColor = selectedColor ? color(selectedColor).fade(0.5).rgb().string() : selectedBackgroundColor;
  const accessibilityTraits = ['button'];
  const accessibilityState = {
    selected,
    disabled
  };

  if (selected) {
    accessibilityTraits.push('selected');
  }

  if (disabled) {
    accessibilityTraits.push('disabled');
  }

  return /*#__PURE__*/React.createElement(Surface, _extends({
    style: [styles.container, {
      elevation: Platform.OS === 'android' ? elevation : 0,
      backgroundColor: selected ? selectedBackgroundColor : backgroundColor,
      borderColor,
      borderRadius
    }, style]
  }, rest), /*#__PURE__*/React.createElement(TouchableRipple, {
    borderless: true,
    delayPressIn: 0,
    style: {
      borderRadius
    },
    onPress: onPress,
    onLongPress: onLongPress,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
    underlayColor: underlayColor,
    disabled: disabled,
    accessibilityLabel: accessibilityLabel,
    accessibilityTraits: accessibilityTraits,
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    accessibilityState: accessibilityState,
    testID: testID
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.content, {
      paddingRight: onClose ? 32 : 4
    }]
  }, avatar && !icon ? /*#__PURE__*/React.createElement(View, {
    style: [styles.avatarWrapper, disabled && {
      opacity: 0.26
    }]
  }, /*#__PURE__*/React.isValidElement(avatar) ? /*#__PURE__*/React.cloneElement(avatar, {
    style: [styles.avatar, avatar.props.style]
  }) : avatar) : null, icon || selected ? /*#__PURE__*/React.createElement(View, {
    style: [styles.icon, avatar ? [styles.avatar, styles.avatarSelected] : null]
  }, icon ? /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    color: avatar ? white : iconColor,
    size: 18
  }) : /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
    name: "check",
    color: avatar ? white : iconColor,
    size: 18,
    direction: "ltr"
  })) : null, /*#__PURE__*/React.createElement(Text, {
    numberOfLines: 1,
    style: [styles.text, _objectSpread(_objectSpread({}, theme.fonts.regular), {}, {
      color: textColor,
      marginRight: onClose ? 0 : 8,
      marginLeft: avatar || icon || selected ? 4 : 8
    }), textStyle],
    ellipsizeMode: ellipsizeMode
  }, children))), onClose ? /*#__PURE__*/React.createElement(View, {
    style: styles.closeButtonStyle
  }, /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    onPress: onClose,
    accessibilityTraits: "button",
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    accessibilityLabel: closeIconAccessibilityLabel
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.icon, styles.closeIcon]
  }, /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
    name: "close-circle",
    size: 16,
    color: iconColor,
    direction: "ltr"
  })))) : null);
};

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    flexDirection: 'row'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 4,
    position: 'relative'
  },
  icon: {
    padding: 4,
    alignSelf: 'center'
  },
  closeIcon: {
    marginRight: 4
  },
  text: {
    minHeight: 24,
    lineHeight: 24,
    textAlignVertical: 'center',
    marginVertical: 4
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12
  },
  avatarWrapper: {
    marginRight: 4
  },
  avatarSelected: {
    position: 'absolute',
    top: 4,
    left: 4,
    backgroundColor: 'rgba(0, 0, 0, .29)'
  },
  closeButtonStyle: {
    position: 'absolute',
    right: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default withTheme(Chip);
//# sourceMappingURL=Chip.js.map