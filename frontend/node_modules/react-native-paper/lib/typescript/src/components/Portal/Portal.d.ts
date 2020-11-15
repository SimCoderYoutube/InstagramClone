import * as React from 'react';
import PortalHost from './PortalHost';
declare type Props = {
    /**
     * Content of the `Portal`.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
/**
 * Portal allows to render a component at a different place in the parent tree.
 * You can use it to render content which should appear above other elements, similar to `Modal`.
 * It requires a [`Portal.Host`](portal-host.html) component to be rendered somewhere in the parent tree.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Portal, Text } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Portal>
 *     <Text>This is rendered at a different place</Text>
 *   </Portal>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare class Portal extends React.Component<Props> {
    static Host: typeof PortalHost;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "children"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof Portal) | (React.FunctionComponent<Props> & typeof Portal), {}>) | (React.FunctionComponent<Pick<Props, "children"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof Portal) | (React.FunctionComponent<Props> & typeof Portal), {}>);
export default _default;
