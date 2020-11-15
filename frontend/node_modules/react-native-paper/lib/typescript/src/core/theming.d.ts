/// <reference types="react" />
export declare const ThemeProvider: import("react").ComponentType<{
    theme?: ReactNativePaper.Theme | undefined;
}>, withTheme: <Props extends {
    theme: ReactNativePaper.Theme;
}, C>(WrappedComponent: (import("react").ComponentClass<Props, any> & C) | (import("react").FunctionComponent<Props> & C)) => (import("react").ComponentClass<Pick<Props, Exclude<keyof Props, "theme">> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & C) | (import("react").FunctionComponent<Props> & C), {}>) | (import("react").FunctionComponent<Pick<Props, Exclude<keyof Props, "theme">> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(import("react").ComponentClass<Props, any> & C) | (import("react").FunctionComponent<Props> & C), {}>), useTheme: (overrides?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined) => ReactNativePaper.Theme;
