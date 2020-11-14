import type { NavigationState, PartialState, Router, DefaultRouterOptions, ParamListBase } from './types';
export declare type TabActionType = {
    type: 'JUMP_TO';
    payload: {
        name: string;
        params?: object;
    };
    source?: string;
    target?: string;
};
export declare type BackBehavior = 'initialRoute' | 'order' | 'history' | 'none';
export declare type TabRouterOptions = DefaultRouterOptions & {
    backBehavior?: BackBehavior;
};
export declare type TabNavigationState = Omit<NavigationState, 'history'> & {
    /**
     * Type of the router, in this case, it's tab.
     */
    type: 'tab';
    /**
     * List of previously visited route keys.
     */
    history: {
        type: 'route';
        key: string;
    }[];
};
export declare type TabActionHelpers<ParamList extends ParamListBase> = {
    /**
     * Jump to an existing tab.
     *
     * @param name Name of the route for the tab.
     * @param [params] Params object for the route.
     */
    jumpTo<RouteName extends Extract<keyof ParamList, string>>(...args: undefined extends ParamList[RouteName] ? [RouteName] | [RouteName, ParamList[RouteName]] : [RouteName, ParamList[RouteName]]): void;
};
export declare const TabActions: {
    jumpTo(name: string, params?: object | undefined): TabActionType;
};
export default function TabRouter({ initialRouteName, backBehavior, }: TabRouterOptions): Router<TabNavigationState, {
    type: "GO_BACK";
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "NAVIGATE";
    payload: {
        key: string;
        name?: undefined;
        params?: object | undefined;
    } | {
        name: string;
        key?: string | undefined;
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "RESET";
    payload: Readonly<{
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
    }>> | (Pick<Readonly<{
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
    }>, "stale" | "type" | "key" | "routeNames" | "index" | "history"> & {
        routes: Pick<Readonly<{
            key: string;
            name: string;
            params?: object | undefined;
        }>, "name" | "params">[];
    });
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "SET_PARAMS";
    payload: {
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | TabActionType>;
