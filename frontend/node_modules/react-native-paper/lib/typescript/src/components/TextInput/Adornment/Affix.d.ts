import React from 'react';
import { StyleProp, TextStyle, LayoutChangeEvent, Animated } from 'react-native';
import { AdornmentSide } from './enums';
declare type Props = {
    text: string;
    onLayout?: (event: LayoutChangeEvent) => void;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare type ContextState = {
    topPosition: number | null;
    onLayout?: (event: LayoutChangeEvent) => void;
    visible?: Animated.Value;
    textStyle?: StyleProp<TextStyle>;
    side: AdornmentSide;
};
export declare const AffixAdornment: React.FunctionComponent<{
    affix: React.ReactNode;
    testID: string;
} & ContextState>;
declare const TextInputAffix: {
    ({ text, theme }: Props): JSX.Element;
    displayName: string;
};
declare const _default: (React.ComponentClass<Pick<Props, "text" | "onLayout"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ text, theme }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ text, theme }: Props): JSX.Element;
    displayName: string;
}), {}>) | (React.FunctionComponent<Pick<Props, "text" | "onLayout"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ text, theme }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ text, theme }: Props): JSX.Element;
    displayName: string;
}), {}>);
export default _default;
export { TextInputAffix };
