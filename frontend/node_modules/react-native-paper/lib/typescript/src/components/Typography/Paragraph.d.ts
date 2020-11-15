import * as React from 'react';
import { TextProps } from 'react-native';
declare type Props = TextProps & {
    children: React.ReactNode;
};
/**
 * Typography component for showing a paragraph.
 *
 * <div class="screenshots">
 *   <img src="screenshots/paragraph.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Paragraph } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Paragraph>Paragraph</Paragraph>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const Paragraph: (props: Props) => JSX.Element;
export default Paragraph;
