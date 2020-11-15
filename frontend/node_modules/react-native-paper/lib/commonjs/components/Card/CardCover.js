"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardCover = exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("../../core/theming");

var _colors = require("../../styles/colors");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * A component to show a cover image inside a Card.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/card-cover.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends Image props https://facebook.github.io/react-native/docs/image.html#props
 */
const CardCover = (_ref) => {
  let {
    index,
    total,
    style,
    theme
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["index", "total", "style", "theme"]);

  const {
    roundness
  } = theme;
  let coverStyle;

  if (index === 0) {
    if (total === 1) {
      coverStyle = {
        borderRadius: roundness
      };
    } else {
      coverStyle = {
        borderTopLeftRadius: roundness,
        borderTopRightRadius: roundness
      };
    }
  } else if (typeof total === 'number' && index === total - 1) {
    coverStyle = {
      borderBottomLeftRadius: roundness
    };
  }

  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.container, coverStyle, style]
  }, /*#__PURE__*/React.createElement(_reactNative.Image, _extends({}, rest, {
    style: [styles.image, coverStyle]
  })));
};

exports.CardCover = CardCover;
CardCover.displayName = 'Card.Cover';

const styles = _reactNative.StyleSheet.create({
  container: {
    height: 195,
    backgroundColor: _colors.grey200,
    overflow: 'hidden'
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    padding: 16,
    justifyContent: 'flex-end',
    resizeMode: 'cover'
  }
});

var _default = (0, _theming.withTheme)(CardCover); // @component-docs ignore-next-line


exports.default = _default;
//# sourceMappingURL=CardCover.js.map