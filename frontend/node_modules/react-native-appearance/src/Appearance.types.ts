export type ColorSchemeName = 'light' | 'dark' | 'no-preference';

export interface AppearancePreferences {
  colorScheme: ColorSchemeName;
}

export type AppearanceListener = (preferences: AppearancePreferences) => void;