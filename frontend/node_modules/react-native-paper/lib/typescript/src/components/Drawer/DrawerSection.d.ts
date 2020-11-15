import * as React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Title to show as the header for the section.
     */
    title?: string;
    /**
     * Content of the `Drawer.Section`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: (React.ComponentClass<Pick<Props, "ref" | "style" | "title" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    /**
     * A component to group content inside a navigation drawer.
     *
     * <div class="screenshots">
     *   <figure>
     *     <img class="medium" src="screenshots/drawer-section.png" />
     *   </figure>
     * </div>
     *
     * ## Usage
     * ```js
     * import * as React from 'react';
     * import { Drawer } from 'react-native-paper';
     *
     * const MyComponent = () => {
     *   const [active, setActive] = React.useState('');
     *
     *
     *   return (
     *     <Drawer.Section title="Some title">
     *       <Drawer.Item
     *         label="First Item"
     *         active={active === 'first'}
     *         onPress={() => setActive('first')}
     *       />
     *       <Drawer.Item
     *         label="Second Item"
     *         active={active === 'second'}
     *         onPress={() => setActive('second')}
     *       />
     *     </Drawer.Section>
     *   );
     * };
     *
     * export default MyComponent;
     * ```
     */
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ children, title, theme, style, ...rest }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ children, title, theme, style, ...rest }: Props): JSX.Element;
    displayName: string;
}), {}>) | (React.FunctionComponent<Pick<Props, "ref" | "style" | "title" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    /**
     * A component to group content inside a navigation drawer.
     *
     * <div class="screenshots">
     *   <figure>
     *     <img class="medium" src="screenshots/drawer-section.png" />
     *   </figure>
     * </div>
     *
     * ## Usage
     * ```js
     * import * as React from 'react';
     * import { Drawer } from 'react-native-paper';
     *
     * const MyComponent = () => {
     *   const [active, setActive] = React.useState('');
     *
     *
     *   return (
     *     <Drawer.Section title="Some title">
     *       <Drawer.Item
     *         label="First Item"
     *         active={active === 'first'}
     *         onPress={() => setActive('first')}
     *       />
     *       <Drawer.Item
     *         label="Second Item"
     *         active={active === 'second'}
     *         onPress={() => setActive('second')}
     *       />
     *     </Drawer.Section>
     *   );
     * };
     *
     * export default MyComponent;
     * ```
     */
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ children, title, theme, style, ...rest }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ children, title, theme, style, ...rest }: Props): JSX.Element;
    displayName: string;
}), {}>);
export default _default;
