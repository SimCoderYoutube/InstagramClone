/// <reference types="react" />
import { AppearancePreferences } from './Appearance.types';
export declare const NativeAppearance: {
    readonly name: string;
    readonly initialPreferences: AppearancePreferences;
};
export declare function NativeAppearanceProvider(props: any): JSX.Element;
