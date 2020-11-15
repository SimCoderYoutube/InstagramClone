import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type Props = {
    /**
     * Function to execute on selection change.
     */
    onValueChange: (value: string) => void;
    /**
     * Value of the currently selected toggle button.
     */
    value: string;
    /**
     * React elements containing toggle buttons.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};
/**
 * Toggle button row renders a group of toggle buttons in a row.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/toggle-button-row.gif" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ToggleButton } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [value, setValue] = React.useState('left');
 *
 *   return (
 *     <ToggleButton.Row onValueChange={value => setValue(value)} value={value}>
 *       <ToggleButton icon="format-align-left" value="left" />
 *       <ToggleButton icon="format-align-right" value="right" />
 *     </ToggleButton.Row>
 *   );
 * };
 *
 * export default MyComponent;
 *
 *```
 */
declare const ToggleButtonRow: {
    ({ value, onValueChange, children, style }: Props): JSX.Element;
    displayName: string;
};
export default ToggleButtonRow;
