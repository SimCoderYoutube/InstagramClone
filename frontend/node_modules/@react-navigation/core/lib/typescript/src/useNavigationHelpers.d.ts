import { NavigationAction, NavigationState, Router } from '@react-navigation/routers';
import type { NavigationEventEmitter } from './useEventEmitter';
import { NavigationProp, PrivateValueStore } from './types';
declare type Options<State extends NavigationState, Action extends NavigationAction> = {
    onAction: (action: NavigationAction, visitedNavigators?: Set<string>) => boolean;
    getState: () => State;
    emitter: NavigationEventEmitter<any>;
    router: Router<State, Action>;
};
/**
 * Navigation object with helper methods to be used by a navigator.
 * This object includes methods for common actions as well as methods the parent screen's navigation object.
 */
export default function useNavigationHelpers<State extends NavigationState, Action extends NavigationAction, EventMap extends Record<string, any>>({ onAction, getState, emitter, router }: Options<State, Action>): {
    dispatch(action: Readonly<{
        type: string;
        payload?: object | undefined;
        source?: string | undefined;
        target?: string | undefined;
    }> | ((state: Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | import("@react-navigation/routers").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>) => Readonly<{
        type: string;
        payload?: object | undefined;
        source?: string | undefined;
        target?: string | undefined;
    }>)): void;
    navigate<RouteName extends string>(...args: [RouteName] | [RouteName, object | undefined]): void;
    navigate<RouteName_1 extends string>(route: {
        key: string;
        params?: object | undefined;
    } | {
        name: RouteName_1;
        key?: string | undefined;
        params: object | undefined;
    }): void;
    reset(state: Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | import("@react-navigation/routers").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }> | import("@react-navigation/routers").PartialState<Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | import("@react-navigation/routers").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>>): void;
    goBack(): void;
    isFocused(): boolean;
    canGoBack(): boolean;
    dangerouslyGetParent<T = NavigationProp<Record<string, object | undefined>, string, Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | import("@react-navigation/routers").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>, {}, {}> | undefined>(): T;
    dangerouslyGetState(): Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | import("@react-navigation/routers").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>;
} & PrivateValueStore<Record<string, object | undefined>, string, {}> & import("./types").EventEmitter<EventMap> & {
    setParams<RouteName_2 extends string>(params: object | undefined): void;
} & {
    dispatch(action: Readonly<{
        type: string;
        payload?: object | undefined;
        source?: string | undefined;
        target?: string | undefined;
    }> | ((state: any) => Readonly<{
        type: string;
        payload?: object | undefined;
        source?: string | undefined;
        target?: string | undefined;
    }>)): void;
    navigate<RouteName_3 extends string>(...args: [RouteName_3] | [RouteName_3, object | undefined]): void;
    navigate<RouteName_4 extends string>(route: {
        key: string;
        params?: object | undefined;
    } | {
        name: RouteName_4;
        key?: string | undefined;
        params: object | undefined;
    }): void;
    reset(state: any): void;
    goBack(): void;
    isFocused(): boolean;
    canGoBack(): boolean;
    dangerouslyGetParent<T_1 = NavigationProp<Record<string, object | undefined>, string, Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | import("@react-navigation/routers").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>, {}, {}> | undefined>(): T_1;
    dangerouslyGetState(): any;
} & {
    setParams(params: object | undefined): void;
    setOptions(options: Partial<any>): void;
} & import("./types").EventConsumer<any> & PrivateValueStore<Record<string, object | undefined>, string, any>;
export {};
