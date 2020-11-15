function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { grey400, grey800, grey50, white, black } from '../styles/colors';
import { NativeModules, Platform, Switch as NativeSwitch } from 'react-native';
import setColor from 'color';
import { withTheme } from '../core/theming';
const version = NativeModules.PlatformConstants ? NativeModules.PlatformConstants.reactNativeVersion : undefined;

/**
 * Switch is a visual toggle between two mutually exclusive states — on and off.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/switch-enabled.android.png" />
 *     <figcaption>Android (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/switch-disabled.android.png" />
 *     <figcaption>Android (disabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/switch-enabled.ios.png" />
 *     <figcaption>iOS (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/switch-disabled.ios.png" />
 *     <figcaption>iOS (disabled)</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Switch } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [isSwitchOn, setIsSwitchOn] = React.useState(false);
 *
 *   const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
 *
 *   return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
 * };
 *
 * export default MyComponent;
 * ```
 */
class Switch extends React.Component {
  render() {
    const _this$props = this.props,
          {
      value,
      disabled,
      onValueChange,
      color,
      theme
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["value", "disabled", "onValueChange", "color", "theme"]);

    const checkedColor = color || theme.colors.accent;
    const onTintColor = Platform.OS === 'ios' ? checkedColor : disabled ? theme.dark ? setColor(white).alpha(0.1).rgb().string() : setColor(black).alpha(0.12).rgb().string() : setColor(checkedColor).alpha(0.5).rgb().string();
    const thumbTintColor = Platform.OS === 'ios' ? undefined : disabled ? theme.dark ? grey800 : grey400 : value ? checkedColor : theme.dark ? grey400 : grey50;
    const props = version && version.major === 0 && version.minor <= 56 ? {
      onTintColor,
      thumbTintColor
    } : {
      thumbColor: thumbTintColor,
      trackColor: {
        true: onTintColor,
        false: ''
      }
    };
    return /*#__PURE__*/React.createElement(NativeSwitch, _extends({
      value: value,
      disabled: disabled,
      onValueChange: disabled ? undefined : onValueChange
    }, props, rest));
  }

}

export default withTheme(Switch);
//# sourceMappingURL=Switch.js.map