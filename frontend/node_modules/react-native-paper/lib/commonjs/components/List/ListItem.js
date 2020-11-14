"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _color = _interopRequireDefault(require("color"));

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));

var _Text = _interopRequireDefault(require("../Typography/Text"));

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
 * A component to show tiles inside a List.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/list-item-1.png" />
 *   <img class="medium" src="screenshots/list-item-2.png" />
 *   <img class="medium" src="screenshots/list-item-3.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <List.Item
 *     title="First Item"
 *     description="Item description"
 *     left={props => <List.Icon {...props} icon="folder" />}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 */
class ListItem extends React.Component {
  renderDescription(descriptionColor, description) {
    const {
      descriptionEllipsizeMode,
      descriptionStyle,
      descriptionNumberOfLines
    } = this.props;
    return typeof description === 'function' ? description({
      ellipsizeMode: descriptionEllipsizeMode,
      color: descriptionColor,
      fontSize: styles.description.fontSize
    }) : /*#__PURE__*/React.createElement(_Text.default, {
      numberOfLines: descriptionNumberOfLines,
      ellipsizeMode: descriptionEllipsizeMode,
      style: [styles.description, {
        color: descriptionColor
      }, descriptionStyle]
    }, description);
  }

  render() {
    const _this$props = this.props,
          {
      left,
      right,
      title,
      description,
      onPress,
      theme,
      style,
      titleStyle,
      titleNumberOfLines,
      titleEllipsizeMode
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["left", "right", "title", "description", "onPress", "theme", "style", "titleStyle", "titleNumberOfLines", "titleEllipsizeMode"]);

    const titleColor = (0, _color.default)(theme.colors.text).alpha(0.87).rgb().string();
    const descriptionColor = (0, _color.default)(theme.colors.text).alpha(0.54).rgb().string();
    return /*#__PURE__*/React.createElement(_TouchableRipple.default, _extends({}, rest, {
      style: [styles.container, style],
      onPress: onPress
    }), /*#__PURE__*/React.createElement(_reactNative.View, {
      style: styles.row
    }, left ? left({
      color: descriptionColor,
      style: description ? styles.iconMarginLeft : _objectSpread(_objectSpread({}, styles.iconMarginLeft), styles.marginVerticalNone)
    }) : null, /*#__PURE__*/React.createElement(_reactNative.View, {
      style: [styles.item, styles.content]
    }, /*#__PURE__*/React.createElement(_Text.default, {
      ellipsizeMode: titleEllipsizeMode,
      numberOfLines: titleNumberOfLines,
      style: [styles.title, {
        color: titleColor
      }, titleStyle]
    }, title), description ? this.renderDescription(descriptionColor, description) : null), right ? right({
      color: descriptionColor,
      style: description ? styles.iconMarginRight : _objectSpread(_objectSpread({}, styles.iconMarginRight), styles.marginVerticalNone)
    }) : null));
  }

}

_defineProperty(ListItem, "displayName", 'List.Item');

_defineProperty(ListItem, "defaultProps", {
  titleNumberOfLines: 1,
  descriptionNumberOfLines: 2
});

const styles = _reactNative.StyleSheet.create({
  container: {
    padding: 8
  },
  row: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 16
  },
  description: {
    fontSize: 14
  },
  marginVerticalNone: {
    marginVertical: 0
  },
  iconMarginLeft: {
    marginLeft: 0,
    marginRight: 16
  },
  iconMarginRight: {
    marginRight: 0
  },
  item: {
    marginVertical: 6,
    paddingLeft: 8
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  }
});

var _default = (0, _theming.withTheme)(ListItem);

exports.default = _default;
//# sourceMappingURL=ListItem.js.map