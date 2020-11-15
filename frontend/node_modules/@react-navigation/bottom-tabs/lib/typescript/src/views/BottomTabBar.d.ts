import type { BottomTabBarProps } from '../types';
declare type Props = BottomTabBarProps & {
    activeTintColor?: string;
    inactiveTintColor?: string;
};
export default function BottomTabBar({ state, navigation, descriptors, activeBackgroundColor, activeTintColor, adaptive, allowFontScaling, inactiveBackgroundColor, inactiveTintColor, keyboardHidesTabBar, labelPosition, labelStyle, iconStyle, safeAreaInsets, showLabel, style, tabStyle, }: Props): JSX.Element;
export {};
