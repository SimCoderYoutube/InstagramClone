/// <reference types="react" />
import { NativeSyntheticEvent, StyleProp, ViewProps, ViewStyle } from 'react-native';
export declare type Edge = 'top' | 'right' | 'bottom' | 'left';
export interface EdgeInsets {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface Metrics {
    insets: EdgeInsets;
    frame: Rect;
}
export declare type InsetChangedEvent = NativeSyntheticEvent<Metrics>;
export declare type InsetChangeNativeCallback = (event: InsetChangedEvent) => void;
export interface NativeSafeAreaProviderProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    onInsetsChange: InsetChangeNativeCallback;
}
export declare type NativeSafeAreaViewProps = ViewProps & {
    children?: React.ReactNode;
    mode?: 'padding' | 'margin';
    edges?: readonly Edge[];
};
