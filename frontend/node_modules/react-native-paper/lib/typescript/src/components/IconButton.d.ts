import * as React from 'react';
import { ViewStyle, StyleProp, GestureResponderEvent, TouchableWithoutFeedback } from 'react-native';
import TouchableRipple from './TouchableRipple/TouchableRipple';
import { IconSource } from './Icon';
import type { $RemoveChildren } from '../types';
declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    /**
     * Icon to display.
     */
    icon: IconSource;
    /**
     * Color of the icon.
     */
    color?: string;
    /**
     * Size of the icon.
     */
    size?: number;
    /**
     * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Whether an icon change is animated.
     */
    animated?: boolean;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    style?: StyleProp<ViewStyle>;
    ref?: React.RefObject<TouchableWithoutFeedback>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: (React.ComponentClass<Pick<Props, "ref" | "style" | "color" | "size" | "icon" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "animated"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ icon, color: customColor, size, accessibilityLabel, disabled, onPress, animated, theme, style, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Props> & (({ icon, color: customColor, size, accessibilityLabel, disabled, onPress, animated, theme, style, ...rest }: Props) => JSX.Element)), {}>) | (React.FunctionComponent<Pick<Props, "ref" | "style" | "color" | "size" | "icon" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered" | "animated"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ icon, color: customColor, size, accessibilityLabel, disabled, onPress, animated, theme, style, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Props> & (({ icon, color: customColor, size, accessibilityLabel, disabled, onPress, animated, theme, style, ...rest }: Props) => JSX.Element)), {}>);
export default _default;
