import * as React from 'react';
import type { EdgeInsets } from 'react-native-safe-area-context';
import type { Route } from '@react-navigation/native';
import type { Layout, StackHeaderStyleInterpolator, StackHeaderTitleProps, StackHeaderOptions, Scene } from '../../types';
declare type Props = StackHeaderOptions & {
    headerTitle: (props: StackHeaderTitleProps) => React.ReactNode;
    layout: Layout;
    insets: EdgeInsets;
    onGoBack?: () => void;
    title?: string;
    leftLabel?: string;
    scene: Scene<Route<string>>;
    styleInterpolator: StackHeaderStyleInterpolator;
};
declare type State = {
    titleLayout?: Layout;
    leftLabelLayout?: Layout;
};
export declare const getDefaultHeaderHeight: (layout: Layout, statusBarHeight: number) => number;
export default class HeaderSegment extends React.Component<Props, State> {
    state: State;
    private handleTitleLayout;
    private handleLeftLabelLayout;
    private getInterpolatedStyle;
    render(): JSX.Element;
}
export {};
