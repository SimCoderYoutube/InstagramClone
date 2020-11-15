import * as React from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Text for the title. Note that this will only accept a string or `<Text>`-based node.
     */
    title: React.ReactNode;
    /**
     * Style for the title.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Number of lines for the title.
     */
    titleNumberOfLines?: number;
    /**
     * Text for the subtitle. Note that this will only accept a string or `<Text>`-based node.
     */
    subtitle?: React.ReactNode;
    /**
     * Style for the subtitle.
     */
    subtitleStyle?: StyleProp<TextStyle>;
    /**
     * Number of lines for the subtitle.
     */
    subtitleNumberOfLines?: number;
    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: (props: {
        size: number;
    }) => React.ReactNode;
    /**
     * Style for the left element wrapper.
     */
    leftStyle?: StyleProp<ViewStyle>;
    /**
     * Callback which returns a React element to display on the right side.
     */
    right?: (props: {
        size: number;
    }) => React.ReactNode;
    /**
     * Style for the right element wrapper.
     */
    rightStyle?: StyleProp<ViewStyle>;
    /**
     * @internal
     */
    index?: number;
    /**
     * @internal
     */
    total?: number;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
/**
 * A component to show a title, subtitle and an avatar inside a Card.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/card-title-1.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar, Card, IconButton } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card.Title
 *     title="Card Title"
 *     subtitle="Card Subtitle"
 *     left={(props) => <Avatar.Icon {...props} icon="folder" />}
 *     right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const CardTitle: {
    ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: Props): JSX.Element;
    displayName: string;
};
declare const _default: (React.ComponentClass<Pick<Props, "ref" | "style" | "title" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: Props): JSX.Element;
    displayName: string;
}), {}>) | (React.FunctionComponent<Pick<Props, "ref" | "style" | "title" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: Props): JSX.Element;
    displayName: string;
}), {}>);
export default _default;
export { CardTitle };
