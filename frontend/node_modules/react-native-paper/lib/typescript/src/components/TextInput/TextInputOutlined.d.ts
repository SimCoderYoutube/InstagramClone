import * as React from 'react';
import type { RenderProps, ChildTextInputProps } from './types';
declare class TextInputOutlined extends React.Component<ChildTextInputProps> {
    static defaultProps: {
        disabled: boolean;
        error: boolean;
        multiline: boolean;
        editable: boolean;
        render: (props: RenderProps) => JSX.Element;
    };
    render(): JSX.Element;
}
export default TextInputOutlined;
