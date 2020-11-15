import * as React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Title from '../Typography/Title';
declare type Props = React.ComponentPropsWithRef<typeof Title> & {
    /**
     * Title text for the `DialogTitle`.
     */
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
/**
 * A component to show a title in a Dialog.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/dialog-title.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Paragraph, Dialog, Portal } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const hideDialog = () => setVisible(false);
 *
 *   return (
 *     <Portal>
 *       <Dialog visible={visible} onDismiss={hideDialog}>
 *         <Dialog.Title>This is a title</Dialog.Title>
 *         <Dialog.Content>
 *           <Paragraph>This is simple dialog</Paragraph>
 *         </Dialog.Content>
 *       </Dialog>
 *     </Portal>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
declare const DialogTitle: {
    ({ children, theme, style, ...rest }: Props): JSX.Element;
    displayName: string;
};
declare const _default: (React.ComponentClass<Pick<Props, "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ children, theme, style, ...rest }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ children, theme, style, ...rest }: Props): JSX.Element;
    displayName: string;
}), {}>) | (React.FunctionComponent<Pick<Props, "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ children, theme, style, ...rest }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ children, theme, style, ...rest }: Props): JSX.Element;
    displayName: string;
}), {}>);
export default _default;
export { DialogTitle };
