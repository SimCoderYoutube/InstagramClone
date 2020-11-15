function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { withTheme } from '../../core/theming';
import color from 'color';
import IconButton from '../IconButton';
import ToggleButtonGroup, { ToggleButtonGroupContext } from './ToggleButtonGroup';
import ToggleButtonRow from './ToggleButtonRow';
import { black, white } from '../../styles/colors';

/**
 * Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons,
 * a group should share a common container.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/toggle-button.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ToggleButton } from 'react-native-paper';
 *
 * const ToggleButtonExample = () => {
 *   const [status, setStatus] = React.useState('checked');
 *
 *   const onButtonToggle = value => {
 *     setStatus(status === 'checked' ? 'unchecked' : 'checked');
 *   };
 *
 *   return (
 *     <ToggleButton
 *       icon="bluetooth"
 *       value="bluetooth"
 *       status={status}
 *       onPress={onButtonToggle}
 *     />
 *   );
 * };
 *
 * export default ToggleButtonExample;
 *
 * ```
 */
const ToggleButton = (_ref) => {
  let {
    icon,
    size,
    theme,
    accessibilityLabel,
    disabled,
    style,
    value,
    status,
    onPress: _onPress
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["icon", "size", "theme", "accessibilityLabel", "disabled", "style", "value", "status", "onPress"]);

  const borderRadius = theme.roundness;
  return /*#__PURE__*/React.createElement(ToggleButtonGroupContext.Consumer, null, context => {
    let backgroundColor;
    const checked = context && context.value === value || status === 'checked';

    if (checked) {
      backgroundColor = theme.dark ? 'rgba(255, 255, 255, .12)' : 'rgba(0, 0, 0, .08)';
    } else {
      backgroundColor = 'transparent';
    }

    return /*#__PURE__*/React.createElement(IconButton, _extends({
      borderless: false,
      icon: icon,
      onPress: e => {
        if (_onPress) {
          _onPress(e);
        }

        if (context) {
          context.onValueChange(!checked ? value : null);
        }
      },
      size: size,
      accessibilityLabel: accessibilityLabel,
      disabled: disabled,
      style: [styles.content, {
        backgroundColor,
        borderRadius,
        borderColor: color(theme.dark ? white : black).alpha(0.29).rgb().string()
      }, style]
    }, rest));
  });
}; // @component ./ToggleButtonGroup.tsx


ToggleButton.Group = ToggleButtonGroup; // @component ./ToggleButtonRow.tsx

ToggleButton.Row = ToggleButtonRow;
const styles = StyleSheet.create({
  content: {
    width: 42,
    height: 42,
    margin: 0
  }
});
export default withTheme(ToggleButton);
//# sourceMappingURL=ToggleButton.js.map