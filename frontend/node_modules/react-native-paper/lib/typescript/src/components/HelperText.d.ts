import * as React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import AnimatedText from './Typography/AnimatedText';
import type { $Omit } from '../types';
declare type Props = $Omit<$Omit<React.ComponentPropsWithRef<typeof AnimatedText>, 'padding'>, 'type'> & {
    /**
     * Type of the helper text.
     */
    type: 'error' | 'info';
    /**
     * Whether to display the helper text.
     */
    visible?: boolean;
    /**
     * Whether to apply padding to the helper text.
     */
    padding?: 'none' | 'normal';
    /**
     * Text content of the HelperText.
     */
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
};
declare const _default: (React.ComponentClass<Pick<Props, "ref" | "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "type" | "padding" | "visible"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ style, type, visible, theme, onLayout, padding, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Props> & (({ style, type, visible, theme, onLayout, padding, ...rest }: Props) => JSX.Element)), {}>) | (React.FunctionComponent<Pick<Props, "ref" | "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "type" | "padding" | "visible"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ style, type, visible, theme, onLayout, padding, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Props> & (({ style, type, visible, theme, onLayout, padding, ...rest }: Props) => JSX.Element)), {}>);
export default _default;
