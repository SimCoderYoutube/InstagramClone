function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import color from 'color';
import { black } from '../../styles/colors';
import IconButton from '../IconButton';

/**
 * A component used to display an action item in the appbar.
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-action-android.png" />
 *       <figcaption>Android</figcaption>
 *   </figure>
 * </div>
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-action-ios.png" />
 *       <figcaption>iOS</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 * import { Platform } from 'react-native';
 *
 * const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *        <Appbar.Content title="Title" subtitle={'Subtitle'} />
 *         <Appbar.Action icon="magnify" onPress={() => {}} />
 *         <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
export default class AppbarAction extends React.Component {
  render() {
    const _this$props = this.props,
          {
      color: iconColor = color(black).alpha(0.54).rgb().string(),
      icon,
      disabled,
      onPress,
      accessibilityLabel
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["color", "icon", "disabled", "onPress", "accessibilityLabel"]);

    return /*#__PURE__*/React.createElement(IconButton, _extends({
      onPress: onPress,
      color: iconColor,
      icon: icon,
      disabled: disabled,
      accessibilityLabel: accessibilityLabel,
      animated: true
    }, rest));
  }

}

_defineProperty(AppbarAction, "displayName", 'Appbar.Action');

_defineProperty(AppbarAction, "defaultProps", {
  size: 24
});
//# sourceMappingURL=AppbarAction.js.map