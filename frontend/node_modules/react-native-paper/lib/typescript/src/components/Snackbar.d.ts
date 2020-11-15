import * as React from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';
import Surface from './Surface';
declare type Props = React.ComponentProps<typeof Surface> & {
    /**
     * Whether the Snackbar is currently visible.
     */
    visible: boolean;
    /**
     * Label and press callback for the action button. It should contain the following properties:
     * - `label` - Label of the action button
     * - `onPress` - Callback that is called when action button is pressed.
     */
    action?: {
        label: string;
        accessibilityLabel?: string;
        onPress: () => void;
    };
    /**
     * The duration for which the Snackbar is shown.
     */
    duration?: number;
    /**
     * Callback called when Snackbar is dismissed. The `visible` prop needs to be updated when this is called.
     */
    onDismiss: () => void;
    /**
     * Text content of the Snackbar.
     */
    children: React.ReactNode;
    /**
     * Style for the wrapper of the snackbar
     */
    wrapperStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    ref?: React.RefObject<View>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: (React.ComponentClass<Pick<Props, "ref" | "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "visible" | "onDismiss" | "action" | "duration" | "wrapperStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ visible, action, duration, onDismiss, children, wrapperStyle, style, theme, ...rest }: Props): JSX.Element | null;
    /**
     * Show the Snackbar for a short duration.
     */
    DURATION_SHORT: number;
    /**
     * Show the Snackbar for a medium duration.
     */
    DURATION_MEDIUM: number;
    /**
     * Show the Snackbar for a long duration.
     */
    DURATION_LONG: number;
}) | (React.FunctionComponent<Props> & {
    ({ visible, action, duration, onDismiss, children, wrapperStyle, style, theme, ...rest }: Props): JSX.Element | null;
    /**
     * Show the Snackbar for a short duration.
     */
    DURATION_SHORT: number;
    /**
     * Show the Snackbar for a medium duration.
     */
    DURATION_MEDIUM: number;
    /**
     * Show the Snackbar for a long duration.
     */
    DURATION_LONG: number;
}), {}>) | (React.FunctionComponent<Pick<Props, "ref" | "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "visible" | "onDismiss" | "action" | "duration" | "wrapperStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ visible, action, duration, onDismiss, children, wrapperStyle, style, theme, ...rest }: Props): JSX.Element | null;
    /**
     * Show the Snackbar for a short duration.
     */
    DURATION_SHORT: number;
    /**
     * Show the Snackbar for a medium duration.
     */
    DURATION_MEDIUM: number;
    /**
     * Show the Snackbar for a long duration.
     */
    DURATION_LONG: number;
}) | (React.FunctionComponent<Props> & {
    ({ visible, action, duration, onDismiss, children, wrapperStyle, style, theme, ...rest }: Props): JSX.Element | null;
    /**
     * Show the Snackbar for a short duration.
     */
    DURATION_SHORT: number;
    /**
     * Show the Snackbar for a medium duration.
     */
    DURATION_MEDIUM: number;
    /**
     * Show the Snackbar for a long duration.
     */
    DURATION_LONG: number;
}), {}>);
export default _default;
