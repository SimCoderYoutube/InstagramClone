import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type Props = {
    /**
     * Determines whether clicking outside the dialog dismiss it.
     */
    dismissable?: boolean;
    /**
     * Callback that is called when the user dismisses the dialog.
     */
    onDismiss?: () => void;
    /**
     * Determines Whether the dialog is visible.
     */
    visible: boolean;
    /**
     * Content of the `Dialog`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: (React.ComponentClass<Pick<Props, "style" | "children" | "visible" | "dismissable" | "onDismiss"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ children, dismissable, onDismiss, visible, style, theme, }: Props): JSX.Element;
    Content: {
        (props: import("react-native").ViewProps & React.RefAttributes<import("react-native").View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Actions: {
        (props: import("react-native").ViewProps & React.RefAttributes<import("react-native").View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Title: (React.ComponentClass<Pick<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }, "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ children, theme, style, ...rest }: import("react-native").TextProps & {
            children: React.ReactNode;
        } & {
            children: React.ReactNode;
            style?: StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ children, theme, style, ...rest }: import("react-native").TextProps & {
            children: React.ReactNode;
        } & {
            children: React.ReactNode;
            style?: StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }, "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ children, theme, style, ...rest }: import("react-native").TextProps & {
            children: React.ReactNode;
        } & {
            children: React.ReactNode;
            style?: StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ children, theme, style, ...rest }: import("react-native").TextProps & {
            children: React.ReactNode;
        } & {
            children: React.ReactNode;
            style?: StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
    ScrollArea: {
        (props: import("react-native").ViewProps & React.RefAttributes<import("react-native").View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
}) | (React.FunctionComponent<Props> & {
    ({ children, dismissable, onDismiss, visible, style, theme, }: Props): JSX.Element;
    Content: {
        (props: import("react-native").ViewProps & React.RefAttributes<import("react-native").View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Actions: {
        (props: import("react-native").ViewProps & React.RefAttributes<import("react-native").View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Title: (React.ComponentClass<Pick<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }, "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ children, theme, style, ...rest }: import("react-native").TextProps & {
            children: React.ReactNode;
        } & {
            children: React.ReactNode;
            style?: StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ children, theme, style, ...rest }: import("react-native").TextProps & {
            children: React.ReactNode;
        } & {
            children: React.ReactNode;
            style?: StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }, "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ children, theme, style, ...rest }: import("react-native").TextProps & {
            children: React.ReactNode;
        } & {
            children: React.ReactNode;
            style?: StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ children, theme, style, ...rest }: import("react-native").TextProps & {
            children: React.ReactNode;
        } & {
            children: React.ReactNode;
            style?: StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
    ScrollArea: {
        (props: import("react-native").ViewProps & React.RefAttributes<import("react-native").View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
}), {}>) | (React.FunctionComponent<Pick<Props, "style" | "children" | "visible" | "dismissable" | "onDismiss"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ children, dismissable, onDismiss, visible, style, theme, }: Props): JSX.Element;
    Content: {
        (props: import("react-native").ViewProps & React.RefAttributes<import("react-native").View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Actions: {
        (props: import("react-native").ViewProps & React.RefAttributes<import("react-native").View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Title: (React.ComponentClass<Pick<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }, "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ children, theme, style, ...rest }: import("react-native").TextProps & {
            children: React.ReactNode;
        } & {
            children: React.ReactNode;
            style?: StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ children, theme, style, ...rest }: import("react-native").TextProps & {
            children: React.ReactNode;
        } & {
            children: React.ReactNode;
            style?: StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }, "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ children, theme, style, ...rest }: import("react-native").TextProps & {
            children: React.ReactNode;
        } & {
            children: React.ReactNode;
            style?: StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ children, theme, style, ...rest }: import("react-native").TextProps & {
            children: React.ReactNode;
        } & {
            children: React.ReactNode;
            style?: StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
    ScrollArea: {
        (props: import("react-native").ViewProps & React.RefAttributes<import("react-native").View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
}) | (React.FunctionComponent<Props> & {
    ({ children, dismissable, onDismiss, visible, style, theme, }: Props): JSX.Element;
    Content: {
        (props: import("react-native").ViewProps & React.RefAttributes<import("react-native").View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Actions: {
        (props: import("react-native").ViewProps & React.RefAttributes<import("react-native").View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Title: (React.ComponentClass<Pick<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }, "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ children, theme, style, ...rest }: import("react-native").TextProps & {
            children: React.ReactNode;
        } & {
            children: React.ReactNode;
            style?: StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ children, theme, style, ...rest }: import("react-native").TextProps & {
            children: React.ReactNode;
        } & {
            children: React.ReactNode;
            style?: StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }, "style" | "children" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ children, theme, style, ...rest }: import("react-native").TextProps & {
            children: React.ReactNode;
        } & {
            children: React.ReactNode;
            style?: StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").TextProps & {
        children: React.ReactNode;
    } & {
        children: React.ReactNode;
        style?: StyleProp<import("react-native").TextStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ children, theme, style, ...rest }: import("react-native").TextProps & {
            children: React.ReactNode;
        } & {
            children: React.ReactNode;
            style?: StyleProp<import("react-native").TextStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
    ScrollArea: {
        (props: import("react-native").ViewProps & React.RefAttributes<import("react-native").View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
}), {}>);
export default _default;
