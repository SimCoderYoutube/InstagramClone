"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isEqualIcon = exports.isValidIcon = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _settings = require("../core/settings");

var _MaterialCommunityIcon = require("./MaterialCommunityIcon");

var _theming = require("../core/theming");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const isImageSource = source => // source is an object with uri
typeof source === 'object' && source !== null && Object.prototype.hasOwnProperty.call(source, 'uri') && typeof source.uri === 'string' || // source is a module, e.g. - require('image')
typeof source === 'number' || // image url on web
_reactNative.Platform.OS === 'web' && typeof source === 'string' && (source.startsWith('data:image') || /\.(bmp|jpg|jpeg|png|gif|svg)$/.test(source));

const getIconId = source => {
  if (typeof source === 'object' && source !== null && Object.prototype.hasOwnProperty.call(source, 'uri') && typeof source.uri === 'string') {
    return source.uri;
  }

  return source;
};

const isValidIcon = source => typeof source === 'string' || typeof source === 'function' || isImageSource(source);

exports.isValidIcon = isValidIcon;

const isEqualIcon = (a, b) => a === b || getIconId(a) === getIconId(b);

exports.isEqualIcon = isEqualIcon;

const Icon = (_ref) => {
  let {
    source,
    color,
    size,
    theme
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["source", "color", "size", "theme"]);

  const direction = // @ts-ignore
  typeof source === 'object' && source.direction && source.source ? source.direction === 'auto' ? _reactNative.I18nManager.isRTL ? 'rtl' : 'ltr' : source.direction : null;
  const s = // @ts-ignore
  typeof source === 'object' && source.direction && source.source ? source.source : source;
  const iconColor = color || theme.colors.text;

  if (isImageSource(s)) {
    return /*#__PURE__*/React.createElement(_reactNative.Image, _extends({}, rest, {
      source: s,
      style: [{
        transform: [{
          scaleX: direction === 'rtl' ? -1 : 1
        }]
      }, // eslint-disable-next-line react-native/no-inline-styles
      {
        width: size,
        height: size,
        tintColor: color,
        resizeMode: 'contain'
      }]
    }, _MaterialCommunityIcon.accessibilityProps));
  } else if (typeof s === 'string') {
    return /*#__PURE__*/React.createElement(_settings.Consumer, null, ({
      icon
    }) => {
      return icon({
        name: s,
        color: iconColor,
        size,
        direction
      });
    });
  } else if (typeof s === 'function') {
    return s({
      color: iconColor,
      size,
      direction
    });
  }

  return null;
};

var _default = (0, _theming.withTheme)(Icon);

exports.default = _default;
//# sourceMappingURL=Icon.js.map