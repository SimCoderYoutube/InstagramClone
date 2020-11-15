"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListAccordionGroupContext = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ListAccordionGroupContext = /*#__PURE__*/React.createContext(null);
exports.ListAccordionGroupContext = ListAccordionGroupContext;

/**
 * List.AccordionGroup allows to control a group of List Accordions. `id` prop for List.Accordion is required in order for group to work.
 * List.AccordionGroup can be a controlled or uncontrolled component. The example shows the uncontrolled version.
 * At most one Accordion can be expanded at a given time.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/list-accordion-group.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View, Text } from 'react-native';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <List.AccordionGroup>
 *     <List.Accordion title="Accordion 1" id="1">
 *       <List.Item title="Item 1" />
 *     </List.Accordion>
 *     <List.Accordion title="Accordion 2" id="2">
 *       <List.Item title="Item 2" />
 *     </List.Accordion>
 *     <View>
 *       <Text>
 *         List.Accordion can be wrapped because implementation uses React.Context.
 *       </Text>
 *       <List.Accordion title="Accordion 3" id="3">
 *         <List.Item title="Item 3" />
 *       </List.Accordion>
 *     </View>
 *   </List.AccordionGroup>
 * );
 *
 * export default MyComponent;
 *```
 */
class ListAccordionGroup extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      expandedId: undefined
    });

    _defineProperty(this, "onAccordionPress", expandedId => {
      this.setState(({
        expandedId: currentExpandedId
      }) => ({
        expandedId: currentExpandedId === expandedId ? undefined : expandedId
      }));
    });
  }

  render() {
    const {
      expandedId,
      onAccordionPress,
      children
    } = this.props;
    return /*#__PURE__*/React.createElement(ListAccordionGroupContext.Provider, {
      value: {
        expandedId: expandedId || this.state.expandedId,
        // component can be controlled or uncontrolled
        onAccordionPress: onAccordionPress || this.onAccordionPress
      }
    }, children);
  }

}

_defineProperty(ListAccordionGroup, "displayName", 'List.AccordionGroup');

var _default = ListAccordionGroup;
exports.default = _default;
//# sourceMappingURL=ListAccordionGroup.js.map