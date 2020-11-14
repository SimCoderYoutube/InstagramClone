import * as React from 'react';
declare type State = {
    portals: Array<{
        key: number;
        children: React.ReactNode;
    }>;
};
/**
 * Portal host is the component which actually renders all Portals.
 */
export default class PortalManager extends React.PureComponent<{}, State> {
    state: State;
    mount: (key: number, children: React.ReactNode) => void;
    update: (key: number, children: React.ReactNode) => void;
    unmount: (key: number) => void;
    render(): JSX.Element[];
}
export {};
