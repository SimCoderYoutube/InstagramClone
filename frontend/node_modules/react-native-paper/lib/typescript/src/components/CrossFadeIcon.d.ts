import * as React from 'react';
import { Animated } from 'react-native';
import { IconSource } from './Icon';
declare type Props = {
    /**
     * Icon to display for the `CrossFadeIcon`.
     */
    source: IconSource;
    /**
     * Color of the icon.
     */
    color: string;
    /**
     * Size of the icon.
     */
    size: number;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare type State = {
    currentIcon: IconSource;
    previousIcon: IconSource | null;
    fade: Animated.Value;
};
declare class CrossFadeIcon extends React.Component<Props, State> {
    static getDerivedStateFromProps(nextProps: Props, nextState: State): {
        currentIcon: IconSource;
        previousIcon: IconSource;
    } | null;
    state: State;
    componentDidUpdate(_: Props, prevState: State): void;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "source" | "color" | "size"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof CrossFadeIcon) | (React.FunctionComponent<Props> & typeof CrossFadeIcon), {}>) | (React.FunctionComponent<Pick<Props, "source" | "color" | "size"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof CrossFadeIcon) | (React.FunctionComponent<Props> & typeof CrossFadeIcon), {}>);
export default _default;
