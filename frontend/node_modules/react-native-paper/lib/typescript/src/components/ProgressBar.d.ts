import * as React from 'react';
import { Animated, View, ViewStyle, StyleProp } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Progress value (between 0 and 1).
     */
    progress?: number;
    /**
     * Color of the progress bar. The background color will be calculated based on this but you can change it by passing `backgroundColor` to `style` prop.
     */
    color?: string;
    /**
     * If the progress bar will show indeterminate progress.
     */
    indeterminate?: boolean;
    /**
     * Whether to show the ProgressBar (true, the default) or hide it (false).
     */
    visible?: boolean;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare type State = {
    width: number;
    fade: Animated.Value;
    timer: Animated.Value;
};
/**
 * Progress bar is an indicator used to present progress of some activity in the app.
 *
 * <div class="screenshots">
 *   <img src="screenshots/progress-bar.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ProgressBar, Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <ProgressBar progress={0.5} color={Colors.red800} />
 * );
 *
 * export default MyComponent;
 * ```
 */
declare class ProgressBar extends React.Component<Props, State> {
    static defaultProps: {
        visible: boolean;
        progress: number;
    };
    state: {
        width: number;
        timer: Animated.Value;
        fade: Animated.Value;
    };
    indeterminateAnimation: Animated.CompositeAnimation | null;
    componentDidUpdate(prevProps: Props): void;
    private onLayout;
    private startAnimation;
    private stopAnimation;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "ref" | "progress" | "style" | "color" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "visible" | "indeterminate"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof ProgressBar) | (React.FunctionComponent<Props> & typeof ProgressBar), {}>) | (React.FunctionComponent<Pick<Props, "ref" | "progress" | "style" | "color" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "visible" | "indeterminate"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof ProgressBar) | (React.FunctionComponent<Props> & typeof ProgressBar), {}>);
export default _default;
