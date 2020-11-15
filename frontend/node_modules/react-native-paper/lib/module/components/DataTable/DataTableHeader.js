function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import color from 'color';
import { StyleSheet, View } from 'react-native';
import { black, white } from '../../styles/colors';
import { withTheme } from '../../core/theming';

/**
 * A component to display title in table header.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/data-table-header.png" />
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
 *       <DataTable>
 *         <DataTable.Header>
 *           <DataTable.Title
 *             sortDirection='descending'
 *           >
 *             Dessert
 *           </DataTable.Title>
 *           <DataTable.Title numeric>Calories</DataTable.Title>
 *           <DataTable.Title numeric>Fat (g)</DataTable.Title>
 *         </DataTable.Header>
 *       </DataTable>
 * );
 *
 * export default MyComponent;
 * ```
 */
class DataTableHeader extends React.Component {
  render() {
    const _this$props = this.props,
          {
      children,
      style,
      theme
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["children", "style", "theme"]);

    const borderBottomColor = color(theme.dark ? white : black).alpha(0.12).rgb().string();
    return /*#__PURE__*/React.createElement(View, _extends({}, rest, {
      style: [styles.header, {
        borderBottomColor
      }, style]
    }), children);
  }

}

_defineProperty(DataTableHeader, "displayName", 'DataTable.Header');

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth * 2
  }
});
export default withTheme(DataTableHeader); // @component-docs ignore-next-line

export { DataTableHeader };
//# sourceMappingURL=DataTableHeader.js.map