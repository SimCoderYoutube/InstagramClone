import * as React from 'react';
import { BackgroundPropType, StyleProp, TouchableWithoutFeedback, ViewStyle } from 'react-native';
declare type Props = React.ComponentProps<typeof TouchableWithoutFeedback> & {
    borderless?: boolean;
    background?: BackgroundPropType;
    disabled?: boolean;
    onPress?: () => void | null;
    rippleColor?: string;
    underlayColor?: string;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: ReactNativePaper.Theme;
};
declare const _default: (React.ComponentClass<Pick<Props, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ style, background, borderless, disabled: disabledProp, rippleColor, underlayColor, children, theme, ...rest }: Props): JSX.Element;
    supported: boolean;
}) | (React.FunctionComponent<Props> & {
    ({ style, background, borderless, disabled: disabledProp, rippleColor, underlayColor, children, theme, ...rest }: Props): JSX.Element;
    supported: boolean;
}), {}>) | (React.FunctionComponent<Pick<Props, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ style, background, borderless, disabled: disabledProp, rippleColor, underlayColor, children, theme, ...rest }: Props): JSX.Element;
    supported: boolean;
}) | (React.FunctionComponent<Props> & {
    ({ style, background, borderless, disabled: disabledProp, rippleColor, underlayColor, children, theme, ...rest }: Props): JSX.Element;
    supported: boolean;
}), {}>);
export default _default;
