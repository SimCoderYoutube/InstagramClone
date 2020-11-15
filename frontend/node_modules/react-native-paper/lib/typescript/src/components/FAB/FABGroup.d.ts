import * as React from 'react';
import { StyleProp, Animated, ViewStyle } from 'react-native';
import type { IconSource } from '../Icon';
declare type Props = {
    /**
     * Action items to display in the form of a speed dial.
     * An action item should contain the following properties:
     * - `icon`: icon to display (required)
     * - `label`: optional label text
     * - `accessibilityLabel`: accessibility label for the action, uses label by default if specified
     * - `color`: custom icon color of the action item
     * - `style`: pass additional styles for the fab item, for example, `backgroundColor`
     * - `onPress`: callback that is called when `FAB` is pressed (required)
     */
    actions: Array<{
        icon: IconSource;
        label?: string;
        color?: string;
        accessibilityLabel?: string;
        style?: StyleProp<ViewStyle>;
        onPress: () => void;
        testID?: string;
    }>;
    /**
     * Icon to display for the `FAB`.
     * You can toggle it based on whether the speed dial is open to display a different icon.
     */
    icon: IconSource;
    /**
     * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
     */
    accessibilityLabel?: string;
    /**
     * Custom color for the `FAB`.
     */
    color?: string;
    /**
     * Function to execute on pressing the `FAB`.
     */
    onPress?: () => void;
    /**
     * Whether the speed dial is open.
     */
    open: boolean;
    /**
     * Callback which is called on opening and closing the speed dial.
     * The open state needs to be updated when it's called, otherwise the change is dropped.
     */
    onStateChange: (state: {
        open: boolean;
    }) => void;
    /**
     * Whether `FAB` is currently visible.
     */
    visible: boolean;
    /**
     * Style for the group. You can use it to pass additional styles if you need.
     * For example, you can set an additional padding if you have a tab bar at the bottom.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style for the FAB. It allows to pass the FAB button styles, such as backgroundColor.
     */
    fabStyle?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from Group props to FAB.
     */
    testID?: string;
};
declare type State = {
    backdrop: Animated.Value;
    animations: Animated.Value[];
};
/**
 * A component to display a stack of FABs with related actions in a speed dial.
 * To render the group above other components, you'll need to wrap it with the [`Portal`](portal.html) component.
 *
 * <div class="screenshots">
 *   <img src="screenshots/fab-group.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { FAB, Portal, Provider } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [state, setState] = React.useState({ open: false });
 *
 *   const onStateChange = ({ open }) => setState({ open });
 *
 *   const { open } = state;
 *
 *   return (
 *     <Provider>
 *       <Portal>
 *         <FAB.Group
 *           open={open}
 *           icon={open ? 'calendar-today' : 'plus'}
 *           actions={[
 *             { icon: 'plus', onPress: () => console.log('Pressed add') },
 *             {
 *               icon: 'star',
 *               label: 'Star',
 *               onPress: () => console.log('Pressed star'),
 *             },
 *             {
 *               icon: 'email',
 *               label: 'Email',
 *               onPress: () => console.log('Pressed email'),
 *             },
 *             {
 *               icon: 'bell',
 *               label: 'Remind',
 *               onPress: () => console.log('Pressed notifications'),
 *             },
 *           ]}
 *           onStateChange={onStateChange}
 *           onPress={() => {
 *             if (open) {
 *               // do something if the speed dial is open
 *             }
 *           }}
 *         />
 *       </Portal>
 *     </Provider>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
declare class FABGroup extends React.Component<Props, State> {
    static displayName: string;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): {
        animations: Animated.Value[];
    };
    state: State;
    componentDidUpdate(prevProps: Props): void;
    private close;
    private toggle;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "onStateChange" | "fabStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof FABGroup) | (React.FunctionComponent<Props> & typeof FABGroup), {}>) | (React.FunctionComponent<Pick<Props, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "onStateChange" | "fabStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof FABGroup) | (React.FunctionComponent<Props> & typeof FABGroup), {}>);
export default _default;
export { FABGroup };
