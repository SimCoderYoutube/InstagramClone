/// <reference types="react" />
declare type Props = {
    toggleTheme: () => void;
    toggleRTL: () => void;
    isRTL: boolean;
    isDarkTheme: boolean;
};
declare const DrawerItems: ({ toggleTheme, toggleRTL, isRTL, isDarkTheme }: Props) => JSX.Element;
export default DrawerItems;
