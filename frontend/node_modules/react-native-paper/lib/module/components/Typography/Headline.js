function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { StyleSheet } from 'react-native';
import StyledText from './StyledText';

// @component-group Typography

/**
 * Typography component for showing a headline.
 *
 * <div class="screenshots">
 *   <img src="screenshots/headline.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Headline } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Headline>Headline</Headline>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Headline = props => /*#__PURE__*/React.createElement(StyledText, _extends({}, props, {
  alpha: 0.87,
  family: "regular",
  style: [styles.text, props.style]
}));

export default Headline;
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    lineHeight: 32,
    marginVertical: 2,
    letterSpacing: 0
  }
});
//# sourceMappingURL=Headline.js.map