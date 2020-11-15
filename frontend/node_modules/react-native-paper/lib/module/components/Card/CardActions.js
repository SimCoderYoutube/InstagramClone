function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { StyleSheet, View } from 'react-native';

/**
 * A component to show a list of actions inside a Card.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/card-actions.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card, Button } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Actions>
 *       <Button>Cancel</Button>
 *       <Button>Ok</Button>
 *     </Card.Actions>
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 */
const CardActions = props => /*#__PURE__*/React.createElement(View, _extends({}, props, {
  style: [styles.container, props.style]
}), React.Children.map(props.children, child => /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, {
  compact: child.props.compact !== false
}) : child));

CardActions.displayName = 'Card.Actions';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 8
  }
});
export default CardActions;
//# sourceMappingURL=CardActions.js.map