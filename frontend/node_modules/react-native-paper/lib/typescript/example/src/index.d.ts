/// <reference types="react" />
declare global {
    namespace ReactNativePaper {
        interface ThemeFonts {
            superLight: ThemeFont;
        }
        interface ThemeColors {
            customColor: string;
        }
        interface ThemeAnimation {
            customProperty: number;
        }
        interface Theme {
            userDefinedThemeProperty: string;
        }
    }
}
export default function PaperExample(): JSX.Element | null;
