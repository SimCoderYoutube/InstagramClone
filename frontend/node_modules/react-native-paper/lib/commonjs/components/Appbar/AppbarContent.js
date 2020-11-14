"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppbarContent = exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _Text = _interopRequireDefault(require("../Typography/Text"));

var _theming = require("../../core/theming");

var _colors = require("../../styles/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A component used to display a title and optional subtitle in an appbar.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-content.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *        <Appbar.Content title="Title" subtitle={'Subtitle'} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
class AppbarContent extends React.Component {
  render() {
    const _this$props = this.props,
          {
      color: titleColor = _colors.white,
      subtitle,
      subtitleStyle,
      onPress,
      style,
      titleRef,
      titleStyle,
      theme,
      title
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["color", "subtitle", "subtitleStyle", "onPress", "style", "titleRef", "titleStyle", "theme", "title"]);

    const {
      fonts
    } = theme;
    const subtitleColor = (0, _color.default)(titleColor).alpha(0.7).rgb().string();
    return /*#__PURE__*/React.createElement(_reactNative.TouchableWithoutFeedback, {
      onPress: onPress,
      disabled: !onPress
    }, /*#__PURE__*/React.createElement(_reactNative.View, _extends({
      style: [styles.container, style]
    }, rest), /*#__PURE__*/React.createElement(_Text.default, {
      ref: titleRef,
      style: [_objectSpread({
        color: titleColor
      }, _reactNative.Platform.OS === 'ios' ? fonts.regular : fonts.medium), styles.title, titleStyle],
      numberOfLines: 1,
      accessible: true,
      accessibilityTraits: "header" // @ts-ignore
      ,
      accessibilityRole: _reactNative.Platform.OS === 'web' ? 'heading' : 'header'
    }, title), subtitle ? /*#__PURE__*/React.createElement(_Text.default, {
      style: [styles.subtitle, {
        color: subtitleColor
      }, subtitleStyle],
      numberOfLines: 1
    }, subtitle) : null));
  }

}

exports.AppbarContent = AppbarContent;

_defineProperty(AppbarContent, "displayName", 'Appbar.Content');

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12
  },
  title: {
    fontSize: _reactNative.Platform.OS === 'ios' ? 17 : 20
  },
  subtitle: {
    fontSize: _reactNative.Platform.OS === 'ios' ? 11 : 14
  }
});

var _default = (0, _theming.withTheme)(AppbarContent); // @component-docs ignore-next-line


exports.default = _default;
//# sourceMappingURL=AppbarContent.js.map