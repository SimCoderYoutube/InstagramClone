function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { StyleSheet } from 'react-native';
import StyledText from './StyledText';

// @component-group Typography

/**
 * Typography component for showing a title.
 *
 * <div class="screenshots">
 *   <img src="screenshots/title.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Title } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Title>Title</Title>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Title = props => /*#__PURE__*/React.createElement(StyledText, _extends({}, props, {
  alpha: 0.87,
  family: "medium",
  style: [styles.text, props.style]
}));

export default Title;
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    lineHeight: 30,
    marginVertical: 2,
    letterSpacing: 0.15
  }
});
//# sourceMappingURL=Title.js.map