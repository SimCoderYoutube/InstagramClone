function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import color from 'color';
import Icon from '../Icon';
import { withTheme } from '../../core/theming';
import { white } from '../../styles/colors';
const defaultSize = 64;

/**
 * Avatars can be used to represent people in a graphical way.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/avatar-icon.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Icon size={24} icon="folder" />
 * );
 * ```
 */
class Avatar extends React.Component {
  render() {
    const _this$props = this.props,
          {
      icon,
      size = defaultSize,
      style,
      theme
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["icon", "size", "style", "theme"]);

    const _ref = StyleSheet.flatten(style) || {},
          {
      backgroundColor = theme.colors.primary
    } = _ref,
          restStyle = _objectWithoutProperties(_ref, ["backgroundColor"]);

    const textColor = this.props.color || (color(backgroundColor).isLight() ? 'rgba(0, 0, 0, .54)' : white);
    return /*#__PURE__*/React.createElement(View, _extends({
      style: [{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor
      }, styles.container, restStyle]
    }, rest), /*#__PURE__*/React.createElement(Icon, {
      source: icon,
      color: textColor,
      size: size * 0.6
    }));
  }

}

_defineProperty(Avatar, "displayName", 'Avatar.Icon');

_defineProperty(Avatar, "defaultProps", {
  size: defaultSize
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default withTheme(Avatar);
//# sourceMappingURL=AvatarIcon.js.map