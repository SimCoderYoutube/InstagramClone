import * as React from 'react';
import { Platform } from 'react-native';
import RadioButtonGroup from './RadioButtonGroup';
import RadioButtonAndroid from './RadioButtonAndroid';
import RadioButtonIOS from './RadioButtonIOS';
import RadioButtonItem from './RadioButtonItem';
import { withTheme } from '../../core/theming';

/**
 * Radio buttons allow the selection a single option from a set.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/radio-enabled.android.png" />
 *     <figcaption>Android (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.android.png" />
 *     <figcaption>Android (disabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-enabled.ios.png" />
 *     <figcaption>iOS (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.ios.png" />
 *     <figcaption>iOS (disabled)</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { RadioButton } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [checked, setChecked] = React.useState('first');
 *
 *   return (
 *     <View>
 *       <RadioButton
 *         value="first"
 *         status={ checked === 'first' ? 'checked' : 'unchecked' }
 *         onPress={() => setChecked('first')}
 *       />
 *       <RadioButton
 *         value="second"
 *         status={ checked === 'second' ? 'checked' : 'unchecked' }
 *         onPress={() => setChecked('second')}
 *       />
 *     </View>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const RadioButton = props => {
  const Button = Platform.select({
    default: RadioButtonAndroid,
    ios: RadioButtonIOS
  });
  return /*#__PURE__*/React.createElement(Button, props);
}; // @component ./RadioButtonGroup.tsx


RadioButton.Group = RadioButtonGroup; // @component ./RadioButtonAndroid.tsx

RadioButton.Android = RadioButtonAndroid; // @component ./RadioButtonIOS.tsx

RadioButton.IOS = RadioButtonIOS; // @component ./RadioButtonItem.tsx

RadioButton.Item = RadioButtonItem;
export default withTheme(RadioButton);
//# sourceMappingURL=RadioButton.js.map