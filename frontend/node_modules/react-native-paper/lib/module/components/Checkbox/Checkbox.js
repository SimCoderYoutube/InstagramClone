import * as React from 'react';
import { Platform } from 'react-native'; // eslint-disable-next-line @typescript-eslint/no-unused-vars

import CheckboxIOS from './CheckboxIOS';
import CheckboxAndroid from './CheckboxAndroid';
import CheckboxItem from './CheckboxItem';
import { withTheme } from '../../core/theming';

/**
 * Checkboxes allow the selection of multiple options from a set.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/checkbox-enabled.android.png" />
 *     <figcaption>Android (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-disabled.android.png" />
 *     <figcaption>Android (disabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-enabled.ios.png" />
 *     <figcaption>iOS (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-disabled.ios.png" />
 *     <figcaption>iOS (disabled)</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Checkbox } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [checked, setChecked] = React.useState(false);
 *
 *   return (
 *     <Checkbox
 *       status={checked ? 'checked' : 'unchecked'}
 *       onPress={() => {
 *         setChecked(!checked);
 *       }}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const Checkbox = props => Platform.OS === 'ios' ? /*#__PURE__*/React.createElement(CheckboxIOS, props) : /*#__PURE__*/React.createElement(CheckboxAndroid, props); // @component ./CheckboxItem.tsx


Checkbox.Item = CheckboxItem; // @component ./CheckboxAndroid.tsx

Checkbox.Android = CheckboxAndroid; // @component ./CheckboxIOS.tsx

Checkbox.IOS = CheckboxIOS;
export default withTheme(Checkbox);
//# sourceMappingURL=Checkbox.js.map