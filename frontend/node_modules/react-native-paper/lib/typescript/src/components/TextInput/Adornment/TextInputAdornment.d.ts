import React from 'react';
import { LayoutChangeEvent, TextStyle, StyleProp, Animated } from 'react-native';
import type { AdornmentConfig, AdornmentStyleAdjustmentForNativeInput } from './types';
import { AdornmentSide, AdornmentType } from './enums';
export declare function getAdornmentConfig({ left, right, }: {
    left?: React.ReactNode;
    right?: React.ReactNode;
}): Array<AdornmentConfig>;
export declare function getAdornmentStyleAdjustmentForNativeInput({ adornmentConfig, leftAffixWidth, rightAffixWidth, inputOffset, }: {
    inputOffset?: number;
    adornmentConfig: AdornmentConfig[];
    leftAffixWidth: number;
    rightAffixWidth: number;
}): AdornmentStyleAdjustmentForNativeInput | {};
export interface TextInputAdornmentProps {
    forceFocus: () => void;
    adornmentConfig: AdornmentConfig[];
    topPosition: {
        [AdornmentType.Affix]: {
            [AdornmentSide.Left]: number | null;
            [AdornmentSide.Right]: number | null;
        };
        [AdornmentType.Icon]: number;
    };
    onAffixChange: {
        [AdornmentSide.Left]: (event: LayoutChangeEvent) => void;
        [AdornmentSide.Right]: (event: LayoutChangeEvent) => void;
    };
    left?: React.ReactNode;
    right?: React.ReactNode;
    textStyle?: StyleProp<TextStyle>;
    visible?: Animated.Value;
    isTextInputFocused: boolean;
}
declare const TextInputAdornment: React.FunctionComponent<TextInputAdornmentProps>;
export default TextInputAdornment;
