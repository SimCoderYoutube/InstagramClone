export declare type ColorSchemeName = 'light' | 'dark' | 'no-preference';
export interface AppearancePreferences {
    colorScheme: ColorSchemeName;
}
export declare type AppearanceListener = (preferences: AppearancePreferences) => void;
