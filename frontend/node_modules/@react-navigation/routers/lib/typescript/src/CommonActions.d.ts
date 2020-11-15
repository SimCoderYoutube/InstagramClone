import type { NavigationState, PartialState, Route } from './types';
declare type ResetState = PartialState<NavigationState> | NavigationState | (Omit<NavigationState, 'routes'> & {
    routes: Omit<Route<string>, 'key'>[];
});
export declare type Action = {
    type: 'GO_BACK';
    source?: string;
    target?: string;
} | {
    type: 'NAVIGATE';
    payload: {
        key: string;
        name?: undefined;
        params?: object;
    } | {
        name: string;
        key?: string;
        params?: object;
    };
    source?: string;
    target?: string;
} | {
    type: 'RESET';
    payload: ResetState;
    source?: string;
    target?: string;
} | {
    type: 'SET_PARAMS';
    payload: {
        params?: object;
    };
    source?: string;
    target?: string;
};
export declare function goBack(): Action;
export declare function navigate(route: {
    key: string;
    params?: object;
} | {
    name: string;
    key?: string;
    params?: object;
}): Action;
export declare function navigate(name: string, params?: object): Action;
export declare function reset(state: ResetState): Action;
export declare function setParams(params: object): Action;
export {};
