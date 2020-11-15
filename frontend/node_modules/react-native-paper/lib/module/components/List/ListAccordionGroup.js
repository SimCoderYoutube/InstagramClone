function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
export const ListAccordionGroupContext = /*#__PURE__*/React.createContext(null);

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

export default ListAccordionGroup;
//# sourceMappingURL=ListAccordionGroup.js.map