function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Image, I18nManager, Platform } from 'react-native';
import { Consumer as SettingsConsumer } from '../core/settings';
import { accessibilityProps } from './MaterialCommunityIcon';
import { withTheme } from '../core/theming';

const isImageSource = source => // source is an object with uri
typeof source === 'object' && source !== null && Object.prototype.hasOwnProperty.call(source, 'uri') && typeof source.uri === 'string' || // source is a module, e.g. - require('image')
typeof source === 'number' || // image url on web
Platform.OS === 'web' && typeof source === 'string' && (source.startsWith('data:image') || /\.(bmp|jpg|jpeg|png|gif|svg)$/.test(source));

const getIconId = source => {
  if (typeof source === 'object' && source !== null && Object.prototype.hasOwnProperty.call(source, 'uri') && typeof source.uri === 'string') {
    return source.uri;
  }

  return source;
};

export const isValidIcon = source => typeof source === 'string' || typeof source === 'function' || isImageSource(source);
export const isEqualIcon = (a, b) => a === b || getIconId(a) === getIconId(b);

const Icon = (_ref) => {
  let {
    source,
    color,
    size,
    theme
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["source", "color", "size", "theme"]);

  const direction = // @ts-ignore
  typeof source === 'object' && source.direction && source.source ? source.direction === 'auto' ? I18nManager.isRTL ? 'rtl' : 'ltr' : source.direction : null;
  const s = // @ts-ignore
  typeof source === 'object' && source.direction && source.source ? source.source : source;
  const iconColor = color || theme.colors.text;

  if (isImageSource(s)) {
    return /*#__PURE__*/React.createElement(Image, _extends({}, rest, {
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
    }, accessibilityProps));
  } else if (typeof s === 'string') {
    return /*#__PURE__*/React.createElement(SettingsConsumer, null, ({
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

export default withTheme(Icon);
//# sourceMappingURL=Icon.js.map