import * as React from 'react';
export const RadioButtonContext = /*#__PURE__*/React.createContext(null);
/**
 * Radio button group allows to control a group of radio buttons.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/radio-button-group-android.gif" />
 *  <figcaption>Android</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/radio-button-group-ios.gif" />
 *  <figcaption>iOS</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { RadioButton, Text } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [value, setValue] = React.useState('first');
 *
 *   return (
 *     <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
 *       <View>
 *         <Text>First</Text>
 *         <RadioButton value="first" />
 *       </View>
 *       <View>
 *         <Text>Second</Text>
 *         <RadioButton value="second" />
 *       </View>
 *     </RadioButton.Group>
 *   );
 * };
 *
 * export default MyComponent;
 *```
 */

const RadioButtonGroup = ({
  value,
  onValueChange,
  children
}) => /*#__PURE__*/React.createElement(RadioButtonContext.Provider, {
  value: {
    value,
    onValueChange
  }
}, children);

RadioButtonGroup.displayName = 'RadioButton.Group';
export default RadioButtonGroup;
//# sourceMappingURL=RadioButtonGroup.js.map