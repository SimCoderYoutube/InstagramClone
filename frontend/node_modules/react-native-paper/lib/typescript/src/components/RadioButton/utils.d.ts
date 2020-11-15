export declare const handlePress: ({ onPress, value, onValueChange, }: {
    onPress?: (() => void) | undefined;
    value: string;
    onValueChange?: ((value: string) => void) | undefined;
}) => void;
export declare const isChecked: ({ value, status, contextValue, }: {
    value: string;
    status?: "checked" | "unchecked" | undefined;
    contextValue?: string | undefined;
}) => "checked" | "unchecked" | undefined;
