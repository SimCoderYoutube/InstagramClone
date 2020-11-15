import * as React from 'react';
declare type Props = {
    children: React.ReactNode;
};
export declare type PortalMethods = {
    mount: (children: React.ReactNode) => number;
    update: (key: number, children: React.ReactNode) => void;
    unmount: (key: number) => void;
};
export declare const PortalContext: React.Context<PortalMethods>;
/**
 * Portal host renders all of its children `Portal` elements.
 * For example, you can wrap a screen in `Portal.Host` to render items above the screen.
 * If you're using the `Provider` component, it already includes `Portal.Host`.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Text } from 'react-native';
 * import { Portal } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Portal.Host>
 *     <Text>Content of the app</Text>
 *   </Portal.Host>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * Here any `Portal` elements under `<App />` are rendered alongside `<App />` and will appear above `<App />` like a `Modal`.
 */
export default class PortalHost extends React.Component<Props> {
    static displayName: string;
    componentDidMount(): void;
    private setManager;
    private mount;
    private update;
    private unmount;
    private nextKey;
    private queue;
    private manager;
    render(): JSX.Element;
}
export {};
