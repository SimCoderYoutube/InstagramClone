import * as React from 'react';
import type { NavigationState, PartialState } from '@react-navigation/routers';
declare const _default: React.Context<{
    isDefault?: true | undefined;
    state?: Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }> | PartialState<Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>> | undefined;
    getKey: () => string | undefined;
    setKey: (key: string) => void;
    getState: () => NavigationState | PartialState<NavigationState> | undefined;
    setState: (state: NavigationState | PartialState<NavigationState> | undefined) => void;
    getIsInitial: () => boolean;
    addOptionsGetter?: ((key: string, getter: () => object | undefined | null) => void) | undefined;
}>;
export default _default;
