import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { Settings } from './settings';
declare type Props = {
    children: React.ReactNode;
    theme?: ReactNativePaper.Theme;
    settings?: Settings;
};
declare type State = {
    colorScheme: ColorSchemeName;
    reduceMotionEnabled: boolean;
};
export default class Provider extends React.Component<Props, State> {
    state: {
        reduceMotionEnabled: boolean;
        colorScheme: "light" | "dark";
    };
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    private handleAppearanceChange;
    private getTheme;
    private updateReduceMotionSettingsInfo;
    render(): JSX.Element;
}
export {};
