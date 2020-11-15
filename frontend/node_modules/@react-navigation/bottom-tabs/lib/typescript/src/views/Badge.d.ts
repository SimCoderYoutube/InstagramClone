import { Animated, StyleProp, TextStyle } from 'react-native';
declare type Props = {
    /**
     * Whether the badge is visible
     */
    visible: boolean;
    /**
     * Content of the `Badge`.
     */
    children?: string | number;
    /**
     * Size of the `Badge`.
     */
    size?: number;
    /**
     * Style object for the tab bar container.
     */
    style?: Animated.WithAnimatedValue<StyleProp<TextStyle>>;
};
export default function Badge({ visible, size, children, style, ...rest }: Props): JSX.Element | null;
export {};
