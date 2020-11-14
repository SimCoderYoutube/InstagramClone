function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { StyleSheet, TextInput, I18nManager } from 'react-native';
import color from 'color';
import IconButton from './IconButton';
import Surface from './Surface';
import { withTheme } from '../core/theming';
import MaterialCommunityIcon from './MaterialCommunityIcon';

/**
 * Searchbar is a simple input box where users can type search queries.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/searchbar.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Searchbar } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [searchQuery, setSearchQuery] = React.useState('');
 *
 *   const onChangeSearch = query => setSearchQuery(query);
 *
 *   return (
 *     <Searchbar
 *       placeholder="Search"
 *       onChangeText={onChangeSearch}
 *       value={searchQuery}
 *     />
 *   );
 * };
 *
 * export default MyComponent;

 * ```
 */
class Searchbar extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleClearPress", () => {
      this.clear();
      this.props.onChangeText && this.props.onChangeText('');
    });

    _defineProperty(this, "root", void 0);
  }

  /**
   * @internal
   */
  setNativeProps(args) {
    return this.root && this.root.setNativeProps(args);
  }
  /**
   * Returns `true` if the input is currently focused, `false` otherwise.
   */


  isFocused() {
    return this.root && this.root.isFocused();
  }
  /**
   * Removes all text from the TextInput.
   */


  clear() {
    return this.root && this.root.clear();
  }
  /**
   * Focuses the input.
   */


  focus() {
    return this.root && this.root.focus();
  }
  /**
   * Removes focus from the input.
   */


  blur() {
    return this.root && this.root.blur();
  }

  render() {
    const _this$props = this.props,
          {
      clearAccessibilityLabel,
      clearIcon,
      icon,
      iconColor: customIconColor,
      inputStyle,
      onIconPress,
      placeholder,
      searchAccessibilityLabel,
      style,
      theme,
      value
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["clearAccessibilityLabel", "clearIcon", "icon", "iconColor", "inputStyle", "onIconPress", "placeholder", "searchAccessibilityLabel", "style", "theme", "value"]);

    const {
      colors,
      roundness,
      dark,
      fonts
    } = theme;
    const textColor = colors.text;
    const font = fonts.regular;
    const iconColor = customIconColor || (dark ? textColor : color(textColor).alpha(0.54).rgb().string());
    const rippleColor = color(textColor).alpha(0.32).rgb().string();
    return /*#__PURE__*/React.createElement(Surface, {
      style: [{
        borderRadius: roundness,
        elevation: 4
      }, styles.container, style]
    }, /*#__PURE__*/React.createElement(IconButton, {
      accessibilityTraits: "button",
      accessibilityComponentType: "button",
      accessibilityRole: "button",
      borderless: true,
      rippleColor: rippleColor,
      onPress: onIconPress,
      color: iconColor,
      icon: icon || (({
        size,
        color
      }) => /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
        name: "magnify",
        color: color,
        size: size,
        direction: I18nManager.isRTL ? 'rtl' : 'ltr'
      })),
      accessibilityLabel: searchAccessibilityLabel
    }), /*#__PURE__*/React.createElement(TextInput, _extends({
      style: [styles.input, _objectSpread({
        color: textColor
      }, font), inputStyle],
      placeholder: placeholder || '',
      placeholderTextColor: colors.placeholder,
      selectionColor: colors.primary,
      underlineColorAndroid: "transparent",
      returnKeyType: "search",
      keyboardAppearance: dark ? 'dark' : 'light',
      accessibilityTraits: "search",
      accessibilityRole: "search",
      ref: c => {
        this.root = c;
      },
      value: value
    }, rest)), /*#__PURE__*/React.createElement(IconButton, {
      borderless: true,
      disabled: !value,
      accessibilityLabel: clearAccessibilityLabel,
      color: value ? iconColor : 'rgba(255, 255, 255, 0)',
      rippleColor: rippleColor,
      onPress: this.handleClearPress,
      icon: clearIcon || (({
        size,
        color
      }) => /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
        name: "close",
        color: color,
        size: size,
        direction: I18nManager.isRTL ? 'rtl' : 'ltr'
      })),
      accessibilityTraits: "button",
      accessibilityComponentType: "button",
      accessibilityRole: "button"
    }));
  }

}

_defineProperty(Searchbar, "defaultProps", {
  searchAccessibilityLabel: 'search',
  clearAccessibilityLabel: 'clear'
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 8,
    alignSelf: 'stretch',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    minWidth: 0
  }
});
export default withTheme(Searchbar);
//# sourceMappingURL=Searchbar.js.map