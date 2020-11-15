import * as React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';
declare type Props = React.ComponentProps<typeof Text> & {
    style?: StyleProp<TextStyle>;
    children: React.ReactNode;
};
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
declare const Headline: (props: Props) => JSX.Element;
export default Headline;
