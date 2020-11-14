import * as React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';
declare type Props = React.ComponentProps<typeof Text> & {
    style?: StyleProp<TextStyle>;
    children: React.ReactNode;
};
/**
 * Typography component for showing a caption.
 *
 * <div class="screenshots">
 *   <img src="screenshots/caption.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Caption } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Caption>Caption</Caption>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const Caption: (props: Props) => JSX.Element;
export default Caption;
