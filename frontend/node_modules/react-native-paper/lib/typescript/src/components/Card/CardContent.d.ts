import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Items inside the `Card.Content`.
     */
    children: React.ReactNode;
    /**
     * @internal
     */
    index?: number;
    /**
     * @internal
     */
    total?: number;
    /**
     * @internal
     */
    siblings?: Array<string>;
    style?: StyleProp<ViewStyle>;
};
/**
 * A component to show content inside a Card.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/card-content-example.png" />
 *   </figure>
 * </div>
 *
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card, Title, Paragraph } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Content>
 *       <Title>Card title</Title>
 *       <Paragraph>Card content</Paragraph>
 *     </Card.Content>
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const CardContent: {
    ({ index, total, siblings, style, ...rest }: Props): JSX.Element;
    displayName: string;
};
export default CardContent;
