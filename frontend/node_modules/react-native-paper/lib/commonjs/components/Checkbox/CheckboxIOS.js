"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxIOS = exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _MaterialCommunityIcon = _interopRequireDefault(require("../MaterialCommunityIcon"));

var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));

var _theming = require("../../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Checkboxes allow the selection of multiple options from a set.
 * This component follows platform guidelines for iOS, but can be used
 * on any platform.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/checkbox-enabled.ios.png" />
 *     <figcaption>Enabled</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-disabled.ios.png" />
 *     <figcaption>Disabled</figcaption>
 *   </figure>
 * </div>
 */
const CheckboxIOS = (_ref) => {
  let {
    status,
    disabled,
    onPress,
    theme,
    testID
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["status", "disabled", "onPress", "theme", "testID"]);

  const checked = status === 'checked';
  const indeterminate = status === 'indeterminate';
  const checkedColor = disabled ? theme.colors.disabled : rest.color || theme.colors.accent;
  let rippleColor;

  if (disabled) {
    rippleColor = (0, _color.default)(theme.colors.text).alpha(0.16).rgb().string();
  } else {
    rippleColor = (0, _color.default)(checkedColor).fade(0.32).rgb().string();
  }

  const icon = indeterminate ? 'minus' : 'check';
  return /*#__PURE__*/React.createElement(_TouchableRipple.default, _extends({}, rest, {
    borderless: true,
    rippleColor: rippleColor,
    onPress: onPress,
    disabled: disabled,
    accessibilityTraits: disabled ? ['button', 'disabled'] : 'button',
    accessibilityComponentType: "button",
    accessibilityRole: "checkbox",
    accessibilityState: {
      disabled,
      checked
    },
    accessibilityLiveRegion: "polite",
    style: styles.container,
    testID: testID
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: {
      opacity: indeterminate || checked ? 1 : 0
    }
  }, /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
    allowFontScaling: false,
    name: icon,
    size: 24,
    color: checkedColor,
    direction: "ltr"
  })));
};

exports.CheckboxIOS = CheckboxIOS;
CheckboxIOS.displayName = 'Checkbox.IOS';

const styles = _reactNative.StyleSheet.create({
  container: {
    borderRadius: 18,
    padding: 6
  }
});

var _default = (0, _theming.withTheme)(CheckboxIOS); // @component-docs ignore-next-line


exports.default = _default;
//# sourceMappingURL=CheckboxIOS.js.map