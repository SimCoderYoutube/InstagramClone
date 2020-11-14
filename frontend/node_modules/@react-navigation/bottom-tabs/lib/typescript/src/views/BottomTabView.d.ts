import * as React from 'react';
import { TabNavigationState } from '@react-navigation/native';
import type { BottomTabNavigationConfig, BottomTabDescriptorMap, BottomTabNavigationHelpers } from '../types';
declare type Props = BottomTabNavigationConfig & {
    state: TabNavigationState;
    navigation: BottomTabNavigationHelpers;
    descriptors: BottomTabDescriptorMap;
};
declare type State = {
    loaded: number[];
};
export default class BottomTabView extends React.Component<Props, State> {
    static defaultProps: {
        lazy: boolean;
    };
    static getDerivedStateFromProps(nextProps: Props, prevState: State): {
        loaded: number[];
    };
    state: {
        loaded: number[];
    };
    private renderTabBar;
    render(): JSX.Element;
}
export {};
