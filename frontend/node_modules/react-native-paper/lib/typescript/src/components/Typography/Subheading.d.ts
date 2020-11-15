import * as React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';
declare type Props = React.ComponentProps<typeof Text> & {
    style?: StyleProp<TextStyle>;
    children: React.ReactNode;
};
/**
 * Typography component for showing a subheading.
 *
 * <div class="screenshots">
 *   <img src="screenshots/subheading.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Subheading } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Subheading>Subheading</Subheading>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const Subheading: (props: Props) => JSX.Element;
export default Subheading;
