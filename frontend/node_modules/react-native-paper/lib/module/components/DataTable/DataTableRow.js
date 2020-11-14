function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import color from 'color';
import { StyleSheet, View } from 'react-native';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import { black, white } from '../../styles/colors';
import { withTheme } from '../../core/theming';

/**
 * A component to show a single row inside of a table.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/data-table-row-cell.png" />
 *   </figure>
 * </div>
 *
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *      <DataTable.Row>
 *        <DataTable.Cell numeric>1</DataTable.Cell>
 *        <DataTable.Cell numeric>2</DataTable.Cell>
 *        <DataTable.Cell numeric>3</DataTable.Cell>
 *        <DataTable.Cell numeric>4</DataTable.Cell>
 *      </DataTable.Row>
 * );
 *
 * export default MyComponent;
 * ```
 */
class DataTableRow extends React.Component {
  render() {
    const _this$props = this.props,
          {
      onPress,
      style,
      theme
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["onPress", "style", "theme"]);

    const borderBottomColor = color(theme.dark ? white : black).alpha(0.12).rgb().string();
    return /*#__PURE__*/React.createElement(TouchableRipple, _extends({}, rest, {
      onPress: onPress,
      style: [styles.container, {
        borderBottomColor
      }, style]
    }), /*#__PURE__*/React.createElement(View, {
      style: styles.content
    }, this.props.children));
  }

}

_defineProperty(DataTableRow, "displayName", 'DataTable.Row');

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    minHeight: 48,
    paddingHorizontal: 16
  },
  content: {
    flex: 1,
    flexDirection: 'row'
  }
});
export default withTheme(DataTableRow); // @component-docs ignore-next-line

export { DataTableRow };
//# sourceMappingURL=DataTableRow.js.map