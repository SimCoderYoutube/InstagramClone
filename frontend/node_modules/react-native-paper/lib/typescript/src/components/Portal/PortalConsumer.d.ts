import * as React from 'react';
import type { PortalMethods } from './PortalHost';
declare type Props = {
    manager: PortalMethods;
    children: React.ReactNode;
};
export default class PortalConsumer extends React.Component<Props> {
    componentDidMount(): Promise<void>;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private key;
    private checkManager;
    render(): null;
}
export {};
