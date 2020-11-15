import * as React from 'react';
import { Animated, TextStyle, StyleProp } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof Animated.Text> & {
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
/**
 * Text component which follows styles from the theme.
 *
 * @extends Text props https://facebook.github.io/react-native/docs/text.html#props
 */
declare function AnimatedText({ style, theme, ...rest }: Props): JSX.Element;
declare const _default: (React.ComponentClass<Pick<{
    allowFontScaling?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    ellipsizeMode?: Animated.WithAnimatedValue<"head" | "middle" | "tail" | "clip" | undefined> | undefined;
    lineBreakMode?: Animated.WithAnimatedValue<"head" | "middle" | "tail" | "clip" | undefined> | undefined;
    numberOfLines?: Animated.WithAnimatedValue<number | undefined> | undefined;
    onLayout?: Animated.WithAnimatedValue<((event: import("react-native").LayoutChangeEvent) => void) | undefined> | undefined;
    onPress?: Animated.WithAnimatedValue<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
    onLongPress?: Animated.WithAnimatedValue<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
    style?: Animated.WithAnimatedValue<StyleProp<TextStyle>> | undefined;
    testID?: Animated.WithAnimatedValue<string | undefined> | undefined;
    nativeID?: Animated.WithAnimatedValue<string | undefined> | undefined;
    maxFontSizeMultiplier?: Animated.WithAnimatedValue<number | null | undefined> | undefined;
    adjustsFontSizeToFit?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    minimumFontScale?: Animated.WithAnimatedValue<number | undefined> | undefined;
    suppressHighlighting?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    selectable?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    selectionColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
    textBreakStrategy?: Animated.WithAnimatedValue<"simple" | "highQuality" | "balanced" | undefined> | undefined;
    accessible?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    accessibilityActions?: Animated.WithAnimatedValue<readonly Readonly<{
        name: import("react-native").AccessibilityActionName;
        label?: string | undefined;
    }>[] | undefined> | undefined;
    accessibilityLabel?: Animated.WithAnimatedValue<string | undefined> | undefined;
    accessibilityRole?: Animated.WithAnimatedValue<"button" | "header" | "link" | "menu" | "menuitem" | "summary" | "image" | "switch" | "text" | "search" | "none" | "keyboardkey" | "adjustable" | "imagebutton" | "alert" | "checkbox" | "combobox" | "menubar" | "progressbar" | "radio" | "radiogroup" | "scrollbar" | "spinbutton" | "tab" | "tablist" | "timer" | "toolbar" | undefined> | undefined;
    accessibilityState?: Animated.WithAnimatedValue<import("react-native").AccessibilityState | undefined> | undefined;
    accessibilityHint?: Animated.WithAnimatedValue<string | undefined> | undefined;
    accessibilityValue?: Animated.WithAnimatedValue<import("react-native").AccessibilityValue | undefined> | undefined;
    onAccessibilityAction?: Animated.WithAnimatedValue<((event: import("react-native").AccessibilityActionEvent) => void) | undefined> | undefined;
    accessibilityComponentType?: Animated.WithAnimatedValue<"button" | "none" | "radiobutton_checked" | "radiobutton_unchecked" | undefined> | undefined;
    accessibilityLiveRegion?: Animated.WithAnimatedValue<"none" | "polite" | "assertive" | undefined> | undefined;
    importantForAccessibility?: Animated.WithAnimatedValue<"no-hide-descendants" | "auto" | "yes" | "no" | undefined> | undefined;
    accessibilityElementsHidden?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    accessibilityTraits?: Animated.WithAnimatedValue<"button" | "header" | "link" | "summary" | "image" | "text" | "search" | "none" | "adjustable" | "selected" | "plays" | "key" | "disabled" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | import("react-native").AccessibilityTrait[] | undefined> | undefined;
    accessibilityViewIsModal?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    onAccessibilityEscape?: Animated.WithAnimatedValue<(() => void) | undefined> | undefined;
    onAccessibilityTap?: Animated.WithAnimatedValue<(() => void) | undefined> | undefined;
    onMagicTap?: Animated.WithAnimatedValue<(() => void) | undefined> | undefined;
    accessibilityIgnoresInvertColors?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    ref?: Animated.WithAnimatedValue<((instance: import("react-native").Text | null) => void) | React.RefObject<import("react-native").Text> | null | undefined> | undefined;
    key?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
} & {
    ref?: ((instance: import("react-native").Text | {
        getNode(): import("react-native").Text;
    } | null) => void) | React.RefObject<import("react-native").Text | {
        getNode(): import("react-native").Text;
    }> | null | undefined;
} & {
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
    allowFontScaling?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    ellipsizeMode?: Animated.WithAnimatedValue<"head" | "middle" | "tail" | "clip" | undefined> | undefined;
    lineBreakMode?: Animated.WithAnimatedValue<"head" | "middle" | "tail" | "clip" | undefined> | undefined;
    numberOfLines?: Animated.WithAnimatedValue<number | undefined> | undefined;
    onLayout?: Animated.WithAnimatedValue<((event: import("react-native").LayoutChangeEvent) => void) | undefined> | undefined;
    onPress?: Animated.WithAnimatedValue<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
    onLongPress?: Animated.WithAnimatedValue<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
    style?: Animated.WithAnimatedValue<StyleProp<TextStyle>> | undefined;
    testID?: Animated.WithAnimatedValue<string | undefined> | undefined;
    nativeID?: Animated.WithAnimatedValue<string | undefined> | undefined;
    maxFontSizeMultiplier?: Animated.WithAnimatedValue<number | null | undefined> | undefined;
    adjustsFontSizeToFit?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    minimumFontScale?: Animated.WithAnimatedValue<number | undefined> | undefined;
    suppressHighlighting?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    selectable?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    selectionColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
    textBreakStrategy?: Animated.WithAnimatedValue<"simple" | "highQuality" | "balanced" | undefined> | undefined;
    accessible?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    accessibilityActions?: Animated.WithAnimatedValue<readonly Readonly<{
        name: import("react-native").AccessibilityActionName;
        label?: string | undefined;
    }>[] | undefined> | undefined;
    accessibilityLabel?: Animated.WithAnimatedValue<string | undefined> | undefined;
    accessibilityRole?: Animated.WithAnimatedValue<"button" | "header" | "link" | "menu" | "menuitem" | "summary" | "image" | "switch" | "text" | "search" | "none" | "keyboardkey" | "adjustable" | "imagebutton" | "alert" | "checkbox" | "combobox" | "menubar" | "progressbar" | "radio" | "radiogroup" | "scrollbar" | "spinbutton" | "tab" | "tablist" | "timer" | "toolbar" | undefined> | undefined;
    accessibilityState?: Animated.WithAnimatedValue<import("react-native").AccessibilityState | undefined> | undefined;
    accessibilityHint?: Animated.WithAnimatedValue<string | undefined> | undefined;
    accessibilityValue?: Animated.WithAnimatedValue<import("react-native").AccessibilityValue | undefined> | undefined;
    onAccessibilityAction?: Animated.WithAnimatedValue<((event: import("react-native").AccessibilityActionEvent) => void) | undefined> | undefined;
    accessibilityComponentType?: Animated.WithAnimatedValue<"button" | "none" | "radiobutton_checked" | "radiobutton_unchecked" | undefined> | undefined;
    accessibilityLiveRegion?: Animated.WithAnimatedValue<"none" | "polite" | "assertive" | undefined> | undefined;
    importantForAccessibility?: Animated.WithAnimatedValue<"no-hide-descendants" | "auto" | "yes" | "no" | undefined> | undefined;
    accessibilityElementsHidden?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    accessibilityTraits?: Animated.WithAnimatedValue<"button" | "header" | "link" | "summary" | "image" | "text" | "search" | "none" | "adjustable" | "selected" | "plays" | "key" | "disabled" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | import("react-native").AccessibilityTrait[] | undefined> | undefined;
    accessibilityViewIsModal?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    onAccessibilityEscape?: Animated.WithAnimatedValue<(() => void) | undefined> | undefined;
    onAccessibilityTap?: Animated.WithAnimatedValue<(() => void) | undefined> | undefined;
    onMagicTap?: Animated.WithAnimatedValue<(() => void) | undefined> | undefined;
    accessibilityIgnoresInvertColors?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    ref?: Animated.WithAnimatedValue<((instance: import("react-native").Text | null) => void) | React.RefObject<import("react-native").Text> | null | undefined> | undefined;
    key?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
} & {
    ref?: ((instance: import("react-native").Text | {
        getNode(): import("react-native").Text;
    } | null) => void) | React.RefObject<import("react-native").Text | {
        getNode(): import("react-native").Text;
    }> | null | undefined;
} & {
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, any> & typeof AnimatedText) | (React.FunctionComponent<{
    allowFontScaling?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    ellipsizeMode?: Animated.WithAnimatedValue<"head" | "middle" | "tail" | "clip" | undefined> | undefined;
    lineBreakMode?: Animated.WithAnimatedValue<"head" | "middle" | "tail" | "clip" | undefined> | undefined;
    numberOfLines?: Animated.WithAnimatedValue<number | undefined> | undefined;
    onLayout?: Animated.WithAnimatedValue<((event: import("react-native").LayoutChangeEvent) => void) | undefined> | undefined;
    onPress?: Animated.WithAnimatedValue<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
    onLongPress?: Animated.WithAnimatedValue<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
    style?: Animated.WithAnimatedValue<StyleProp<TextStyle>> | undefined;
    testID?: Animated.WithAnimatedValue<string | undefined> | undefined;
    nativeID?: Animated.WithAnimatedValue<string | undefined> | undefined;
    maxFontSizeMultiplier?: Animated.WithAnimatedValue<number | null | undefined> | undefined;
    adjustsFontSizeToFit?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    minimumFontScale?: Animated.WithAnimatedValue<number | undefined> | undefined;
    suppressHighlighting?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    selectable?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    selectionColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
    textBreakStrategy?: Animated.WithAnimatedValue<"simple" | "highQuality" | "balanced" | undefined> | undefined;
    accessible?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    accessibilityActions?: Animated.WithAnimatedValue<readonly Readonly<{
        name: import("react-native").AccessibilityActionName;
        label?: string | undefined;
    }>[] | undefined> | undefined;
    accessibilityLabel?: Animated.WithAnimatedValue<string | undefined> | undefined;
    accessibilityRole?: Animated.WithAnimatedValue<"button" | "header" | "link" | "menu" | "menuitem" | "summary" | "image" | "switch" | "text" | "search" | "none" | "keyboardkey" | "adjustable" | "imagebutton" | "alert" | "checkbox" | "combobox" | "menubar" | "progressbar" | "radio" | "radiogroup" | "scrollbar" | "spinbutton" | "tab" | "tablist" | "timer" | "toolbar" | undefined> | undefined;
    accessibilityState?: Animated.WithAnimatedValue<import("react-native").AccessibilityState | undefined> | undefined;
    accessibilityHint?: Animated.WithAnimatedValue<string | undefined> | undefined;
    accessibilityValue?: Animated.WithAnimatedValue<import("react-native").AccessibilityValue | undefined> | undefined;
    onAccessibilityAction?: Animated.WithAnimatedValue<((event: import("react-native").AccessibilityActionEvent) => void) | undefined> | undefined;
    accessibilityComponentType?: Animated.WithAnimatedValue<"button" | "none" | "radiobutton_checked" | "radiobutton_unchecked" | undefined> | undefined;
    accessibilityLiveRegion?: Animated.WithAnimatedValue<"none" | "polite" | "assertive" | undefined> | undefined;
    importantForAccessibility?: Animated.WithAnimatedValue<"no-hide-descendants" | "auto" | "yes" | "no" | undefined> | undefined;
    accessibilityElementsHidden?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    accessibilityTraits?: Animated.WithAnimatedValue<"button" | "header" | "link" | "summary" | "image" | "text" | "search" | "none" | "adjustable" | "selected" | "plays" | "key" | "disabled" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | import("react-native").AccessibilityTrait[] | undefined> | undefined;
    accessibilityViewIsModal?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    onAccessibilityEscape?: Animated.WithAnimatedValue<(() => void) | undefined> | undefined;
    onAccessibilityTap?: Animated.WithAnimatedValue<(() => void) | undefined> | undefined;
    onMagicTap?: Animated.WithAnimatedValue<(() => void) | undefined> | undefined;
    accessibilityIgnoresInvertColors?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    ref?: Animated.WithAnimatedValue<((instance: import("react-native").Text | null) => void) | React.RefObject<import("react-native").Text> | null | undefined> | undefined;
    key?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
} & {
    ref?: ((instance: import("react-native").Text | {
        getNode(): import("react-native").Text;
    } | null) => void) | React.RefObject<import("react-native").Text | {
        getNode(): import("react-native").Text;
    }> | null | undefined;
} & {
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & typeof AnimatedText), {}>) | (React.FunctionComponent<Pick<{
    allowFontScaling?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    ellipsizeMode?: Animated.WithAnimatedValue<"head" | "middle" | "tail" | "clip" | undefined> | undefined;
    lineBreakMode?: Animated.WithAnimatedValue<"head" | "middle" | "tail" | "clip" | undefined> | undefined;
    numberOfLines?: Animated.WithAnimatedValue<number | undefined> | undefined;
    onLayout?: Animated.WithAnimatedValue<((event: import("react-native").LayoutChangeEvent) => void) | undefined> | undefined;
    onPress?: Animated.WithAnimatedValue<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
    onLongPress?: Animated.WithAnimatedValue<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
    style?: Animated.WithAnimatedValue<StyleProp<TextStyle>> | undefined;
    testID?: Animated.WithAnimatedValue<string | undefined> | undefined;
    nativeID?: Animated.WithAnimatedValue<string | undefined> | undefined;
    maxFontSizeMultiplier?: Animated.WithAnimatedValue<number | null | undefined> | undefined;
    adjustsFontSizeToFit?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    minimumFontScale?: Animated.WithAnimatedValue<number | undefined> | undefined;
    suppressHighlighting?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    selectable?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    selectionColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
    textBreakStrategy?: Animated.WithAnimatedValue<"simple" | "highQuality" | "balanced" | undefined> | undefined;
    accessible?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    accessibilityActions?: Animated.WithAnimatedValue<readonly Readonly<{
        name: import("react-native").AccessibilityActionName;
        label?: string | undefined;
    }>[] | undefined> | undefined;
    accessibilityLabel?: Animated.WithAnimatedValue<string | undefined> | undefined;
    accessibilityRole?: Animated.WithAnimatedValue<"button" | "header" | "link" | "menu" | "menuitem" | "summary" | "image" | "switch" | "text" | "search" | "none" | "keyboardkey" | "adjustable" | "imagebutton" | "alert" | "checkbox" | "combobox" | "menubar" | "progressbar" | "radio" | "radiogroup" | "scrollbar" | "spinbutton" | "tab" | "tablist" | "timer" | "toolbar" | undefined> | undefined;
    accessibilityState?: Animated.WithAnimatedValue<import("react-native").AccessibilityState | undefined> | undefined;
    accessibilityHint?: Animated.WithAnimatedValue<string | undefined> | undefined;
    accessibilityValue?: Animated.WithAnimatedValue<import("react-native").AccessibilityValue | undefined> | undefined;
    onAccessibilityAction?: Animated.WithAnimatedValue<((event: import("react-native").AccessibilityActionEvent) => void) | undefined> | undefined;
    accessibilityComponentType?: Animated.WithAnimatedValue<"button" | "none" | "radiobutton_checked" | "radiobutton_unchecked" | undefined> | undefined;
    accessibilityLiveRegion?: Animated.WithAnimatedValue<"none" | "polite" | "assertive" | undefined> | undefined;
    importantForAccessibility?: Animated.WithAnimatedValue<"no-hide-descendants" | "auto" | "yes" | "no" | undefined> | undefined;
    accessibilityElementsHidden?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    accessibilityTraits?: Animated.WithAnimatedValue<"button" | "header" | "link" | "summary" | "image" | "text" | "search" | "none" | "adjustable" | "selected" | "plays" | "key" | "disabled" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | import("react-native").AccessibilityTrait[] | undefined> | undefined;
    accessibilityViewIsModal?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    onAccessibilityEscape?: Animated.WithAnimatedValue<(() => void) | undefined> | undefined;
    onAccessibilityTap?: Animated.WithAnimatedValue<(() => void) | undefined> | undefined;
    onMagicTap?: Animated.WithAnimatedValue<(() => void) | undefined> | undefined;
    accessibilityIgnoresInvertColors?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    ref?: Animated.WithAnimatedValue<((instance: import("react-native").Text | null) => void) | React.RefObject<import("react-native").Text> | null | undefined> | undefined;
    key?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
} & {
    ref?: ((instance: import("react-native").Text | {
        getNode(): import("react-native").Text;
    } | null) => void) | React.RefObject<import("react-native").Text | {
        getNode(): import("react-native").Text;
    }> | null | undefined;
} & {
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
    allowFontScaling?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    ellipsizeMode?: Animated.WithAnimatedValue<"head" | "middle" | "tail" | "clip" | undefined> | undefined;
    lineBreakMode?: Animated.WithAnimatedValue<"head" | "middle" | "tail" | "clip" | undefined> | undefined;
    numberOfLines?: Animated.WithAnimatedValue<number | undefined> | undefined;
    onLayout?: Animated.WithAnimatedValue<((event: import("react-native").LayoutChangeEvent) => void) | undefined> | undefined;
    onPress?: Animated.WithAnimatedValue<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
    onLongPress?: Animated.WithAnimatedValue<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
    style?: Animated.WithAnimatedValue<StyleProp<TextStyle>> | undefined;
    testID?: Animated.WithAnimatedValue<string | undefined> | undefined;
    nativeID?: Animated.WithAnimatedValue<string | undefined> | undefined;
    maxFontSizeMultiplier?: Animated.WithAnimatedValue<number | null | undefined> | undefined;
    adjustsFontSizeToFit?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    minimumFontScale?: Animated.WithAnimatedValue<number | undefined> | undefined;
    suppressHighlighting?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    selectable?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    selectionColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
    textBreakStrategy?: Animated.WithAnimatedValue<"simple" | "highQuality" | "balanced" | undefined> | undefined;
    accessible?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    accessibilityActions?: Animated.WithAnimatedValue<readonly Readonly<{
        name: import("react-native").AccessibilityActionName;
        label?: string | undefined;
    }>[] | undefined> | undefined;
    accessibilityLabel?: Animated.WithAnimatedValue<string | undefined> | undefined;
    accessibilityRole?: Animated.WithAnimatedValue<"button" | "header" | "link" | "menu" | "menuitem" | "summary" | "image" | "switch" | "text" | "search" | "none" | "keyboardkey" | "adjustable" | "imagebutton" | "alert" | "checkbox" | "combobox" | "menubar" | "progressbar" | "radio" | "radiogroup" | "scrollbar" | "spinbutton" | "tab" | "tablist" | "timer" | "toolbar" | undefined> | undefined;
    accessibilityState?: Animated.WithAnimatedValue<import("react-native").AccessibilityState | undefined> | undefined;
    accessibilityHint?: Animated.WithAnimatedValue<string | undefined> | undefined;
    accessibilityValue?: Animated.WithAnimatedValue<import("react-native").AccessibilityValue | undefined> | undefined;
    onAccessibilityAction?: Animated.WithAnimatedValue<((event: import("react-native").AccessibilityActionEvent) => void) | undefined> | undefined;
    accessibilityComponentType?: Animated.WithAnimatedValue<"button" | "none" | "radiobutton_checked" | "radiobutton_unchecked" | undefined> | undefined;
    accessibilityLiveRegion?: Animated.WithAnimatedValue<"none" | "polite" | "assertive" | undefined> | undefined;
    importantForAccessibility?: Animated.WithAnimatedValue<"no-hide-descendants" | "auto" | "yes" | "no" | undefined> | undefined;
    accessibilityElementsHidden?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    accessibilityTraits?: Animated.WithAnimatedValue<"button" | "header" | "link" | "summary" | "image" | "text" | "search" | "none" | "adjustable" | "selected" | "plays" | "key" | "disabled" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | import("react-native").AccessibilityTrait[] | undefined> | undefined;
    accessibilityViewIsModal?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    onAccessibilityEscape?: Animated.WithAnimatedValue<(() => void) | undefined> | undefined;
    onAccessibilityTap?: Animated.WithAnimatedValue<(() => void) | undefined> | undefined;
    onMagicTap?: Animated.WithAnimatedValue<(() => void) | undefined> | undefined;
    accessibilityIgnoresInvertColors?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    ref?: Animated.WithAnimatedValue<((instance: import("react-native").Text | null) => void) | React.RefObject<import("react-native").Text> | null | undefined> | undefined;
    key?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
} & {
    ref?: ((instance: import("react-native").Text | {
        getNode(): import("react-native").Text;
    } | null) => void) | React.RefObject<import("react-native").Text | {
        getNode(): import("react-native").Text;
    }> | null | undefined;
} & {
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, any> & typeof AnimatedText) | (React.FunctionComponent<{
    allowFontScaling?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    ellipsizeMode?: Animated.WithAnimatedValue<"head" | "middle" | "tail" | "clip" | undefined> | undefined;
    lineBreakMode?: Animated.WithAnimatedValue<"head" | "middle" | "tail" | "clip" | undefined> | undefined;
    numberOfLines?: Animated.WithAnimatedValue<number | undefined> | undefined;
    onLayout?: Animated.WithAnimatedValue<((event: import("react-native").LayoutChangeEvent) => void) | undefined> | undefined;
    onPress?: Animated.WithAnimatedValue<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
    onLongPress?: Animated.WithAnimatedValue<((event: import("react-native").GestureResponderEvent) => void) | undefined> | undefined;
    style?: Animated.WithAnimatedValue<StyleProp<TextStyle>> | undefined;
    testID?: Animated.WithAnimatedValue<string | undefined> | undefined;
    nativeID?: Animated.WithAnimatedValue<string | undefined> | undefined;
    maxFontSizeMultiplier?: Animated.WithAnimatedValue<number | null | undefined> | undefined;
    adjustsFontSizeToFit?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    minimumFontScale?: Animated.WithAnimatedValue<number | undefined> | undefined;
    suppressHighlighting?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    selectable?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    selectionColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
    textBreakStrategy?: Animated.WithAnimatedValue<"simple" | "highQuality" | "balanced" | undefined> | undefined;
    accessible?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    accessibilityActions?: Animated.WithAnimatedValue<readonly Readonly<{
        name: import("react-native").AccessibilityActionName;
        label?: string | undefined;
    }>[] | undefined> | undefined;
    accessibilityLabel?: Animated.WithAnimatedValue<string | undefined> | undefined;
    accessibilityRole?: Animated.WithAnimatedValue<"button" | "header" | "link" | "menu" | "menuitem" | "summary" | "image" | "switch" | "text" | "search" | "none" | "keyboardkey" | "adjustable" | "imagebutton" | "alert" | "checkbox" | "combobox" | "menubar" | "progressbar" | "radio" | "radiogroup" | "scrollbar" | "spinbutton" | "tab" | "tablist" | "timer" | "toolbar" | undefined> | undefined;
    accessibilityState?: Animated.WithAnimatedValue<import("react-native").AccessibilityState | undefined> | undefined;
    accessibilityHint?: Animated.WithAnimatedValue<string | undefined> | undefined;
    accessibilityValue?: Animated.WithAnimatedValue<import("react-native").AccessibilityValue | undefined> | undefined;
    onAccessibilityAction?: Animated.WithAnimatedValue<((event: import("react-native").AccessibilityActionEvent) => void) | undefined> | undefined;
    accessibilityComponentType?: Animated.WithAnimatedValue<"button" | "none" | "radiobutton_checked" | "radiobutton_unchecked" | undefined> | undefined;
    accessibilityLiveRegion?: Animated.WithAnimatedValue<"none" | "polite" | "assertive" | undefined> | undefined;
    importantForAccessibility?: Animated.WithAnimatedValue<"no-hide-descendants" | "auto" | "yes" | "no" | undefined> | undefined;
    accessibilityElementsHidden?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    accessibilityTraits?: Animated.WithAnimatedValue<"button" | "header" | "link" | "summary" | "image" | "text" | "search" | "none" | "adjustable" | "selected" | "plays" | "key" | "disabled" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | import("react-native").AccessibilityTrait[] | undefined> | undefined;
    accessibilityViewIsModal?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    onAccessibilityEscape?: Animated.WithAnimatedValue<(() => void) | undefined> | undefined;
    onAccessibilityTap?: Animated.WithAnimatedValue<(() => void) | undefined> | undefined;
    onMagicTap?: Animated.WithAnimatedValue<(() => void) | undefined> | undefined;
    accessibilityIgnoresInvertColors?: Animated.WithAnimatedValue<boolean | undefined> | undefined;
    ref?: Animated.WithAnimatedValue<((instance: import("react-native").Text | null) => void) | React.RefObject<import("react-native").Text> | null | undefined> | undefined;
    key?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
} & {
    ref?: ((instance: import("react-native").Text | {
        getNode(): import("react-native").Text;
    } | null) => void) | React.RefObject<import("react-native").Text | {
        getNode(): import("react-native").Text;
    }> | null | undefined;
} & {
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & typeof AnimatedText), {}>);
export default _default;
