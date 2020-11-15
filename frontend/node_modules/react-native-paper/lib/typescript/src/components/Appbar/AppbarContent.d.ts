import * as React from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import type { $RemoveChildren } from '../../types';
declare type Props = $RemoveChildren<typeof View> & {
    /**
     * Custom color for the text.
     */
    color?: string;
    /**
     * Text for the title.
     */
    title: React.ReactNode;
    /**
     * Style for the title.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Reference for the title.
     */
    titleRef?: React.RefObject<Text>;
    /**
     * Text for the subtitle.
     */
    subtitle?: React.ReactNode;
    /**
     * Style for the subtitle.
     */
    subtitleStyle?: StyleProp<TextStyle>;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
/**
 * A component used to display a title and optional subtitle in an appbar.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-content.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *        <Appbar.Content title="Title" subtitle={'Subtitle'} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare class AppbarContent extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "style" | "title" | "color" | "onLayout" | "onPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "titleStyle" | "subtitle" | "subtitleStyle" | "titleRef"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof AppbarContent) | (React.FunctionComponent<Props> & typeof AppbarContent), {}>) | (React.FunctionComponent<Pick<Props, "style" | "title" | "color" | "onLayout" | "onPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "titleStyle" | "subtitle" | "subtitleStyle" | "titleRef"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof AppbarContent) | (React.FunctionComponent<Props> & typeof AppbarContent), {}>);
export default _default;
export { AppbarContent };
