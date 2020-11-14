import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import type { Route } from '@react-navigation/native';
declare type Props = {
    route: Route<string>;
    horizontal: boolean;
    badge?: string | number;
    activeOpacity: number;
    inactiveOpacity: number;
    activeTintColor: string;
    inactiveTintColor: string;
    renderIcon: (props: {
        focused: boolean;
        color: string;
        size: number;
    }) => React.ReactNode;
    style: StyleProp<ViewStyle>;
};
export default function TabBarIcon({ horizontal, badge, activeOpacity, inactiveOpacity, activeTintColor, inactiveTintColor, renderIcon, style, }: Props): JSX.Element;
export {};
