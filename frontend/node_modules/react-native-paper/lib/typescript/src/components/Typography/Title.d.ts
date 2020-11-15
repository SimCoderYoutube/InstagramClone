import * as React from 'react';
import { Text } from 'react-native';
declare type Props = React.ComponentProps<typeof Text> & {
    children: React.ReactNode;
};
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
declare const Title: (props: Props) => JSX.Element;
export default Title;
