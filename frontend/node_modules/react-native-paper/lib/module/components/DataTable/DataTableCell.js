function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../Typography/Text';
import TouchableRipple from '../TouchableRipple/TouchableRipple';

/**
 * A component to show a single cell inside of a table.
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
class DataTableCell extends React.Component {
  render() {
    const _this$props = this.props,
          {
      children,
      style,
      numeric
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["children", "style", "numeric"]);

    return /*#__PURE__*/React.createElement(TouchableRipple, _extends({}, rest, {
      style: [styles.container, numeric && styles.right, style]
    }), /*#__PURE__*/React.createElement(Text, {
      numberOfLines: 1
    }, children));
  }

}

_defineProperty(DataTableCell, "displayName", 'DataTable.Cell');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  right: {
    justifyContent: 'flex-end'
  }
});
export default DataTableCell;
//# sourceMappingURL=DataTableCell.js.map