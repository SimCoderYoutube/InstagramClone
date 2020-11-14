import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Items inside the `CardActions`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};
/**
 * A component to show a list of actions inside a Card.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/card-actions.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card, Button } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Actions>
 *       <Button>Cancel</Button>
 *       <Button>Ok</Button>
 *     </Card.Actions>
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const CardActions: {
    (props: Props): JSX.Element;
    displayName: string;
};
export default CardActions;
