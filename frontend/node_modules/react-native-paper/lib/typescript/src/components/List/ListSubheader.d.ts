import * as React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Text from '../Typography/Text';
declare type Props = React.ComponentProps<typeof Text> & {
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
};
/**
 * A component used to display a header in lists.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => <List.Subheader>My List Title</List.Subheader>;
 *
 * export default MyComponent;
 * ```
 */
declare class ListSubheader extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Pick<import("react-native").TextProps & {
    style?: StyleProp<TextStyle>;
    theme: ReactNativePaper.Theme;
}, "style" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
}, "style" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Pick<import("react-native").TextProps & {
    style?: StyleProp<TextStyle>;
    theme: ReactNativePaper.Theme;
}, "style" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
}, any> & typeof ListSubheader) | (React.FunctionComponent<Pick<import("react-native").TextProps & {
    style?: StyleProp<TextStyle>;
    theme: ReactNativePaper.Theme;
}, "style" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
}> & typeof ListSubheader), {}>) | (React.FunctionComponent<Pick<Pick<import("react-native").TextProps & {
    style?: StyleProp<TextStyle>;
    theme: ReactNativePaper.Theme;
}, "style" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
}, "style" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Pick<import("react-native").TextProps & {
    style?: StyleProp<TextStyle>;
    theme: ReactNativePaper.Theme;
}, "style" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
}, any> & typeof ListSubheader) | (React.FunctionComponent<Pick<import("react-native").TextProps & {
    style?: StyleProp<TextStyle>;
    theme: ReactNativePaper.Theme;
}, "style" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Style that is passed to Text element.
     */
    style?: StyleProp<TextStyle>;
}> & typeof ListSubheader), {}>);
export default _default;
