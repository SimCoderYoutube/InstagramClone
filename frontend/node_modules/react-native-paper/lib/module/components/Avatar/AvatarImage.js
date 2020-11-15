function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { withTheme } from '../../core/theming';
const defaultSize = 64;

/**
 * Avatars can be used to represent people in a graphical way.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/avatar-image.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Image size={24} source={require('../assets/avatar.png')} />
 * );
 * export default MyComponent
 * ```
 */
class AvatarImage extends React.Component {
  render() {
    const _this$props = this.props,
          {
      size = defaultSize,
      source,
      style,
      theme
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["size", "source", "style", "theme"]);

    const {
      colors
    } = theme;
    const {
      backgroundColor = colors.primary
    } = StyleSheet.flatten(style) || {};
    return /*#__PURE__*/React.createElement(View, _extends({
      style: [{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor
      }, style]
    }, rest), typeof source === 'function' && source({
      size
    }), typeof source !== 'function' && /*#__PURE__*/React.createElement(Image, {
      source: source,
      style: {
        width: size,
        height: size,
        borderRadius: size / 2
      }
    }));
  }

}

_defineProperty(AvatarImage, "displayName", 'Avatar.Image');

_defineProperty(AvatarImage, "defaultProps", {
  size: defaultSize
});

export default withTheme(AvatarImage);
//# sourceMappingURL=AvatarImage.js.map