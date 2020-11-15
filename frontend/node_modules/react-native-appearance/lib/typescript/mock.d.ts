/// <reference types="react" />
import { AppearancePreferences, ColorSchemeName, AppearanceListener } from './Appearance.types';
interface FakeEventSubscription {
    remove: () => void;
}
export declare class Appearance {
    static getColorScheme(): ColorSchemeName;
    static set(_preferences: AppearancePreferences): void;
    static addChangeListener(_listener: AppearanceListener): FakeEventSubscription;
    /**
     * Unused: some people might expect to remove the listener like this, but they shouldn't.
     */
    static removeChangeListener(_listener: AppearanceListener): void;
}
export declare const AppearanceProvider: (props: any) => JSX.Element;
export declare function useColorScheme(): ColorSchemeName;
export {};
