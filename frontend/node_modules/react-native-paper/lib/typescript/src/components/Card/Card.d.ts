import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Surface from '../Surface';
declare type Props = React.ComponentProps<typeof Surface> & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number;
    /**
     * Function to execute on long press.
     */
    onLongPress?: () => void;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean;
};
declare const _default: (React.ComponentClass<Pick<Props, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "elevation"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ elevation: cardElevation, onLongPress, onPress, children, style, theme, testID, accessible, ...rest }: Props): JSX.Element;
    Content: {
        ({ index, total, siblings, style, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            index?: number | undefined;
            total?: number | undefined;
            siblings?: string[] | undefined;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Actions: {
        (props: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Cover: (React.ComponentClass<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "source" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "source" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
    Title: (React.ComponentClass<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "title" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>;
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>;
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "title" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>;
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>;
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
}) | (React.FunctionComponent<Props> & {
    ({ elevation: cardElevation, onLongPress, onPress, children, style, theme, testID, accessible, ...rest }: Props): JSX.Element;
    Content: {
        ({ index, total, siblings, style, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            index?: number | undefined;
            total?: number | undefined;
            siblings?: string[] | undefined;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Actions: {
        (props: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Cover: (React.ComponentClass<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "source" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "source" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
    Title: (React.ComponentClass<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "title" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>;
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>;
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "title" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>;
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>;
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
}), {}>) | (React.FunctionComponent<Pick<Props, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "elevation"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ elevation: cardElevation, onLongPress, onPress, children, style, theme, testID, accessible, ...rest }: Props): JSX.Element;
    Content: {
        ({ index, total, siblings, style, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            index?: number | undefined;
            total?: number | undefined;
            siblings?: string[] | undefined;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Actions: {
        (props: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Cover: (React.ComponentClass<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "source" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "source" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
    Title: (React.ComponentClass<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "title" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>;
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>;
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "title" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>;
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>;
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
}) | (React.FunctionComponent<Props> & {
    ({ elevation: cardElevation, onLongPress, onPress, children, style, theme, testID, accessible, ...rest }: Props): JSX.Element;
    Content: {
        ({ index, total, siblings, style, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            index?: number | undefined;
            total?: number | undefined;
            siblings?: string[] | undefined;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Actions: {
        (props: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Cover: (React.ComponentClass<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "source" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "source" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ index, total, style, theme, ...rest }: import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
    Title: (React.ComponentClass<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "title" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>;
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>;
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "title" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>;
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ title, titleStyle, titleNumberOfLines, subtitle, subtitleStyle, subtitleNumberOfLines, left, leftStyle, right, rightStyle, style, }: import("react-native").ViewProps & React.RefAttributes<View> & {
            title: React.ReactNode;
            titleStyle?: StyleProp<import("react-native").TextStyle>;
            titleNumberOfLines?: number | undefined;
            subtitle?: React.ReactNode;
            subtitleStyle?: StyleProp<import("react-native").TextStyle>;
            subtitleNumberOfLines?: number | undefined;
            left?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            leftStyle?: StyleProp<ViewStyle>;
            right?: ((props: {
                size: number;
            }) => React.ReactNode) | undefined;
            rightStyle?: StyleProp<ViewStyle>;
            index?: number | undefined;
            total?: number | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
}), {}>);
export default _default;
