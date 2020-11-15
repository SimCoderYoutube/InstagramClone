function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import ListSubheader from './ListSubheader';
import { withTheme } from '../../core/theming';

/**
 * A component used to group list items.
 *
 * <div class="screenshots">
 *   <img src="screenshots/list-section.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <List.Section>
 *     <List.Subheader>Some title</List.Subheader>
 *     <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
 *     <List.Item
 *       title="Second Item"
 *       left={() => <List.Icon color="#000" icon="folder" />}
 *     />
 *   </List.Section>
 * );
 *
 * export default MyComponent;
 * ```
 */
class ListSection extends React.Component {
  render() {
    const _this$props = this.props,
          {
      children,
      title,
      titleStyle,
      style
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["children", "title", "titleStyle", "style"]);

    return /*#__PURE__*/React.createElement(View, _extends({}, rest, {
      style: [styles.container, style]
    }), title && /*#__PURE__*/React.createElement(ListSubheader, {
      style: titleStyle
    }, title), children);
  }

}

_defineProperty(ListSection, "displayName", 'List.Section');

const styles = StyleSheet.create({
  container: {
    marginVertical: 8
  }
});
export default withTheme(ListSection);
//# sourceMappingURL=ListSection.js.map