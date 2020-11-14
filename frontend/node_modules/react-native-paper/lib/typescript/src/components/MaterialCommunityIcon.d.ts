/// <reference types="react" />
export declare type IconProps = {
    name: string;
    color: string;
    size: number;
    direction: 'rtl' | 'ltr';
    allowFontScaling?: boolean;
};
export declare const accessibilityProps: {
    role: string;
    focusable: boolean;
    accessibilityElementsHidden?: undefined;
    importantForAccessibility?: undefined;
} | {
    accessibilityElementsHidden: boolean;
    importantForAccessibility: "no-hide-descendants";
    role?: undefined;
    focusable?: undefined;
};
declare const defaultIcon: ({ name, color, size, direction, allowFontScaling, }: IconProps) => JSX.Element;
export default defaultIcon;
